const memoTitle = document.getElementById("memoTitle");
const memo = document.getElementById("memo");
const createdAt = document.getElementById("createdAt");
const updatedAt = document.getElementById("updatedAt");

const memoList = document.getElementById("memoList");
const tooltip = document.getElementById("tooltip");

const STORAGE_NAME = "small_memo";
const getNow = () => new Date().toISOString();

// 메모리에서 데이터 관리
const SMALL_MEMO = {
  lastId: 1,
  memoOrder: [1],
  memos: {
    1: {
      id: 1,
      title: "First",
      content: "",
      createdAt: getNow(),
      updatedAt: getNow(),
    },
  },
};

const getMemo = (id) => {
  return SMALL_MEMO.memos[id];
};

const setMemoDetail = (item) => {
  const userLang = navigator.language || "en-US";

  memoTitle.value = item.title;
  memo.value = item.content;
  createdAt.textContent = new Date(item.createdAt).toLocaleString(userLang);
  updatedAt.textContent = new Date(item.updatedAt).toLocaleString(userLang);
};

const createMemoElement = (id, title, callback) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.classList.add("list__memo");
  button.textContent = title;
  button.setAttribute("data-id", id);

  button.addEventListener("click", (e) => {
    const memo = getMemo(id);
    const lis = document.querySelector("li.active");

    lis?.classList.remove("active");
    e.target.parentElement.classList.add("active");

    setMemoDetail(memo);
  });

  button.addEventListener("mouseenter", (e) => {
    const text = e.target.textContent;
    tooltip.textContent = text;
    tooltip.style.display = "block";
  });

  button.addEventListener("mousemove", (e) => {
    tooltip.style.top = `${e.pageY - 30}px`;
    tooltip.style.left = `${e.pageX}px`;
  });

  button.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  li.appendChild(button);
  callback(li);
};

const renderMemoList = () => {
  memoList.innerHTML = ""; // ⭐ 반드시 필요

  SMALL_MEMO.memoOrder
    .sort(
      (a, b) =>
        new Date(SMALL_MEMO.memos[b].updatedAt) -
        new Date(SMALL_MEMO.memos[a].updatedAt)
    )
    .forEach((id) => {
      const title = getMemo(id).title.trim();
      createMemoElement(id, title || "memo", (li) => memoList.append(li));
    });
};

/**
 * 팝업 열릴 때 저장소에서 데이터 불러오기
 */
chrome.storage.local.get(["STORAGE_NAME"]).then((result) => {
  if (result.STORAGE_NAME) {
    Object.assign(SMALL_MEMO, result.STORAGE_NAME);
  }
  renderMemoList();
  document.querySelectorAll(".list__memo")[0].children[0].click();
});

/**
 * 메모 저장
 */
const saveMemo = async () => {
  await chrome.storage.local.set({
    STORAGE_NAME: SMALL_MEMO,
  });
};

/**
 * 새로운 메모 추가
 */
const createMemo = () => {
  const memoId = ++SMALL_MEMO.lastId;
  const now = getNow();

  const memo = {
    id: memoId,
    title: "",
    content: "",
    createdAt: now,
    updatedAt: now,
  };

  SMALL_MEMO.memoOrder.push(memoId);
  SMALL_MEMO.memos[memoId] = memo;

  return memoId;
};

const newMemo = document.getElementById("newMemo");
newMemo.addEventListener("click", async () => {
  const id = createMemo();
  createMemoElement(id, "new", (li) => memoList.prepend(li));
  document.querySelectorAll(".list__memo")[0].children[0].click();

  await saveMemo();
});

/**
 * 메모 수정-title
 */
memoTitle.addEventListener("change", async (e) => {
  const button = document.querySelector("li.active").children[0];
  const id = button.dataset.id;
  const title = e.target.value;

  button.textContent = title;
  SMALL_MEMO.memos[id].title = title;
  SMALL_MEMO.memos[id].updatedAt = getNow();

  await saveMemo();
});

/**
 * 메모 수정-content
 */
memo.addEventListener("change", async (e) => {
  const id = document.querySelector("li.active").children[0].dataset.id;

  SMALL_MEMO.memos[id].content = e.target.value;
  SMALL_MEMO.memos[id].updatedAt = getNow();

  await saveMemo();
});

/**
 * 메모 삭제
 */
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", async (e) => {
  const modal = document.getElementById("deleteModal");
  modal.style.display = "block";

  document.getElementById("confirmDelete").onclick = async function () {
    const li = document.querySelector("li.active");
    const next = li.previousElementSibling
      ? li.previousElementSibling
      : li.nextElementSibling;
    li?.remove();
    modal.style.display = "none";

    const id = Number(li.children[0].dataset.id);
    delete SMALL_MEMO.memos[id];
    SMALL_MEMO.memoOrder = SMALL_MEMO.memoOrder.filter(
      (memoId) => memoId !== id
    );

    if (next) next.children[0].click();
    else newMemo.click();

    await saveMemo();
  };

  document.getElementById("cancelDelete").onclick = function () {
    modal.style.display = "none";
  };
});

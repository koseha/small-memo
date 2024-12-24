import { memoUtils } from "/scripts/memoData.js";


const memoTitle = document.getElementById("memoTitle");
const memo = document.getElementById("memo");
const createdAt = document.getElementById("createdAt");
const updatedAt = document.getElementById("updatedAt");

const memoList = document.getElementById("memoList");

let userMemos = memoUtils.getList();


const setMemoDetail = (item) => {
  memoTitle.value = item.title;
  memo.value = item.content;
  createdAt.textContent = item.createdAt;
  updatedAt.textContent = item.updatedAt;
}

const createMemoElement = (id, title, callback) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.classList.add("list__memo");
  button.textContent = title;
  button.setAttribute("data-id", id);

  button.addEventListener("click", (e) => {
    const memo = memoUtils.getMemo(id);
    const lis = document.querySelector("li.active");

    lis?.classList.remove("active");
    e.target.parentElement.classList.add("active");

    setMemoDetail(memo);
  });

  li.appendChild(button);
  callback(li);
}

// render : memo list
userMemos.memoOrder.forEach(id => {
  const initMemo = userMemos.memos[id];
  createMemoElement(id, initMemo.title, (li) => memoList.append(li));
});

// new memo
const newMemo = document.getElementById("newMemo");
newMemo.addEventListener("click", (e) => {
  const id = memoUtils.newMemo();
  createMemoElement(id, "new", (li) => memoList.prepend(li));

  document.querySelectorAll(".list__memo")[0].children[0].click();
});

// save - title
memoTitle.addEventListener("change", (e) => {
  const id = document.querySelector("li.active").children[0].dataset.id;
  const title = e.target.value;
  memoUtils.updateTitle(id, title);
});

// save - content
memo.addEventListener("change", (e) => {
  const id = document.querySelector("li.active").children[0].dataset.id;
  const content = e.target.value;
  console.log(memoUtils.updateContent(id, content));
});

// remove memo
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", (e) => {
  const modal = document.getElementById("deleteModal");
  modal.style.display = "block";

  document.getElementById("confirmDelete").onclick = function() {
    const li = document.querySelector("li.active");
    const next = li.previousElementSibling ? li.previousElementSibling : li.nextElementSibling;
    li?.remove();
    modal.style.display = "none";

    if (next) next.children[0].click();
    else newMemo.click();
  };

  document.getElementById("cancelDelete").onclick = function() {
    modal.style.display = "none";
  };
});

// init : 메모장 초기화
document.querySelectorAll(".list__memo")[0].children[0].click();

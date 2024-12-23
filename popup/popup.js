/*
small_memo = {
  id: , // auto incre
  memo: [
    {
      id: ,
      title: "",
      content: "",
      createdAt: "",
      updatedAt: ""
    },
  ]
}
*/

const SMALL_MEMO = {
  id: 5,
  memo: [
    {
      id: 1,
      title: "메모1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
      createdAt: '12/23/2024, 4:18:28 PM',
      updatedAt: '12/23/2024, 4:20:28 PM'
    },
    {
      id: 2,
      title: "메모2메",
      content: "Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.",
      createdAt: '12/23/2024, 4:20:28 PM',
      updatedAt: '12/23/2024, 4:23:28 PM'
    },
    {
      id: 3,
      title: "메모333",
      content: "대통령의 선거에 관한 사항은 법률로 정한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다. 제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      createdAt: '12/23/2024, 4:19:28 PM',
      updatedAt: '12/23/2024, 4:22:28 PM'
    },
    {
      id: 4,
      title: "메모4메메메메메메",
      content: "Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.",
      createdAt: '12/23/2024, 4:33:33 PM',
      updatedAt: '12/23/2024, 4:43:55 PM'
    },
    {
      id: 5,
      title: "메모5메모메모메모",
      content: "대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
      createdAt: '12/23/2024, 4:34:28 PM',
      updatedAt: '12/23/2024, 4:46:13 PM'
    },
  ]
}

const memoTitle = document.getElementById("memoTitle");
const memo = document.getElementById("memo");
const createdAt = document.getElementById("createdAt");
const updatedAt = document.getElementById("updatedAt");

const setMemoDetail = function(item) {
  memoTitle.value = item.title;
  memo.value = item.content;
  createdAt.textContent = item.createdAt;
  updatedAt.textContent = item.updatedAt;
}

/**
 * 
 */
const memoList = document.getElementById("memoList");
SMALL_MEMO.memo.forEach(item => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.classList.add("list__memo");

  button.textContent = item.title;
  button.setAttribute("data-id", item.id);

  button.addEventListener("click", (e) => {
    const memoId = Number(e.target.dataset.id);
    const udpatedMemo = SMALL_MEMO.memo.find(m => m.id === memoId);
    setMemoDetail(udpatedMemo);
    const lis = document.querySelector("li.active");
    lis?.classList.remove("active");
    e.target.parentElement.classList.add("active");
  });

  li.appendChild(button);
  memoList.appendChild(li);
});

/**
 * new memo : 새로운 메모 추가
 */
const newMemo = document.getElementById("newMemo");
newMemo.addEventListener("click", () => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.classList.add("list__memo");

  SMALL_MEMO.id += 1;
  const now = new Date();
  const userLang = navigator.language || 'en-US';
  const formattedTime = now.toLocaleString(userLang);


  const item = {
    id: SMALL_MEMO.id,
    title: "",
    content: "",
    createdAt: formattedTime,
    updatedAt: formattedTime
  }

  button.textContent = "new";
  
  button.setAttribute("data-id", item.id);

  button.addEventListener("click", (e) => {
    const memoId = Number(e.target.dataset.id);
    const udpatedMemo = SMALL_MEMO.memo.find(m => m.id === memoId);
    if (udpatedMemo) setMemoDetail(udpatedMemo);
    else setMemoDetail(item);
    const lis = document.querySelector("li.active");
    lis?.classList.remove("active");
    e.target.parentElement.classList.add("active");
  });

  li.appendChild(button);
  memoList.prepend(li);

  button.click();
});

/**
 * 내용 저장
 * 
 * title >> 입력때마다 바뀜 >> onchange
 * - 변경 : button 텍스트
 * memo >> focusout 시 저장
 * updated at >> memo 저장될 때 업데이트
 */

memoTitle.addEventListener("change", (e) => {
  const li = document.querySelector("li.active");
  const button = li.children[0];
  const titleValue = e.target.value;
  button.textContent = titleValue;
  const memoId = Number(button.dataset.id);
  SMALL_MEMO.memo.find(item => item.id === memoId).title = titleValue;
});

memo.addEventListener("change", (e) => {
  const li = document.querySelector("li.active");
  const button = li.children[0];

  const now = new Date();
  const userLang = navigator.language || 'en-US';
  const formattedTime = now.toLocaleString(userLang);

  const title = memoTitle.value;
  const createdAtValue = createdAt.textContent;

  const updatedItem = {
    id: Number(button.dataset.id),
    title,
    content: e.target.value,
    createdAt: createdAtValue,
    updatedAt: formattedTime
  }

  const memoIndex = SMALL_MEMO.memo.findIndex(item => item.id === updatedItem.id);
  
  if (memoIndex !== -1) {
    SMALL_MEMO.memo[memoIndex] = updatedItem;
  } else {
    SMALL_MEMO.memo.unshift(updatedItem);
  }
  
});

/**
 * delete
 */
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


/**
 * init : 메모장 초기화
 */
document.querySelectorAll(".list__memo")[0].children[0].click();
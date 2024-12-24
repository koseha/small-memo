import { SMALL_MEMO } from "/scripts/test_data.js";


const getNow = () => new Date().toLocaleString(navigator.language || 'en-US');

// 데이터 조회, 추가, 수정, 삭제
const getList = () => {
  return SMALL_MEMO;
}

const getMemo = (id) => {
  return SMALL_MEMO.memos[id];
}

// 추가
// new()
const newMemo = () => {
  const memoId = ++SMALL_MEMO.lastId;
  const now = getNow();

  const memo = {
    "id": memoId,
    "title": "",
    "content": "",
    "createdAt": now,
    "updatedAt": now
  };

  SMALL_MEMO.memoOrder.push(memoId);
  SMALL_MEMO.memos[memoId] = memo;

  return memoId;
}

// 수정-title
// update: title, updatedAt
const updateTitle = (id, title) => {
  const now = getNow();
  
  SMALL_MEMO.memos[id].title = title;
  SMALL_MEMO.memos[id].updatedAt = now;

  return SMALL_MEMO.memos[id];
}

// 수정-content
// update: content, updatedAt
const updateContent = (id, content) => {
  const now = getNow();

  SMALL_MEMO.memos[id].content = content;
  SMALL_MEMO.memos[id].updatedAt = now;

  return SMALL_MEMO.memos[id];
}

// 삭제
// delete(id)
const remove = (id) => {
  delete SMALL_MEMO.memos[id];
  SMALL_MEMO.memoOrder = SMALL_MEMO.memoOrder.filter(memoId => memoId !== id);
}

// export 관리
export const memoUtils = {
  getMemo,
  getList,
  newMemo,
  updateTitle,
  updateContent,
  remove
}
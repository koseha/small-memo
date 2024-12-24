# 데이터 다루기

## 1

```javascript
small_memo = {
  nextId: , // auto incre
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
```

<br>

## 2

위의 데이터 구조는 잦은 데이터 조회와 수정 등에 번거로운 작업이 있음.

### 성능 비교

| 데이터 수 | Array 탐색 (find) |	Object 접근 (memos[id]) |
| --- | --- | --- |
| 10	| O(10) |	O(1) |
| 100 |	O(100) |	O(1) |
| 1000 |	O(1000) |	O(1) |

<br>

### 데이터가 많아질 때 기대 효과

- 확장성: 메모가 수백 개에 달해도 조회 및 수정 속도가 느려지지 않습니다.
- 간결성: 메모 데이터를 Object 형태로 저장하여 탐색이 간단하고 코드가 깔끔해집니다.
- 메모 순서 조정: UI에서 메모를 드래그하여 순서를 변경하면 memoOrder만 수정되므로 성능이 향상됩니다.


```javascript
{
  "nextId": 51,
  "memoOrder": [1, 2, 3, 25, 50],
  "memos": {
    "1": {
      "id": 1,
      "title": "",
      "content": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "2": {
      "id": 1,
      "title": "",
      "content": "",
      "createdAt": "",
      "updatedAt": ""
    },
    "3": {
      "id": 1,
      "title": "",
      "content": "",
      "createdAt": "",
      "updatedAt": ""
    },
  }
}
```
<br>

# 저장소(storage) 이용하기



<br>

# 시간(created at, updated at) 포맷

나라별 기존

```javascript
const getNow = () => new Date().toLocaleString(navigator.language || 'en-US');

const setMemoDetail = (item) => {
  memoTitle.value = item.title;
  memo.value = item.content;
  createdAt.textContent = item.createdAt;
  updatedAt.textContent = item.updatedAt;
}

userMemos.memoOrder.forEach(id => {
  const initMemo = userMemos.memos[id];
  createMemoElement(id, initMemo.title, (li) => memoList.append(li));
});
```

UTC 적용

```javascript
const getNow = () => new Date().toISOString();

const setMemoDetail = (item) => {
  const userLang = navigator.language || 'en-US';

  memoTitle.value = item.title;
  memo.value = item.content;
  createdAt.textContent = new Date(item.createdAt).toLocaleString(userLang);
  updatedAt.textContent = new Date(item.updatedAt).toLocaleString(userLang);
}

const renderMemoList = () => {
  SMALL_MEMO.memoOrder.sort((a, b) => new Date(SMALL_MEMO.memos[b].updatedAt) - new Date(SMALL_MEMO.memos[a].updatedAt));
  
  SMALL_MEMO.memoOrder.forEach(id => {
    const title = getMemo(id).title.trim();
    createMemoElement(id, title || "memo", (li) => memoList.append(li))
  });
};
```
/**
 * 2. 데이터 구조 수정형
 */
export const SMALL_MEMO = {
  "lastId": 5,
  "memoOrder": [1, 2, 3, 4, 5],
  "memos": {
    "1": {
      "id": 1,
      "title": "메모1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
      "createdAt": '12/23/2024, 4:18:28 PM',
      "updatedAt": '12/23/2024, 4:20:28 PM'
    },
    "2": {
      "id": 2,
      "title": "메모2메",
      "content": "Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.",
      "createdAt": '12/23/2024, 4:20:28 PM',
      "updatedAt": '12/23/2024, 4:23:28 PM'
    },
    "3": {
      "id": 3,
      "title": "메모333",
      "content": "대통령의 선거에 관한 사항은 법률로 정한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다. 제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      "createdAt": '12/23/2024, 4:19:28 PM',
      "updatedAt": '12/23/2024, 4:22:28 PM'
    },
    "4": {
      "id": 4,
      "title": "메모4메메메메메메",
      "content": "Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.",
      "createdAt": '12/23/2024, 4:33:33 PM',
      "updatedAt": '12/23/2024, 4:43:55 PM'
    },
    "5": {
      "id": 5,
      "title": "메모5메모메모메모",
      "content": "대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
      "createdAt": '12/23/2024, 4:34:28 PM',
      "updatedAt": '12/23/2024, 4:46:13 PM'
    },
  }
}


/**
 * 초기형 데이터 구조

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
  */
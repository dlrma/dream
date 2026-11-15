/* ============================================================
   데이터 파일
   ------------------------------------------------------------
   avatar  : 프로필 이미지 링크("https://...") 또는 저장소 경로("img/doui.png"). 비우면 물고기 아이콘
   scriptFile : TXT 대화 스크립트 경로 (scripts/hansegye.txt 맨 위 설명 참고)
   group   : "fav"(즐겨찾기) / "guest"(게스트)
   history : 처음부터 들어 있는 대화
   ============================================================ */
window.GAME_DATA = {
  version: 8,
  dividerWait: 5000,

  /* 호감도 창 기본값. 단계별 호칭은 캐릭터 affinity.stages에서 설정합니다.
     팝업 문구에는 {이름}, {주인공이름}, {호감도}를 사용할 수 있습니다. */
  affinityDefault: { level: 100, color: "#ef9090", dot: true, title: "내 친구" },
  affinityToast: "{천의소}님은 {주인공이름}님을 [{호감도}]라고 생각하고 있습니다.",
  clearToast: "[{천의소}]의 공략이 완료 되었습니다.",

  me: { name: "주인공", status: "♪", avatar: "img/me.png" },

  characters: [
    {
      id: "uiso", name: "천의소", group: "fav", status: "",
      avatar: "img/uiso.png",
      scriptFile: "scripts/uiso.txt",        // ← 대화는 이 txt 파일에서 읽어옴
      affinity: { level: 0, color: "#55c4b4", dot: false, title: "?",
        stages: [ 
          { from: 1, title: "무서운 사람" },
          { from: 30, title: "뭔데 자꾸 연락해" },
          { from: 50, title: "다 보이는데" },
          { from: 80, title: "..." },
          { from: 100, title: "내 친구" },
        ],
      },
    },
  ],

  /* 추천 친구 탭. id는 사람을 추가할때마다 r2 r3 이런 식으로 늘려주세요*/
  recommended: [
    { id: "r1", name: "건초", addAs: "guest", status: "상태:저능의제왕", avatar: "",
      affinity: { dot: false, title: "뿡ㅋㅋ" } },
  ],

  /* 쪽지 탭 */
  mail: [
    { from: "세계의 한마디", text: "최신 화이팅!", read: false },
  ],
};

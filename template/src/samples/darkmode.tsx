import React from "react";

const DarkModeExample = () => {
  return (
    <div>
      {/* 
        컨테이너 div: 전체 레이아웃을 감싸는 div입니다.
        - bg-l-bg-1: 라이트 모드일 때 배경 색상을 설정합니다.
        - text-l-text: 라이트 모드일 때 텍스트 색상을 설정합니다.
        - dark:bg-dark-bg-1: 다크 모드일 때 배경 색상을 설정합니다.
        - dark:text-dark-text: 다크 모드일 때 텍스트 색상을 설정합니다.
        - w-24 h-8: 너비와 높이를 설정합니다.
      */}
      <div className="bg-l-bg-1 text-l-text dark:bg-d-bg-1 dark:text-d-text w-24 h-8">
        Text!
      </div>

      {/* 
        버튼: 클릭 시 다크 모드와 라이트 모드를 전환합니다.
        - onClick: 버튼 클릭 시 실행되는 이벤트 핸들러입니다.
        - document.documentElement.classList.toggle("dark"): HTML 문서의 최상위 요소에 'dark' 클래스를 토글하여 다크 모드를 적용하거나 해제합니다.
      */}
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
      >
        Toggle Dark Mode!
      </button>
    </div>
  );
};

export default DarkModeExample;

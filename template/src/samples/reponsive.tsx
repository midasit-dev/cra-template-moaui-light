import React from "react";

const ResponsiveLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-d-bg-DEFAULT">
      {/* 상단 네비게이션 바 */}
      <header className="flex bg-l-pastel-blue dark:bg-d-pastel-blue p-4 text-l-text-DEFAULT dark:text-d-text-DEFAULT justify-between">
        {/* 네비게이션 바 제목 */}
        <h1 className="text-xl font-bold text-l-text-3 dark:text-d-text-1">
          Navigation Bar
        </h1>

        {/* 다크 모드 토글 버튼 */}
        <button
          className="text-l-text-3 dark:text-d-text-1"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          <h1 className="text-xl font-bold text-l-text-3 dark:text-d-text-1">
            Toggle Dark Mode
          </h1>
        </button>
      </header>

      {/* 주 레이아웃 영역: 좌측 사이드바, 콘텐츠 영역, 우측 사이드바 */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* 좌측 사이드바 */}
        <aside className="bg-l-pastel-green dark:bg-d-pastel-green w-full md:w-64 p-4">
          <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
            Left Sidebar
          </h2>
        </aside>

        {/* 가운데 콘텐츠 영역 */}
        <main className="flex-1 bg-l-pastel-yellow dark:bg-d-pastel-yellow p-4">
          <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
            Content Area
          </h2>
        </main>

        {/* 우측 사이드바 */}
        <aside className="bg-l-pastel-pink dark:bg-d-pastel-pink w-full md:w-64 p-4">
          <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
            Right Sidebar
          </h2>
        </aside>
      </div>
    </div>
  );
};

export default ResponsiveLayout;

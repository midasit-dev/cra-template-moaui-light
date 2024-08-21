import React from "react";

const ResponsiveLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-d-bg">
      <header className="flex bg-l-pastel-blue dark:bg-d-pastel-blue p-4 text-l-text dark:text-d-text justify-between">
        <HeaderText />
        <ColorToggleButton />
      </header>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <aside className="bg-l-pastel-green dark:bg-d-pastel-green w-full md:w-64 p-4">
          <LeftSideText />
        </aside>

        <main className="flex-1 bg-l-pastel-yellow dark:bg-d-pastel-yellow p-4 overflow-y-auto">
          <MainText />
        </main>

        <aside className="bg-l-pastel-pink dark:bg-d-pastel-pink w-full md:w-64 p-4">
          <RightSideText />
        </aside>
      </div>

      <footer className="flex p-4 bg-l-pastel-blue dark:bg-d-pastel-blue text-l-text dark:text-d-text">
        <FooterText />
      </footer>
    </div>
  );
};

export default ResponsiveLayout;

function HeaderText() {
  return (
    <h1 className="text-xl font-bold text-l-text-3 dark:text-d-text-1">
      Header
    </h1>
  );
}

function ColorToggleButton() {
  return (
    <button
      className="text-l-text-3 dark:text-d-text-1"
      onClick={() => document.documentElement.classList.toggle("dark")}
    >
      <h1 className="text-xl font-bold text-l-text-3 dark:text-d-text-1">
        Toggle Dark Mode
      </h1>
    </button>
  );
}

function LeftSideText() {
  return (
    <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
      Left Sidebar
    </h2>
  );
}

function MainText() {
  const Text = () => (
    <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
      Main Area
    </h2>
  );

  return (
    <>
      {Array.from({ length: 40 }, (_, i) => (
        <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
          Main Area
        </h2>
      ))}
    </>
  );
}

function RightSideText() {
  return (
    <h2 className="text-lg font-semibold text-l-text-3 dark:text-d-text-1">
      Right Sidebar
    </h2>
  );
}

function FooterText() {
  return (
    <h1 className="text-xl font-bold text-l-text-3 dark:text-d-text-1">
      Footer
    </h1>
  );
}

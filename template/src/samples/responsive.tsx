import React from "react";
import "./responsive.css";

const ResponsiveLayout: React.FC = () => {
  return (
    <div className="responsive-container">
      <header className="responsive-header">
        <HeaderText />
        <ColorToggleButton />
      </header>

      <div className="responsive-content">
        <aside className="responsive-asides">
          <LeftSideText />
        </aside>

        <main className="responsive-main">
          <MainText />
        </main>

        <aside className="responsive-asides">
          <RightSideText />
        </aside>
      </div>

      <footer className="responsive-footer">
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

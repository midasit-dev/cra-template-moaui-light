import React, { useEffect, useState } from "react";

const Progress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //0 ~ 100, 순차적으로 증가하는데 고정된 비율이 아닌 랜덤한 비율로 증가
      setValue((prev) => (prev + Math.random() * 10) % 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="self-center p-4">
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>
      <span
        role="progressbar"
        aria-valuenow={value}
        className="block rounded-full bg-gray-200 dark:bg-gray-700"
      >
        <span
          className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-indigo-400 to-indigo-500"
          style={{
            width: `${value}%`,
          }}
        ></span>
      </span>
    </div>
  );
};

export default Progress;

import React from "react";

const CreateBtn = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
      href="https://midasit.com"
    >
      <span className="absolute -start-full transition-all group-hover:start-4 text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
        >
          <path
            d="M9.63628 5.27273V12.3473L6.909 11.1745L4.18173 12.3473V5.27273H9.63628ZM11.8181 2H6.35809C5.75809 2 5.27264 2.49091 5.27264 3.09091H10.7272C11.3272 3.09091 11.8181 3.58182 11.8181 4.18182V11.2727L12.909 11.8182V3.09091C12.909 2.49091 12.4181 2 11.8181 2ZM9.63628 4.18182H4.18173C3.58173 4.18182 3.09082 4.67273 3.09082 5.27273V14L6.909 12.3636L10.7272 14V5.27273C10.7272 4.67273 10.2363 4.18182 9.63628 4.18182Z"
            className="fill-white"
          />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:ms-4">
        {" "}
        Create{" "}
      </span>
    </a>
  );
};

export default CreateBtn;

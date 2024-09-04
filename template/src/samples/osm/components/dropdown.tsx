import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropDown = (props: any) => {
  const { label } = props;

  const [value, setValue] = useState(label);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <div className="w-32 inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-800 justify-between">
        <a
          href="#"
          className="flex flex-1 border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          onClick={() => setIsShow(!isShow)}
        >
          {value}
        </a>

        <button
          onClick={() => setIsShow(!isShow)}
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isShow && (
          <motion.div
            className="absolute start-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
            role="menu"
            initial={{ opacity: 0, scale: 0.9, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
            exit={{ opacity: 0, scale: 0.9, y: -16 }}
          >
            <div className="p-2">
              {Array.from(
                ["American", "Korean", "European", "Japanese"],
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    role="menuitem"
                    onClick={() => {
                      setValue(item);
                      setIsShow(false);
                    }}
                  >
                    {item}
                  </a>
                )
              )}

              <form method="POST" action="#">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Product
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;

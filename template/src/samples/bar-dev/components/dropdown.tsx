import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  data?: string[];
  width?: number | string;
  onChange?: (value: string) => void;
}

const DropDown: React.FC<Props> = ({ data, width, onChange }) => {
  const [value, setValue] = useState(data ? data[0] : "none!");
  const [isShow, setIsShow] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} style={{ width: width ?? 128 }}>
      <div className="w-full inline-flex items-center overflow-hidden rounded-md border with-dark-bg-white dark:border-gray-800 justify-between">
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
            className="absolute start-0 z-10 mt-2 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
            style={{ width: width ?? 128 }}
            role="menu"
            initial={{ opacity: 0, scale: 0.9, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
            exit={{ opacity: 0, scale: 0.9, y: -16 }}
          >
            <div className="p-2">
              {Array.from(data ?? ["No data available!"], (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  role="menuitem"
                  onClick={() => {
                    if (onChange) onChange(item);
                    setValue(item);
                    setIsShow(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;

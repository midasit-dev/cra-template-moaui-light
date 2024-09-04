import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MoreProps {
  title?: string | React.ReactNode;
  desc?: string | React.ReactNode;
  tooltipWidth?: number;
}

const More: React.FC<MoreProps> = ({ title, desc, tooltipWidth }) => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className="flex relative">
      <span
        className="whitespace-nowrap rounded-full bg-white hover:bg-gray-50 dark:bg-gray-700 hover:dark:bg-gray-600 px-2.5 py-0.5 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          stroke-linecap="round"
          className="size-6"
        >
          <circle cx="6" cy="12" r="0.5" />
          <circle cx="12" cy="12" r="0.5" />
          <circle cx="18" cy="12" r="0.5" />
        </svg>
      </span>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 right-full z-10"
            style={{
              minWidth: tooltipWidth ?? 400,
            }}
          >
            <MoreTooltip title={title} desc={desc} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default More;

interface MoreTooltipProps {
  title?: string | React.ReactNode;
  desc?: string | React.ReactNode;
}
const MoreTooltip: React.FC<MoreTooltipProps> = ({ title, desc }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
      {title ? (
        typeof title === "string" ? (
          <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        ) : (
          <>{title}</>
        )
      ) : null}

      {desc ? (
        typeof desc === "string" ? (
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        ) : (
          <>{desc}</>
        )
      ) : null}
    </article>
  );
};

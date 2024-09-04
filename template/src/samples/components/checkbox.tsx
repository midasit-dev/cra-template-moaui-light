import React from "react";

const Checkbox = (props: any) => {
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">
        CheckBoxes Title
      </legend>

      <p className="mt-1 text-pretty text-sm text-gray-700">Description</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pt-4">
        <div className="space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {" "}
                John Clapton{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {" "}
                Peter Mayer{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option3"
              />
            </div>

            <div>
              <strong className="text-pretty font-medium text-gray-900 dark:text-white">
                {" "}
                Eric King{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </label>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="Option4"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
            onChange={(e: any) => console.log(e.target.checked)}
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option4"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {" "}
                John Clapton{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option5"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option5"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {" "}
                Peter Mayer{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option6"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id="Option6"
              />
            </div>

            <div>
              <strong className="text-pretty font-medium text-gray-900 dark:text-white">
                {" "}
                Eric King{" "}
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default Checkbox;

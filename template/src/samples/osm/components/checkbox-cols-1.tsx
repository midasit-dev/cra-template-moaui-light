import React from "react";

interface Option {
  label: string;
  description?: string;
  readonly?: boolean;
}

interface Props {
  title: string;
  description?: string;
  options: Option[];
  prefix: string;
}

const Checkbox = (props: Props) => {
  const { title, description, options, prefix } = props;

  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">{title}</legend>
      <p className="mt-1 text-pretty text-sm text-gray-700">{description}</p>

      <div className="grid grid-cols-1 gap-4 pt-4">
        <div className="space-y-2">
          {Array.from(options).map((option: Option, index: number) => (
            <label
              key={index}
              htmlFor={`${prefix}-${option.label}-${index}`}
              className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
            >
              <div className="flex items-center">
                &#8203;
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                  id={`${prefix}-${option.label}-${index}`}
                />
              </div>

              <div>
                <strong className="font-medium text-gray-900 dark:text-white">
                  {" "}
                  {option.label}{" "}
                </strong>

                <p className="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
};

export default Checkbox;

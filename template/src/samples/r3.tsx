import React, { useState } from "react";
import "./r3.css";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen">
      <div className="grid grid-cols-1 gap-0 px-4 pt-4 pb-2">
        <div className="flex w-full h-32 rounded-lg gap-4 p-4 bg-gray-200 dark:bg-gray-700 justify-between items-center">
          <div className="flex h-32 gap-4 items-center">
            <DropDown label="Map" />
            <DropDown label="Standard" />
            <DropDown label="Annex" />
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 px-4 py-2">
        <div className="r3-main"></div>
        <div className="r3-r-side">
          <Input />
          <DetailLists />
        </div>
      </div>
    </div>
  );
};

export default App;

const DropDown = (props: any) => {
  const { label } = props;

  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-800">
        <a
          href="#"
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          {label}
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

      {isShow && (
        <div
          className="absolute start-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
          role="menu"
        >
          <div className="p-2">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              role="menuitem"
            >
              View on Storefront
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              role="menuitem"
            >
              View Warehouse Info
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              role="menuitem"
            >
              Duplicate Product
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              role="menuitem"
            >
              Unpublish Product
            </a>

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
        </div>
      )}
    </div>
  );
};

const Button = () => {
  return (
    <a
      className="group relative inline-flex items-center overflow-hidden rounded dark:bg-gray-800 px-8 py-3 text-gray-600 dark:text-white focus:outline-none focus:ring dark:active:bg-gray-500"
      href="#"
      onClick={(e) => document.documentElement.classList.toggle("dark")}
    >
      <span className="absolute -start-full transition-all group-hover:start-4">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:ms-4">
        {" "}
        Toggle{" "}
      </span>
    </a>
  );
};

const Input = () => {
  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search for...{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder="search for locations ..."
        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

const DetailLists = () => {
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700">
      <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
          <dt className="font-medium text-gray-900 dark:text-white">Title</dt>
          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Mr</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
          <dt className="font-medium text-gray-900 dark:text-white">Name</dt>
          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            John Frusciante
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
          <dt className="font-medium text-gray-900 dark:text-white">
            Occupation
          </dt>
          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            Guitarist
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
          <dt className="font-medium text-gray-900 dark:text-white">Salary</dt>
          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            $1,000,000+
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
          <dt className="font-medium text-gray-900 dark:text-white">Bio</dt>
          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
            debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
            quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
            aliquam soluta architecto?
          </dd>
        </div>
      </dl>
    </div>
  );
};

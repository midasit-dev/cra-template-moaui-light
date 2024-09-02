import React from "react";
import { Button, DropDown, Input, Checkbox, DetailLists } from "../components";
import "./index.css";

const ResponseLayout = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 gap-0 px-4 pt-4 pb-2">
        <div className="flex w-full h-32 rounded-lg gap-4 p-4 justify-between items-center box-border border border-gray-300 dark:border-gray-600">
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
        <div className="responsive-1-main">
          <Checkbox />
        </div>
        <div className="responsive-1-r-side">
          <Input />
          <DetailLists />
        </div>
      </div>
    </div>
  );
};

export default ResponseLayout;

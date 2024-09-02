import React from "react";
import { Button, DropDown, Input, DetailLists } from "./components";
import OsmMap from "./osm-main/osm-map";
import "./index.css";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen">
      <div className="grid grid-cols-1 gap-0 px-4 pt-4 pb-2">
        <div className="osm-nav">
          <div className="flex h-32 gap-4 items-center z-10">
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
        <div className="osm-main">
          <OsmMap />
        </div>
        <div className="osm-r-side">
          <Input />
          <DetailLists />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "./mainTab.css";
import TaskTab from "./taskTab";

const MainTab = () => {
  return (
    <div className="mainTabCon">
      <div className="mainCon">
        <TaskTab />
      </div>
    </div>
  );
};

export default MainTab;

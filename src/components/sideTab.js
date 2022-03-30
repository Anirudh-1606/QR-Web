import React from "react";
import RecentCard from "./recentCard";
import "./sideTab.css";
const SideTab = () => {
  return (
    <div className="sideTabCon">
      <div className="recentTab">
        <h1>Recent Orders</h1>
        <div className="cards">
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </div>
        <hr
          style={{
            color: "white",
            width: "80%",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default SideTab;

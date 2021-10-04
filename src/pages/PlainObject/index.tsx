import React from "react";
import Sidebar from "../../components/Sidebar";
import LeftPanel from "./components/LeftPanel";
import MainPanel from "./components/MainPanel";
import RightPanel from "./components/RightPanel";
import classes from "./PlainObject.module.scss";

const PlainObject = () => {
  return (
    <div className={classes.wrapper}>
      <Sidebar position={"left"}>
        <LeftPanel />
      </Sidebar>
      <div className={classes.mainContent}>
        <MainPanel />
      </div>
      <Sidebar position={"right"}>
        <RightPanel />
      </Sidebar>
    </div>
  );
};

export default PlainObject;

import React from "react";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        Page index
      </div>
      <div>
        <a href="/plain">Box vs Sphere</a>
      </div>
    </div>
  );
};

export default Home;

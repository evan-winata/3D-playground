import React from 'react';
import Sidebar from '../../components/Sidebar';
import classes from "./PlainObject.module.scss";

const PlainObject = () => {
    return (
      <div className={classes.wrapper}>
        <Sidebar position={"left"} maxWidth={400}>
          <div className={classes.content}>Left Sidebar content here</div>
          <div className={classes.content}><a href="/">Back to home</a></div>
        </Sidebar>
        <div className={classes.content}>Main content here</div>
        <Sidebar position={"right"} maxWidth={400}>
          <div className={classes.content}>Right Sidebar content here</div>
          <div className={classes.content}><a href="/">Back to home</a></div>
        </Sidebar>
      </div>
    );
  };
  
  export default PlainObject;
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {selectShape, changeShape} from "../../../../slices/shape/shapeSlice";
import Button from "../../../../components/Button";
import classes from "./LeftPanel.module.scss";

const LeftPanel = () => {
  const shape = useAppSelector(selectShape);
  const dispatch = useAppDispatch();

  const handleBoxSelection = () => {
    dispatch(changeShape('box'));
  }

  const handleSphereSelection = () => {
    dispatch(changeShape('sphere'));
  }

  return (
    <>
      <h3 className={classes.title}>Select the 3D shape below</h3>
      <div className={classes.row}>Currently selected shape: {shape}</div>
      <div className={classes.row}>
        <Button onClick={handleBoxSelection}>Box</Button>
      </div>
      <div className={classes.row}>
        <Button onClick={handleSphereSelection}>Sphere</Button>
      </div>
      <div className={classes.row}>
        <a href="/">Back to home</a>
      </div>
    </>
  );
};

export default LeftPanel;

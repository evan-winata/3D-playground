import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectColor,
  changeColor,
  selectXAxisRotation,
  selectYAxisRotation,
  changeXaxisRotation,
  changeYaxisRotation,
} from "../../../../slices/shape/shapeSlice";
import Button from "../../../../components/Button";
import classes from "./RightPanel.module.scss";

const RightPanel = () => {
  const selectedColor = useAppSelector(selectColor);
  const xRotation = useAppSelector(selectXAxisRotation);
  const yRotation = useAppSelector(selectYAxisRotation);

  const [color, setColor] = useState<string>(selectedColor);
  const [xAxisRotation, setXAxisRotation] = useState<boolean>(xRotation);
  const [yAxisRotation, setYAxisRotation] = useState<boolean>(yRotation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setXAxisRotation(xRotation);
  }, [xRotation]);
  useEffect(() => {
    setYAxisRotation(yRotation);
  }, [yRotation]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const submitColorChange = () => {
    dispatch(changeColor(color));
  };

  const handleAxisChange = (axis: string) => {
    return () => {
      if (axis === "x") {
        dispatch(changeXaxisRotation(!xAxisRotation));
      } else {
        dispatch(changeYaxisRotation(!yAxisRotation));
      }
    };
  };

  return (
    <>
      <h3 className={classes.title}>Configuration</h3>
      <div className={classes.row}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={xAxisRotation}
              onChange={handleAxisChange("x")}
            />
            Enable x-axis rotation
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={yAxisRotation}
              onChange={handleAxisChange("y")}
            />
            Enable y-axis rotation
          </label>
        </div>
        <div className={classes.rowGap}>
          Color: <input onChange={handleColorChange} value={color} />
        </div>
        <div className={classes.rowGap}>
          <Button onClick={submitColorChange}>Change Color</Button>
        </div>
      </div>
    </>
  );
};

export default RightPanel;

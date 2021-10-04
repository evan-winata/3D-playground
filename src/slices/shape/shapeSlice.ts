import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type ShapeTypes = "sphere" | "box";

export interface CounterState {
  selectedShape: ShapeTypes;
  color: string;
  xRotation: boolean;
  yRotation: boolean;
}

const initialState: CounterState = {
  selectedShape: "box",
  color: "#742edd",
  xRotation: false,
  yRotation: false,
};

export const shapeSlice = createSlice({
  name: "shape",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeShape: (state, action: PayloadAction<ShapeTypes>) => {
      state.selectedShape = action.payload;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    changeXaxisRotation: (state, action: PayloadAction<boolean>) => {
      state.xRotation = action.payload;
    },
    changeYaxisRotation: (state, action: PayloadAction<boolean>) => {
      state.yRotation = action.payload;
    },
  },
});

export const { changeShape, changeColor, changeXaxisRotation, changeYaxisRotation } = shapeSlice.actions;

export const selectShape = (state: RootState) => state.shape.selectedShape;
export const selectColor = (state: RootState) => state.shape.color;
export const selectXAxisRotation = (state: RootState) => state.shape.xRotation;
export const selectYAxisRotation = (state: RootState) => state.shape.yRotation;

export default shapeSlice.reducer;

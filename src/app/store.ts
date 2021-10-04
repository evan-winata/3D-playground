import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shapeReducer from '../slices/shape/shapeSlice';

export const store = configureStore({
  reducer: {
    shape: shapeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

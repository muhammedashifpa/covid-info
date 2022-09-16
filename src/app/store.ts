import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidReducer from '../features/covidData/covidDataSlice';

export const store = configureStore({
  reducer: {
    covid:covidReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

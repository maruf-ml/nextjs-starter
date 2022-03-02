import { createWrapper } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware, EnhancedStore, Store } from '@reduxjs/toolkit';

import slice, { IState } from '@slices/.';
import { useDispatch } from 'react-redux';

const devMode = process.env.NODE_ENV === 'development';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggerMiddleware = () => (next: any) => (action: any) => {
  return next(action);
};

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
  devTools: devMode,
});

const setupStore = (): EnhancedStore => store;

const makeStore = () => setupStore();

export const wrapper = createWrapper<Store<IState>>(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default wrapper;

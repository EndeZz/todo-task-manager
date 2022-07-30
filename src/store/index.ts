import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/localStorage';
import { ITask } from '../models/ITask';
import taskReducer from './task/taskSlice';

const rootReducer = combineReducers({
  task: taskReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  setLocalStorage<ITask[]>('store', store.getState().task.taskList);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

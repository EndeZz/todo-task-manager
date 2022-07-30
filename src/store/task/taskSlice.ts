import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/ITask';

interface taskState {
  taskList: ITask[];
}

const initialState: taskState = {
  taskList: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.taskList.push(action.payload);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },

    toggleCompleted: (state, action: PayloadAction<string>) => {
      const toggleTask = state.taskList.find(
        (task) => task.id === action.payload
      );
      if (toggleTask) {
        toggleTask.completed = !toggleTask.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleCompleted } = taskSlice.actions;
export default taskSlice.reducer;



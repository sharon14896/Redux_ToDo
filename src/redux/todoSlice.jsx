import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        item: action.payload.item,
        completed: false,
        date: action.payload.date,
        time: action.payload.time,
      };
      state.todosList.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[todoIndex].item = action.payload.item;
    },
    completeTodo: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[todoIndex].completed = !state.todosList[todoIndex]
        .completed;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  todoSlice.actions;

export const selectTodos = (state) => state.todos.todosList;
export default todoSlice.reducer;
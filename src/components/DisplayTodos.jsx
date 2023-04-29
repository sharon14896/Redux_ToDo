import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
  selectTodos,
} from "../redux/todoSlice";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodos = () => {
  const [sort, setSort] = useState("active");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo({id}));
  };

  const renderTodoItems = () => {
    switch (sort) {
      case "active":
        return todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              removeTodo={handleRemoveTodo}
              updateTodo={handleUpdateTodo}
              completeTodo={handleCompleteTodo}
            />
          ));
      case "completed":
        return todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              removeTodo={handleRemoveTodo}
              updateTodo={handleUpdateTodo}
              completeTodo={handleCompleteTodo}
            />
          ));
      case "all":
      default:
        return todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            removeTodo={handleRemoveTodo}
            updateTodo={handleUpdateTodo}
            completeTodo={handleCompleteTodo}
          />
        ));
    }
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>{renderTodoItems()}</AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
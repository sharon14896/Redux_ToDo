import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const add = () => {
    if (todo === "" || date === "" || time === "") {
      alert("Input/date/time is Empty");
    } else {
      dispatch(
        addTodo({
          item: todo,
          date: date,
          time: time,
        })
      );
      setTodo("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div>
    <div className="addTodos">
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        value={todo}
        placeholder="Add a task"
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={add}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
          <div className="datetime">
          <input
            type="date"
            onChange={handleDateChange}
            className="todo-input-date-time"
            value={date}
          />
          <input
            type="time"
            onChange={handleTimeChange}
            className="todo-input-date-time"
            value={time}
          />
          </div>
          </div>
  );
};

export default Todos;
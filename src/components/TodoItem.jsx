import React, { useRef } from "react";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(null);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
<motion.li
  key={item.id}
  className="card"
>
  <textarea
    ref={inputRef}
    disabled={!item.editing}
    defaultValue={item.item}
    onKeyPress={(e) => update(item.id, e.target.value, e)}
  />
  <span className="date">{item.date}</span>
  <span className="time">{item.time}</span>
  <button onClick={() => completeTodo(item.id)}>Complete</button>
  <button onClick={() => removeTodo(item.id)}>Delete</button>
  {item.completed && <span className="completed">done</span>}
</motion.li>
  );
};

export default TodoItem;




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, filterCompleted, filterNotCompleted } from "../../store/slices/todo";

import styles from "./index.module.css";



export const AddTodo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };


  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <div className={styles.filter}>
        <button>Completed</button>
        <button>Not completed</button>
      </div>
    </div>
  );
};

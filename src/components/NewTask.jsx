import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTaskClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal}>
        <h2>Please enter valid task</h2>
      </Modal>
      <div className="flex item-center gap-4 ">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          type="text"
          value={enteredTask}
        />
        <button
          onClick={handleAddTaskClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;

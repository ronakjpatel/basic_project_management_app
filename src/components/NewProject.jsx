import React, { useRef } from "react";
import EachInput from "./EachInput";
import Modal from "./Modal";

const NewProject = ({ onSaveDetails, onCancel }) => {
  const userInputTitle = useRef(null);
  const userInputDescription = useRef(null);
  const userInputDate = useRef(null);
  const modal = useRef();
  function handleAllInputValues() {
    const enteredDate = userInputDate.current.value;
    const enteredDescription = userInputDescription.current.value;
    const enteredTitle = userInputTitle.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onSaveDetails({
      projectDate: enteredDate,
      projectDescription: enteredDescription,
      projectTitle: enteredTitle,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        {" "}
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4 ">
          Opps you forgot to enter a value.{" "}
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex justify-end gap-4 my-4 ">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-900  rounded-md p-2 px-4  hover:text-stone-500"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleAllInputValues}
              className="text-stone-300 bg-stone-700 rounded-md p-2 px-4  hover:bg-stone-800  hover:text-stone-50"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="">
          <EachInput label="Title" ref={userInputTitle} />
          <EachInput
            isTextArea
            label="Description"
            ref={userInputDescription}
          />
          <EachInput type="date" label="Due Date" ref={userInputDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;

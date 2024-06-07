import React, { useRef } from "react";
import EachInput from "./EachInput";

const NewProject = ({ addDetails }) => {
  const userInputTitle = useRef(null);
  const userInputDescription = useRef(null);
  const userInputDate = useRef(null);

  function handleAllInputValues() {
    const enteredDate = userInputDate.current.value;
    const enteredDescription = userInputDescription.current.value;
    const enteredTitle = userInputTitle.current.value;

    addDetails({
      projectDate: enteredDate,
      projectDescription: enteredDescription,
      projectTitle: enteredTitle,
    });

    
  }
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-900  rounded-md p-2 px-4  hover:text-stone-500">
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
        <EachInput isTextArea label="Description" ref={userInputDescription} />
        <EachInput type="date" label="Due Date" ref={userInputDate} />
      </div>
    </div>
  );
};

export default NewProject;

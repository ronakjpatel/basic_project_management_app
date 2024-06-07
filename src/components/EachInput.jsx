import React, { forwardRef } from "react";

const EachInput = forwardRef(function EachInput(
  { label, isTextArea, ...props },
  ref
) {
  return (
    <p className="flex flex-col gap-1 mt-6">
      <label className="text-stone-500 text-sm font-bold uppercase">
        {label}
      </label>
      {!isTextArea ? (
        <input
          ref={ref}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600"
          {...props}
        />
      ) : (
        <textarea
          ref={ref}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600"
          {...props}
        />
      )}
    </p>
  );
});

export default EachInput;

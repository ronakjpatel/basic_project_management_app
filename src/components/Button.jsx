import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-4 px-4 bg-stone-700 text-stone-300 rounded-2xl text-xs md:text-base hover:bg-stone-800"
    >
      {children}
    </button>
  );
};

export default Button;

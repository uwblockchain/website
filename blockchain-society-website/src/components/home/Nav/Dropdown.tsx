import React from "react";

const Dropdown = ({ isOpen, toggle }: any) => {
  return (
    <div
      className={
        isOpen
          ? "h-screen items-center bg-gray-800 text-xl"
          : "hidden"
      }
      onClick={toggle}
    >
      <div className="grid grid-rows-3 text-center gap-y-2 pt-2">
        <a
          href="#"
          className="text-white no-underline hover:underline px-4 py-2"
        >
          Home
        </a>
        <a href="#faq" className="text-white no-underline hover:underline px-4 py-2">
          FAQ
        </a>
        <a
          href="#about"
          className="text-white no-underline hover:underline px-4 py-2"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Dropdown;

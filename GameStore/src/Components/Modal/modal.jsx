import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-lightgray rounded-lg shadow-lg w-1/3 p-5">
        <button
          className="text-white hover:text-gray-700 float-right"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

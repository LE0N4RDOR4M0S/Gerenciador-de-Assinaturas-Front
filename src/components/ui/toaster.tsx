// src/components/ui/toaster.tsx
import React from "react";

interface ToasterProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg"
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="text-xl font-semibold text-white bg-transparent border-0"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toaster;

import { useState, useEffect } from "react";

export const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Auto-close after 4 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "from-green-500 to-emerald-600",
    error: "from-red-500 to-rose-600",
  };

  const icons = {
    success: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  };

  return (
    <div className="fixed top-8 right-8 z-50 animate-slide-in">
      <div
        className={`bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 min-w-[300px]`}>
        <div className="flex-shrink-0">{icons[type]}</div>
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

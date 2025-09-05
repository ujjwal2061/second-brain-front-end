import React from "react";

interface LoadingProps {
  text?: string; 
  size?: number; 
}

 const Loading: React.FC<LoadingProps> = ({ text = "Loading...", size = 40 }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <svg
        className="animate-spin text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default Loading;

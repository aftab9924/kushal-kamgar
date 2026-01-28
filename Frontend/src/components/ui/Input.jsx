import React from "react";

const Input = React.forwardRef(({ label, type = "text", error, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`px-4 py-2 rounded-lg border transition-all outline-none
          ${error 
            ? "border-red-500 focus:ring-2 focus:ring-red-200" 
            : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error.message}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
import React from "react";

const Button = React.forwardRef(({ children, variant = "primary", className = "", ...props }, ref) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    amber: "bg-amber-500 text-white hover:bg-amber-600",
  };

  return (
    <button 
      ref={ref} 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
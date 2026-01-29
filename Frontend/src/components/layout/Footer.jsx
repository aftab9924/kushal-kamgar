import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
    
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Kushal Kamgar. All rights reserved.
        </p>
        <div className="flex gap-6">
          <button className="text-slate-400 hover:text-blue-600 text-xs transition-colors font-medium">
            Privacy Policy
          </button>
          <button className="text-slate-400 hover:text-blue-600 text-xs transition-colors font-medium">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
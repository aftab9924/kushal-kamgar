import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 opacity-20">404</h1>
      <div className="absolute">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Oops! Page Lost.</h2>
        <p className="text-slate-500 mb-8 max-w-sm">
          The page you are looking for doesn't exist or has been moved to a different pincode.
        </p>
        <Button onClick={() => navigate('/')} className="px-10">
          Back to Kushal Kamgar
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
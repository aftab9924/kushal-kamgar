import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar Placeholder */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">Kushal Kamgar</h1>
        <div className="space-x-4">
          <button className="text-slate-600 hover:text-blue-600 font-medium">About Us</button>
          <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
          Find Skilled Workers or <br /> 
          <span className="text-blue-600">Grow Your Service Business</span>
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl">
          The open marketplace for local repairs, plumbing, electrical work, and more. 
          Connecting trusted providers with people who need help.
        </p>
        
        {/* This button goes to the "Question" page */}
        <Button className="text-lg px-8 py-4" onClick={() => navigate('/select-role')}>
          Get Started Today
        </Button>
      </main>
    </div>
  );
};

export default LandingPage;
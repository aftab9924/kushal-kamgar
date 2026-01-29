import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Logo from "../assets/Logo.png"
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar Placeholder */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
       <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src={Logo} 
            alt="Kushal Kamgar Logo" 
            // Added -ml-6 to pull it left
            // Added md:h-20 for a nice big desktop size
            className="h-16 md:h-20 w-auto object-contain -ml-6 transition-transform hover:scale-105" 
          />
        </div>
        <div className="space-x-4">
          <Button 
            onClick={() => navigate('/about')}
            variant="outline"
          >
            About Us
          </Button>
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
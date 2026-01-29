import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-slate-50">
      <Navbar />
      
      {/* REMOVED: flex-grow and fixed height calculations */}
      <main className="pt-4 pb-8"> 
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
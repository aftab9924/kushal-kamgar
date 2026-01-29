import React from 'react';
import Logo from '../assets/Logo.png'; // Use your newly fixed logo path

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img src={Logo} alt="Kushal Kamgar" className="h-24 mx-auto mb-8" />
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Kushal Kamgar is a dedicated marketplace designed to bridge the gap between 
          skilled local workers and customers who need reliable help. Our platform 
          ensures that every "Kamgar" (worker) is verified and every job is handled 
          with professional care.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <h3 className="font-bold text-blue-700 mb-2">Verified</h3>
            <p className="text-sm text-slate-600">Strict background checks for all providers.</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-2xl">
            <h3 className="font-bold text-orange-700 mb-2">Skilled</h3>
            <p className="text-sm text-slate-600">Expertise in Plumbing, Electrician, and more.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="font-bold text-green-700 mb-2">Trusted</h3>
            <p className="text-sm text-slate-600">Connecting locals with a smile and a handshake.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
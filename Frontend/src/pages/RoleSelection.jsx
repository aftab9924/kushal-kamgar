import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const RoleSelection = () => {
    const navigate = useNavigate();

    const handleSelection = (role) => {
        navigate("/register", {state: {selectedRole: role}})
    };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">How can we help you?</h2>
        <p className="text-slate-500 mb-10">Choose your path to get started with Kushal Kamgar.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer Option */}
          <div className="border-2 border-slate-100 p-6 rounded-xl hover:border-blue-500 transition-all cursor-pointer group"
               onClick={() => handleSelection('CUSTOMER')}>
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">I need help</h3>
            <p className="text-sm text-slate-500 mb-6">Find local electricians, plumbers, and more.</p>
            <Button variant="primary" className="w-full">Hire Now</Button>
          </div>

          {/* Provider Option */}
          <div className="border-2 border-slate-100 p-6 rounded-xl hover:border-amber-500 transition-all cursor-pointer group"
               onClick={() => handleSelection('PROVIDER')}>
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600">I want to work</h3>
            <p className="text-sm text-slate-500 mb-6">Join our platform and find jobs in your area.</p>
            <Button variant="amber" className="w-full">Start Working</Button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default RoleSelection;
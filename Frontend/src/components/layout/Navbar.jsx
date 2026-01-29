import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../features/auth/authSlice';
import Button from '../ui/Button';
import Logo from "../../assets/Logo.png"

const Navbar = () => {
 console.log("Navbar has started rendering!");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
       <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                 <img 
                   src={Logo} 
                   alt="Kushal Kamgar Logo" 
                   // Added -ml-6 to pull it left
                   // Added md:h-20 for a nice big desktop size
                   className="h-16 md:h-20 w-auto object-contain -ml-6 transition-transform hover:scale-105" 
                 />
        </div>
        {/* <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold text-xl">KK</div>
        <span className="text-xl font-bold text-slate-800 hidden md:block">Kushal Kamgar</span> */}
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-slate-800">{user?.name}</p>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{user?.role}</p>
        </div>
        <Button 
            onClick={() => navigate('/about')}
            variant="outline"
        >
             About Us
        </Button>
        <Button variant="outline" className="text-sm py-1.5 border-slate-200 text-slate-600 hover:bg-slate-50" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
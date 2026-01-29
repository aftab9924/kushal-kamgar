import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { loginFailure, loginStart, loginSuccess } from './authSlice';

const Login = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Selectors (Safety check: user might be null)
  const { loading, error: authError } = useSelector(state => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Start the loading state
    dispatch(loginStart());

   
    setTimeout(() => {
      if (data.email && data.password) {
        // Mocking a response object that matches authSlice
        const mockResponse = {
          token: "mock-jwt-token",
          user: {
            name: "Test User",
            email: data.email,
            phone: data.phone,
            role: data.email.includes("worker") ? "PROVIDER" : "CUSTOMER" // trick to test both roles
          }
        };

        dispatch(loginSuccess(mockResponse));

        const targetPath = mockResponse.user.role === "PROVIDER" ? "/provider/home" : "/customer/home";
        navigate(targetPath);
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    }, 1000); 
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Login to Kushal Kamgar</h2>
        
        {authError && <p className="text-red-500 text-center mb-4 text-sm font-medium">{authError}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input 
            label="Email"
            placeholder="john@example.com"
            type="email"
            error={errors.email}
            {...register("email", { required: "Email is required" })}
          />

          <Input 
            label="Password"
            placeholder="••••••••"
            type="password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="mt-6 text-center text-slate-600 text-sm">
          Don't have an account? 
          <span 
            className="text-blue-600 font-bold cursor-pointer hover:underline ml-1"
            onClick={() => navigate('/select-role')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
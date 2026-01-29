import { useLocation, useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";


const Register = () => {

  const location = useLocation(); 

  const navigate = useNavigate();

  const preSelectedRole = location.state?.selectedRole || 'CUSTOMER';

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      role: preSelectedRole // Initialize the role in the form data
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data Sent to Spring Boot:", data);
    setTimeout(() => {
    reset();
    
    // Instead of alert("Success!"), use this:
    toast.success('Registration Successful! Please login.', {
      duration: 4000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });

    navigate('/login');
  }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>
          <p className="text-slate-500">Joining as a <span className="font-bold text-blue-600">{preSelectedRole}</span></p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
    
          <Input 
            label="Full Name" 
            placeholder="John Doe" 
            error={errors.name}
            {...register("name", { required: "Name is required" })} 
          />

        
          <Input 
            label="Email Address" 
            placeholder="name@gmail.com" 
            type="email"
            error={errors.email}
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />

          <Input 
            label="Phone Number" 
            placeholder="10-digit mobile number" 
            type="tel"
            error={errors.phone}
            {...register("phone", { 
              required: "Phone number is required",
              pattern: { value: /^[6-9]\d{9}$/, message: "Please enter a valid 10-digit Indian number" } 
            })} 
          />

          <Input 
            label="Password" 
            placeholder="••••••••" 
            type="password" 
            error={errors.password}
            {...register("password", { 
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" }
            })}
          />

          {/* Pincode - Important for Kushal Kamgar matching */}
          <Input 
            label="Pincode" 
            placeholder="123456" 
            type="text" // Use text for better pattern matching
            error={errors.pin}
            {...register("pin", { 
              required: "Pincode is required",
              pattern: { value: /^\d{6}$/, message: "Must be exactly 6 digits" }
            })}
          />

          {/* Role-Specific Field for Providers */}
          {preSelectedRole === 'PROVIDER' && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Select Your Profession</label>
              <select 
                {...register("serviceCategory", { required: "Please select a skill" })}
                className={`px-4 py-2 rounded-lg border outline-none transition-all ${errors.serviceCategory ? 'border-red-500' : 'border-slate-300 focus:border-blue-600'}`}
              >
                <option value="">Select Category...</option>
                <option value="ELECTRICIAN">Electrician</option>
                <option value="PLUMBER">Plumber</option>
                <option value="PAINTER">Painter</option>
                <option value="ELECTRONICS">Laptop/Mobile Repair</option>
                <option value="MECHANIC">Bike Mechanic</option>
              </select>
              {errors.serviceCategory && <span className="text-xs text-red-500">{errors.serviceCategory.message}</span>}
            </div>
          )}

          <Button type="submit" className="w-full mt-4">
            Register as {preSelectedRole === 'CUSTOMER' ? 'User' : 'Worker'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'; // Import the toast utility
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { addJobStart, addJobSuccess } from './jobsSlice';

const CreateJob = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const onSubmit = (data) => {
    // Create a promise to handle the mock delay
    const postJobPromise = new Promise((resolve) => {
      dispatch(addJobStart());
      setTimeout(() => {
        const newJob = {
          ...data,
          id: Date.now(), // Unique temporary ID using timestamp
          status: "OPEN",
          customerName: user?.name, // Attach user name for the provider's view
          createdAt: new Date().toLocaleDateString()
        };
        dispatch(addJobSuccess(newJob));
        reset(); 
        resolve(newJob);
      }, 1000);
    });

    //  Use toast.promise for beautiful feedback
    toast.promise(postJobPromise, {
      loading: 'Posting your request...',
      success: 'Job posted successfully!',
      error: 'Could not post job. Please try again.',
    }, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
  };

  return (
  
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Post a New Job</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">What service do you need?</label>
          <select 
            {...register("category", { required: "Please select a category" })}
            className={`px-4 py-3 rounded-xl border outline-none transition-all 
              ${errors.category ? 'border-red-500' : 'border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-50'}`}
          >
            <option value="">Select Category...</option>
            <option value="ELECTRICIAN">Electrician</option>
            <option value="PLUMBER">Plumber</option>
            <option value="CLEANER">Cleaner</option>
            <option value="ELECTRONICS">Laptop/Mobile Repair</option>
          </select>
          {errors.category && <span className="text-xs text-red-500 italic">{errors.category.message}</span>}
        </div>

        {/* Using a textarea for the description makes the form feel more substantial */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-700">Describe the problem</label>
          <textarea 
            placeholder="e.g. My kitchen sink is leaking from the main pipe..." 
            className={`px-4 py-3 rounded-xl border outline-none transition-all min-h-[120px] resize-none
              ${errors.description ? 'border-red-500' : 'border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-50'}`}
            {...register("description", { required: "Description is required" })} 
          />
          {errors.description && <span className="text-xs text-red-500 italic">{errors.description.message}</span>}
        </div>

        <Input 
          label="Pincode" 
          defaultValue={user?.pincode} 
          placeholder="123456"
          error={errors.pincode}
          {...register("pincode", { 
            required: "Pincode is required",
            pattern: { value: /^\d{6}$/, message: "Must be exactly 6 digits" }
          })} 
        />

        <Button type="submit" className="w-full py-4 text-lg shadow-lg shadow-blue-100">
          Post Job Request
        </Button>
      </form>
    </div>
  );
};

export default CreateJob;
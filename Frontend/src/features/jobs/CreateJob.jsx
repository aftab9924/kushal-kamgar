import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { addJobStart, addJobSuccess } from './jobsSlice';

const CreateJob = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const onSubmit = (data) => {
    dispatch(addJobStart());
    
    setTimeout(() => {
      const newJob = {
        ...data,
        id: Date.now(),
        status: "OPEN",
        createdAt: new Date().toISOString()
      };
      dispatch(addJobSuccess(newJob));
      reset(); 
      alert("Job Posted Successfully!");
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Post a New Job</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-700">What service do you need?</label>
          <select 
            {...register("category", { required: "Please select a category" })}
            className="px-4 py-2 rounded-lg border border-slate-300 outline-none focus:border-blue-600"
          >
            <option value="">Select Category...</option>
            <option value="ELECTRICIAN">Electrician</option>
            <option value="PLUMBER">Plumber</option>
            <option value="CLEANER">Cleaner</option>
          </select>
        </div>

        <Input 
          label="Describe the problem" 
          placeholder="e.g. My kitchen sink is leaking..." 
          error={errors.description}
          {...register("description", { required: "Description is required" })} 
        />

        <Input 
          label="Pincode" 
          defaultValue={user?.pincode} // Pre-fill from profile
          error={errors.pincode}
          {...register("pincode", { required: "Pincode is required" })} 
        />

        <Button type="submit" className="w-full">Post Job Request</Button>
      </form>
    </div>
  );
};

export default CreateJob;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/ui/Button';
import { acceptJobSucess } from '../features/jobs/jobsSlice';

const ProviderDashboard = () => {
  // Get Provider details from Auth (to know their Pincode and Skill)
  const { user } = useSelector((state) => state.auth);
  
  // Get the master list of all jobs from the Jobs slice
  const { jobs } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  // THE MATCHING ENGINE: Filter jobs that match the provider exactly
  const matchingJobs = jobs.filter((job) => {
    const isLocal = job.pincode === user?.pincode;
    const isCorrectSkill = job.category === user?.serviceCategory;
    const isOpen = job.status === "OPEN";

    return isLocal && isCorrectSkill && isOpen;
  });

  const handleAccept = (jobId) => {
    const acceptData = {
        jobId: jobId,
        providerName:user?.name,
        providerPhone: user?.phone || "9876543210",
    };

    dispatch(acceptJobSucess(acceptData));
    alert("Job Accepted! The customer has been notified.")
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Worker Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Showing <span className="text-blue-600 font-bold">{user?.serviceCategory}</span> jobs in <span className="text-blue-600 font-bold">{user?.pincode}</span>
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
            <span className="text-sm text-slate-400">Status:</span> 
            <span className="ml-2 text-green-500 font-bold">● Online</span>
          </div>
        </header>


        <div className="grid gap-6">
          {matchingJobs.length === 0 ? (
            <div className="bg-white p-20 text-center rounded-2xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400 text-lg italic">No jobs matching your skills in this area right now. Check back later!</p>
            </div>
          ) : (
            matchingJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {job.category}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-sm text-slate-500">{job.createdAt}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{job.description}</h3>
                  <p className="text-slate-400 text-sm mt-1">Posted by: {job.customerName || 'Local Resident'}</p>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto">
                  <Button variant="outline" className="flex-1 md:flex-none text-red-500 border-red-200 hover:bg-red-50">Ignore</Button>
                  <Button variant="amber" className="flex-1 md:flex-none px-10" onClick={() => handleAccept(job)} >Accept Job</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
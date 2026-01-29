import React from 'react';
import { useSelector } from 'react-redux';
import CreateJob from '../features/jobs/CreateJob';

const CustomerDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
    <div className="max-w-6xl mx-auto"> 
        
        <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Welcome, {user?.name}!
        </h1>
        <p className="text-slate-500 text-lg mt-2">Manage your service requests and find help locally.</p>
        </header>
        <div className="flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SIDE: The Form  */}
        <div className="w-full lg:w-1/2"> 
            <CreateJob />
        </div>

        {/* RIGHT SIDE: Recent History */}
        <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            Your Recent Requests 
            <span className="text-sm font-normal bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {jobs.length} Total
            </span>
            </h3>
            
            <div className="space-y-4">
        
            <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Your Recent Requests</h3>
                <div className="space-y-4">
                {jobs.length === 0 ? (
                    <p className="text-slate-500 italic">No jobs posted yet.</p>
                ) : (jobs.map(job => (
                    <div key={job.id} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 
                        ${job.status === 'ACCEPTED' ? 'border-green-500' : 'border-blue-500'}`}>
                        
                        <div className="flex justify-between">
                        <span className="font-bold text-blue-600">{job.category}</span>
                        <span className={`text-xs px-2 py-1 rounded font-bold 
                            ${job.status === 'ACCEPTED' ? 'bg-green-100 text-green-600' : 'bg-slate-100'}`}>
                            {job.status}
                        </span>
                        </div>

                        <p className="text-slate-700 mt-2">{job.description}</p>

                        {/* SHOW PROVIDER DETAILS IF ACCEPTED */}
                        {job.status === 'ACCEPTED' && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm font-bold text-green-800">✅ Provider Found!</p>
                            <p className="text-xs text-green-700">Name: {job.providerName}</p>
                            <p className="text-xs text-green-700">Phone: {job.providerPhone}</p>
                        </div>
                        )}
                    </div>
                ))
                )}
            </div>
        </div>

        </div>
    </div>
    </div>
    </div>
    </div>
  );
};


export default CustomerDashboard;
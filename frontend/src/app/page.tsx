'use client';

import { useState } from 'react';
import JobForm from '../components/JobForm';
import CandidateForm from '../components/CandidateForm';
import MatchResults from '../components/MatchResults';

export default function Home() {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-6">Job-Candidate Matching System</h1>
      
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          Jobs
        </div>
        <div 
          className={`tab ${activeTab === 'candidates' ? 'active' : ''}`}
          onClick={() => setActiveTab('candidates')}
        >
          Candidates
        </div>
        <div 
          className={`tab ${activeTab === 'matching' ? 'active' : ''}`}
          onClick={() => setActiveTab('matching')}
        >
          Matching
        </div>
      </div>
      
      <div className="tab-content">
        {activeTab === 'jobs' && <JobForm />}
        {activeTab === 'candidates' && <CandidateForm />}
        {activeTab === 'matching' && <MatchResults />}
      </div>
    </main>
  );
}
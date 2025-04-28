'use client';
import { useState } from 'react';
import { createCandidate } from '../lib/api';

export default function CandidateForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const result = await createCandidate({ id, name, bio });
      setMessage(`Success: ${result.message}`);
      setId(''); setName(''); setBio('');
    } catch {
      setError('Failed to create candidate. Please try again.');
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Add a New Candidate</h2>
      {message && <div className="bg-green-100 p-3 mb-4 rounded">{message}</div>}
      {error && <div className="bg-red-100 p-3 mb-4 rounded">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>Candidate ID</label><input value={id} onChange={e => setId(e.target.value)} required /></div>
        <div className="form-group"><label>Name</label><input value={name} onChange={e => setName(e.target.value)} required /></div>
        <div className="form-group"><label>Bio</label><textarea rows={3} value={bio} onChange={e => setBio(e.target.value)} required /></div>
        <button type="submit" className="w-full">Add Candidate</button>
      </form>
    </div>
  );
}
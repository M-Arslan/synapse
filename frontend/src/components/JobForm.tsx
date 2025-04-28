'use client';
import { useState } from 'react';
import { createJob } from '../lib/api';

export default function JobForm() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const result = await createJob({ id, title, description });
      setMessage(`Success: ${result.message}`);
      setId(''); setTitle(''); setDescription('');
    } catch {
      setError('Failed to create job. Please try again.');
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Add a New Job</h2>
      {message && <div className="bg-green-100 p-3 mb-4 rounded">{message}</div>}
      {error && <div className="bg-red-100 p-3 mb-4 rounded">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group"><label>Job ID</label><input value={id} onChange={e => setId(e.target.value)} required /></div>
        <div className="form-group"><label>Title</label><input value={title} onChange={e => setTitle(e.target.value)} required /></div>
        <div className="form-group"><label>Description</label><textarea rows={3} value={description} onChange={e => setDescription(e.target.value)} required /></div>
        <button type="submit" className="w-full">Add Job</button>
      </form>
    </div>
  );
}
'use client';
import { useState } from 'react';
import { matchCandidates, MatchResult } from '../lib/api';

export default function MatchResults() {
  const [jobId, setJobId] = useState('');
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const results = await matchCandidates(jobId);
      setMatches(results);
    } catch {
      setError('Failed to find matches. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Match Candidates to Job</h2>
      {error && <div className="bg-red-100 p-3 mb-4 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="form-group"><label>Job ID</label><input value={jobId} onChange={e => setJobId(e.target.value)} required /></div>
        <button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Finding Matches...' : 'Find Matches'}
        </button>
      </form>
      {matches.length > 0 && (
        <ul className="match-list">
          {matches.map(match => (
            <li key={match.candidateId} className="match-item">
              <div className="flex justify-between items-center">
                <div><strong>{match.candidateName}</strong> ({match.candidateId})</div>
                <div className="match-score">{(match.matchScore * 100).toFixed(0)}%</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
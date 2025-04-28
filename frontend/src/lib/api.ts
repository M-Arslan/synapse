const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Job {
  id: string;
  title: string;
  description: string;
}

export interface Candidate {
  id: string;
  name: string;
  bio: string;
}

export interface MatchResult {
  candidateId: string;
  candidateName: string;
  matchScore: number;
}

export async function createJob(job: Job): Promise<{ message: string; jobId: string }> {
  const response = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });
  if (!response.ok) throw new Error('Failed to create job');
  return response.json();
}

export async function createCandidate(candidate: Candidate): Promise<{ message: string; candidateId: string }> {
  const response = await fetch(`${API_URL}/candidates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(candidate),
  });
  if (!response.ok) throw new Error('Failed to create candidate');
  return response.json();
}

export async function matchCandidates(jobId: string): Promise<MatchResult[]> {
  const response = await fetch(`${API_URL}/match`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobId }),
  });
  if (!response.ok) throw new Error('Failed to match candidates');
  return response.json();
}
CREATE EXTENSION IF NOT EXISTS vector;


CREATE TABLE jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  embedding vector(1536)
);


CREATE TABLE candidates (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT NOT NULL,
  embedding vector(1536)
);


CREATE OR REPLACE FUNCTION match_candidates_to_job(job_id TEXT, limit_count INT DEFAULT 5)
RETURNS TABLE (
  candidate_id TEXT,
  candidate_name TEXT,
  match_score FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.id as candidate_id,
    c.name as candidate_name,
    1 - (c.embedding <=> j.embedding) as match_score
  FROM candidates c, jobs j
  WHERE j.id = job_id
  ORDER BY c.embedding <=> j.embedding
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;
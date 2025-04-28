import { Injectable } from '@nestjs/common';
import { supabase } from '../config/supabase.config';

@Injectable()
export class MatchingService {
  async findMatches(jobId: string) {
    const { data, error } = await supabase
      .rpc('match_candidates_to_job', { job_id: jobId, limit_count: 10 });
    
    if (error) {
      throw new Error(`Failed to find matches: ${error.message}`);
    }
    
    return data.map(match => ({
      candidateId: match.candidate_id,
      candidateName: match.candidate_name,
      matchScore: parseFloat(match.match_score.toFixed(2))
    }));
  }
}
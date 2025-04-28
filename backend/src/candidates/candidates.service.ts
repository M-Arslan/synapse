import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { supabase } from '../config/supabase.config';
import { generateMockVector } from '../utils/vector.utils';

@Injectable()
export class CandidatesService {
  async create(createCandidateDto: CreateCandidateDto) {
    const embedding = generateMockVector();
    
    const { data, error } = await supabase
      .from('candidates')
      .insert({
        id: createCandidateDto.id,
        name: createCandidateDto.name,
        bio: createCandidateDto.bio,
        embedding
      })
      .select();
    
    if (error) {
      throw new Error(`Failed to create candidate: ${error.message}`);
    }
    
    return { message: 'Candidate created successfully', candidateId: createCandidateDto.id };
  }
}
import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { supabase } from '../config/supabase.config';
import { generateMockVector } from '../utils/vector.utils';

@Injectable()
export class JobsService {
  async create(createJobDto: CreateJobDto) {
    const embedding = generateMockVector();
    
    const { data, error } = await supabase
      .from('jobs')
      .insert({
        id: createJobDto.id,
        title: createJobDto.title,
        description: createJobDto.description,
        embedding
      })
      .select();
    
    if (error) {
      throw new Error(`Failed to create job: ${error.message}`);
    }
    
    return { message: 'Job created successfully', jobId: createJobDto.id };
  }
}
import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { CandidatesModule } from './candidates/candidates.module';
import { MatchingModule } from './matching/matching.module';

@Module({
  imports: [JobsModule, CandidatesModule, MatchingModule],
})
export class AppModule {}
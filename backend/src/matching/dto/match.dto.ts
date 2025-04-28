import { IsNotEmpty, IsString } from 'class-validator';

export class MatchDto {
  @IsString()
  @IsNotEmpty()
  jobId: string;
}
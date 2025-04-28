import { Controller, Post, Body } from '@nestjs/common';
import { MatchingService } from './matching.service';
import { MatchDto } from './dto/match.dto';

@Controller('api/match')
export class MatchingController {
  constructor(private readonly matchingService: MatchingService) {}

  @Post()
  findMatches(@Body() matchDto: MatchDto) {
    return this.matchingService.findMatches(matchDto.jobId);
  }
}
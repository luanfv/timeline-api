import { Module } from '@nestjs/common';
import { TimelineController } from './infra/api/timeline.controller';
import { CreateTimelineService } from './application/create-timeline.service';
import { TimelineMemoryRepository } from './infra/repository/timeline-memory.repository';
import { FindTimelineService } from './application/find-timeline.service';
import { GeneratePortfolioTimelineService } from './application/generate-portfolio-timeline.service';
import { TimelineForMonthAndYearListService } from './domain/service/timeline-for-month-and-year-list.service';

@Module({
  imports: [],
  controllers: [TimelineController],
  providers: [
    CreateTimelineService,
    FindTimelineService,
    GeneratePortfolioTimelineService,
    TimelineMemoryRepository,
    TimelineForMonthAndYearListService,
  ],
})
export class AppModule {}

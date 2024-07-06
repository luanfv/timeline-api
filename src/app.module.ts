import { Module } from '@nestjs/common';
import { TimelineController } from './infra/api/timeline.controller';
import { CreateTimelineService } from './application/create-timeline.service';
import { FindTimelineService } from './application/find-timeline.service';
import { GeneratePortfolioTimelineService } from './application/generate-portfolio-timeline.service';
import { TimelineForMonthAndYearListService } from './domain/service/timeline-for-month-and-year-list.service';
import { PrismaService } from './infra/prisma.service';
import { TimelineDatabaseRepository } from './infra/repository/timeline-database.repository';

@Module({
  imports: [],
  controllers: [TimelineController],
  providers: [
    CreateTimelineService,
    FindTimelineService,
    GeneratePortfolioTimelineService,
    TimelineDatabaseRepository,
    TimelineForMonthAndYearListService,
    PrismaService,
  ],
})
export class AppModule {}

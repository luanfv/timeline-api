import { Module } from '@nestjs/common';
import { TimelineController } from './infra/api/timeline.controller';
import { CreateTimelineService } from './application/create-timeline.service';
import { TimelineMemoryRepository } from './infra/repository/timeline-memory.repository';
import { FindTimelineService } from './application/find-timeline.service';

@Module({
  imports: [],
  controllers: [TimelineController],
  providers: [
    CreateTimelineService,
    FindTimelineService,
    TimelineMemoryRepository,
  ],
})
export class AppModule {}

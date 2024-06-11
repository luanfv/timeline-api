import { Module } from '@nestjs/common';
import { TimelineController } from './infra/api/timeline.controller';
import { CreateTimelineService } from './application/create-timeline.service';

@Module({
  imports: [],
  controllers: [TimelineController],
  providers: [CreateTimelineService],
})
export class AppModule {}

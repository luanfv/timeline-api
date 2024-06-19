import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { Timeline } from '../domain/timeline.entity';
import { TimelineRepository } from './interface/timeline.repository';
import { TimelineDatabaseRepository } from '../infra/repository/timeline-database.repository';

type CreateTimelineDto = {
  title: string;
  description?: string;
  date: string;
};

@Injectable()
export class CreateTimelineService {
  constructor(
    @Inject(TimelineDatabaseRepository)
    private readonly timelineRepository: TimelineRepository,
  ) {}

  async execute({ date, title, description }: CreateTimelineDto) {
    try {
      const timeline = Timeline.create(title, date, description);
      await this.timelineRepository.save(timeline);
      return timeline.id;
    } catch (err) {
      if (err instanceof Error) throw new ForbiddenException(err.message);
      throw err;
    }
  }
}

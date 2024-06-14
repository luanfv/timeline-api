import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { TimelineEntity } from '../domain/timeline.entity';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';
import { TimelineRepository } from './interface/timeline.repository';

type CreateTimelineDto = {
  title: string;
  description?: string;
  date: string;
};

@Injectable()
export class CreateTimelineService {
  constructor(
    @Inject(TimelineMemoryRepository)
    private readonly timelineRepository: TimelineRepository,
  ) {}

  async execute({ date, title, description }: CreateTimelineDto) {
    try {
      const timeline = TimelineEntity.create(title, date, description);
      await this.timelineRepository.save(timeline);
      return timeline.id;
    } catch (err) {
      if (err instanceof Error) throw new ForbiddenException(err.message);
      throw err;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { TimelineEntity } from '../domain/timeline.entity';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';
import { TimelineRepository } from '../domain/interface/timeline.repository';

type CreateTimelineDto = {
  title: string;
  description?: string;
  date: Date;
};

@Injectable()
export class CreateTimelineService {
  constructor(
    @Inject(TimelineMemoryRepository)
    private readonly timelineRepository: TimelineRepository,
  ) {}

  async execute({ date, title, description }: CreateTimelineDto) {
    const timeline = TimelineEntity.create(title, date, description);
    this.timelineRepository.save(timeline);
    return timeline.getId();
  }
}

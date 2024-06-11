import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';
import { TimelineRepository } from '../domain/interface/timeline.repository';

@Injectable()
export class FindTimelineService {
  constructor(
    @Inject(TimelineMemoryRepository)
    private readonly timelineRepository: TimelineRepository,
  ) {}

  async execute(timelineId: string) {
    const timelineFromRepository = this.timelineRepository.find(timelineId);
    if (!timelineFromRepository)
      throw new NotFoundException('Timeline não encontrada.');
    return timelineFromRepository.getObject();
  }
}

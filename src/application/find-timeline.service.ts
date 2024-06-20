import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TimelineRepository } from './interface/timeline.repository';
// import { TimelineDatabaseRepository } from '../infra/repository/timeline-database.repository';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';

@Injectable()
export class FindTimelineService {
  constructor(
    @Inject(TimelineMemoryRepository)
    private readonly timelineRepository: TimelineRepository,
  ) {}

  async execute(timelineId: string) {
    const timelineFromRepository = await this.timelineRepository.find(
      timelineId,
    );
    if (!timelineFromRepository)
      throw new NotFoundException('Timeline não encontrada.');
    return timelineFromRepository.object;
  }
}

import { TimelineForMonthAndYearListService } from 'src/domain/service/timeline-for-month-and-year-list.service';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';
import { TimelineRepository } from './interface/timeline.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GeneratePortfolioTimelineService {
  constructor(
    @Inject(TimelineMemoryRepository)
    private readonly timelineRepository: TimelineRepository,
    private readonly createPortfolioTimelineList: TimelineForMonthAndYearListService,
  ) {}

  execute() {
    const timelines = this.timelineRepository.getAll();
    const timelinesMonthYear =
      this.createPortfolioTimelineList.execute(timelines);
    return timelinesMonthYear;
  }
}
import { TimelineDatabaseRepository } from '../infra/repository/timeline-database.repository';
import { TimelineForMonthAndYearListService } from '../domain/service/timeline-for-month-and-year-list.service';
import { TimelineRepository } from './interface/timeline.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GeneratePortfolioTimelineService {
  constructor(
    @Inject(TimelineDatabaseRepository)
    private readonly timelineRepository: TimelineRepository,
    private readonly createPortfolioTimelineList: TimelineForMonthAndYearListService,
  ) {}

  async execute() {
    const timelines = await this.timelineRepository.getAll();
    const timelinesMonthYear =
      this.createPortfolioTimelineList.execute(timelines);
    return timelinesMonthYear;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { CreateTimelineService } from 'src/application/create-timeline.service';

type CreateTimelineDto = {
  title: string;
  date: string;
  description: string;
};

@Controller()
export class TimelineController {
  constructor(private readonly createTimelineService: CreateTimelineService) {}

  @Post()
  async create(@Body() { date, title, description }: CreateTimelineDto) {
    const timelineId = await this.createTimelineService.execute({
      date: new Date(date),
      title,
      description,
    });
    return { timelineId };
  }
}

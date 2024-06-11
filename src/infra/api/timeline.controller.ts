import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTimelineService } from '../../application/create-timeline.service';
import { FindTimelineService } from '../../application/find-timeline.service';
import { PostTimelineBodyDto } from './dto/post-timeline-body.dto';

@Controller()
export class TimelineController {
  constructor(
    private readonly createTimelineService: CreateTimelineService,
    private readonly findTimeLineService: FindTimelineService,
  ) {}

  @Post()
  async create(@Body() { date, title, description }: PostTimelineBodyDto) {
    const timelineId = await this.createTimelineService.execute({
      date,
      title,
      description,
    });
    return { timelineId };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findTimeLineService.execute(id);
  }
}

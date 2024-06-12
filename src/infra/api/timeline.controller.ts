import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTimelineService } from '../../application/create-timeline.service';
import { FindTimelineService } from '../../application/find-timeline.service';
import { PostTimelineBodyDto } from './dto/post-timeline-body.dto';
import { GeneratePortfolioTimelineService } from '../../application/generate-portfolio-timeline.service';

@Controller()
export class TimelineController {
  constructor(
    private readonly createTimelineService: CreateTimelineService,
    private readonly findTimeLineService: FindTimelineService,
    private readonly generatePortfolioTimelineService: GeneratePortfolioTimelineService,
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

  @Get()
  getAll() {
    return this.generatePortfolioTimelineService.execute();
  }
}

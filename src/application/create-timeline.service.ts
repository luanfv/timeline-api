import { Injectable } from '@nestjs/common';
import { TimelineEntity } from '../domain/timeline.entity';

type CreateTimelineDto = {
  title: string;
  description?: string;
  date: Date;
};

@Injectable()
export class CreateTimelineService {
  async execute({ date, title, description }: CreateTimelineDto) {
    const timeline = TimelineEntity.create(title, date, description);
    // TODO - save on repository
    return timeline.getId();
  }
}

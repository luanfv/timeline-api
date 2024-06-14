import { Injectable } from '@nestjs/common';
import { TimelineEntity } from '../../domain/timeline.entity';
import { TimelineRepository } from '../../application/interface/timeline.repository';

@Injectable()
export class TimelineMemoryRepository implements TimelineRepository {
  private readonly timelines: TimelineEntity[] = [];

  save(timeline: TimelineEntity): void {
    this.timelines.push(timeline);
  }

  find(id: string): TimelineEntity {
    return this.timelines.find((timeline) => timeline.id === id);
  }

  getAll(): TimelineEntity[] {
    return this.timelines;
  }
}

import { Injectable } from '@nestjs/common';
import { TimelineEntity } from '../../domain/timeline.entity';
import { TimelineRepository } from '../../application/interface/timeline.repository';

@Injectable()
export class TimelineMemoryRepository implements TimelineRepository {
  private readonly timelines: TimelineEntity[] = [];

  async save(timeline: TimelineEntity): Promise<void> {
    this.timelines.push(timeline);
  }

  async find(id: string): Promise<TimelineEntity> {
    return this.timelines.find((timeline) => timeline.id === id);
  }

  async getAll(): Promise<TimelineEntity[]> {
    return this.timelines;
  }
}

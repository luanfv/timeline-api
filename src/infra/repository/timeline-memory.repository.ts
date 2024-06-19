import { Injectable } from '@nestjs/common';
import { Timeline } from '../../domain/timeline.entity';
import { TimelineRepository } from '../../application/interface/timeline.repository';

@Injectable()
export class TimelineMemoryRepository implements TimelineRepository {
  private readonly timelines: Timeline[] = [];

  async save(timeline: Timeline): Promise<void> {
    this.timelines.push(timeline);
  }

  async find(id: string): Promise<Timeline> {
    return this.timelines.find((timeline) => timeline.id === id);
  }

  async getAll(): Promise<Timeline[]> {
    return this.timelines;
  }
}

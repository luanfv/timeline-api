import { TimelineEntity } from './timeline.entity';

export interface TimelineRepository {
  save(timeline: TimelineEntity): Promise<void>;
  find(id: string): Promise<TimelineEntity>;
  getAll(): Promise<TimelineEntity[]>;
}

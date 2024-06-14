import { TimelineEntity } from '../../domain/timeline.entity';

export interface TimelineRepository {
  save(timeline: TimelineEntity): Promise<void>;
  find(id: string): Promise<TimelineEntity>;
  getAll(): Promise<TimelineEntity[]>;
}

import { TimelineEntity } from '../timeline.entity';

export interface TimelineRepository {
  save(timeline: TimelineEntity): void;
  find(id: string): TimelineEntity;
}

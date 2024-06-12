import { TimelineEntity } from '../../domain/timeline.entity';

export interface TimelineRepository {
  save(timeline: TimelineEntity): void;
  find(id: string): TimelineEntity;
}

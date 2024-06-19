import { randomUUID } from 'node:crypto';
import { TimelineDateVO } from './timeline-date.vo';
import { TimelineEntity } from '../application/interface/timeline.entity';

type TimelineRestore = {
  id: string;
  title: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
};

export class Timeline implements TimelineEntity {
  private constructor(
    readonly id: string,
    private readonly title: string,
    private readonly dateVO: TimelineDateVO,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
    private readonly description?: string,
  ) {}

  static create(
    title: string,
    date: string,
    description?: string,
  ): TimelineEntity {
    const id = randomUUID();
    const now = new Date();
    return new Timeline(
      id,
      title,
      new TimelineDateVO(date),
      now,
      now,
      description,
    );
  }

  static restore({
    id,
    title,
    date,
    createdAt,
    updatedAt,
    description,
  }: TimelineRestore): TimelineEntity {
    return new Timeline(
      id,
      title,
      new TimelineDateVO(
        `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      ),
      createdAt,
      updatedAt,
      description,
    );
  }

  get day() {
    return this.dateVO.day;
  }

  get month() {
    return this.dateVO.month;
  }

  get year() {
    return this.dateVO.year;
  }

  get object() {
    return {
      id: this.id,
      title: this.title,
      date: this.dateVO.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      description: this.description,
    };
  }
}

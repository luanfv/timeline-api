import { randomUUID } from 'node:crypto';
import { TimelineDateVO } from './timeline-date.vo';

export class TimelineEntity {
  private constructor(
    readonly id: string,
    private readonly title: string,
    private readonly dateVO: TimelineDateVO,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
    private readonly description?: string,
  ) {}

  static create(title: string, date: string, description?: string) {
    const id = randomUUID();
    const now = new Date();
    return new TimelineEntity(
      id,
      title,
      new TimelineDateVO(date),
      now,
      now,
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

  getObject() {
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

import { randomUUID } from 'node:crypto';
import { TimelineDateVO } from './timeline-date.vo';

export class TimelineEntity {
  private constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly date: TimelineDateVO,
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

  getId() {
    return this.id;
  }

  getDate() {
    return this.date.getValue();
  }

  getObject() {
    return {
      id: this.id,
      title: this.title,
      date: this.date.getValue(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      description: this.description,
    };
  }
}

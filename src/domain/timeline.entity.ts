import { randomUUID } from 'node:crypto';

export class TimelineEntity {
  private constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly date: Date,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
    private readonly description?: string,
  ) {}

  static create(title: string, date: Date, description?: string) {
    const id = randomUUID();
    const now = new Date();
    return new TimelineEntity(id, title, date, now, now, description);
  }

  getId() {
    return this.id;
  }

  get() {
    return {
      id: this.id,
      title: this.title,
      date: this.date,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      description: this.description,
    };
  }
}

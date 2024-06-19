import { Injectable } from '@nestjs/common';
import { TimelineRepository } from '../../application/interface/timeline.repository';
import { Timeline } from '../../domain/timeline.entity';
import { PrismaService } from '../prisma.service';
import { TimelineEntity } from '../../application/interface/timeline.entity';

@Injectable()
export class TimelineDatabaseRepository implements TimelineRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(timeline: Timeline): Promise<void> {
    const { createdAt, description, id, title, updatedAt } = timeline.object;
    await this.prisma.timeline.create({
      data: {
        id,
        date: new Date(`${timeline.month}-${timeline.day}-${timeline.year}`),
        title,
        description,
        created_at: createdAt,
        updated_at: updatedAt,
      },
    });
  }

  async find(id: string): Promise<TimelineEntity> {
    const timeline = await this.prisma.timeline.findFirst({ where: { id } });
    return Timeline.restore({
      id: timeline.id,
      title: timeline.title,
      description: timeline.description,
      date: timeline.date,
      createdAt: timeline.created_at,
      updatedAt: timeline.updated_at,
    });
  }

  async getAll(): Promise<TimelineEntity[]> {
    const timelinesFromDatabase = await this.prisma.timeline.findMany({
      orderBy: { date: 'desc' },
    });
    return timelinesFromDatabase.map((timeline) =>
      Timeline.restore({
        id: timeline.id,
        title: timeline.title,
        description: timeline.description,
        date: timeline.date,
        createdAt: timeline.created_at,
        updatedAt: timeline.updated_at,
      }),
    );
  }
}

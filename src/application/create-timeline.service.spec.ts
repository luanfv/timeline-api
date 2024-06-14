import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { ForbiddenException, INestApplication } from '@nestjs/common';
import { CreateTimelineService } from './create-timeline.service';
import { TimelineRepository } from './interface/timeline.repository';
import { TimelineMemoryRepository } from '../infra/repository/timeline-memory.repository';

describe('CreateTimelineService integration tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('SHOULD save the timeline on repository', async () => {
    const service = app.get<CreateTimelineService>(CreateTimelineService);
    const repository = app.get<TimelineRepository>(TimelineMemoryRepository);
    const timelineId = await service.execute({
      date: '01/2/2024',
      title: 'application test',
    });
    const timelineFromRepository = await repository.find(timelineId);
    expect(timelineFromRepository.getObject()).toMatchObject({
      id: timelineId,
      title: 'application test',
      date: '1/2/2024',
    });
  });

  describe('WHEN receive invalid date to create a timeline', () => {
    it('SHOULD throw a Forbidden Exception', async () => {
      const service = app.get<CreateTimelineService>(CreateTimelineService);
      await expect(
        service.execute({
          date: 'abc',
          title: 'application test - invalid date',
        }),
      ).rejects.toThrowError(new ForbiddenException('Dia inválido'));
    });
  });
});

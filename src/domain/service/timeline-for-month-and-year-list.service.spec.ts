import { TimelineEntity } from '../timeline.entity';
import { TimelineForMonthAndYearListService } from './timeline-for-month-and-year-list.service';

describe('TimelineForMonthAndYearListService unit tests', () => {
  it('SHOULD return timeline list from month/year', () => {
    const timelines: TimelineEntity[] = [
      TimelineEntity.create('test 1', '1/1/2024'),
      TimelineEntity.create('test 2', '02/1/2024'),
      TimelineEntity.create('test 3', '02/6/2024'),
      TimelineEntity.create('test 4', '9/04/2024'),
      TimelineEntity.create('test 5', '9/1/2024'),
    ];
    const service = new TimelineForMonthAndYearListService();
    const expectedResult = [
      {
        checkIn: '1/2024',
        timelines: [
          {
            id: timelines[0].id,
            title: timelines[0].getObject().title,
            date: timelines[0].getObject().date,
          },
          {
            id: timelines[1].id,
            title: timelines[1].getObject().title,
            date: timelines[1].getObject().date,
          },
          {
            id: timelines[4].id,
            title: timelines[4].getObject().title,
            date: timelines[4].getObject().date,
          },
        ],
      },
      {
        checkIn: '6/2024',
        timelines: [
          {
            id: timelines[2].id,
            title: timelines[2].getObject().title,
            date: timelines[2].getObject().date,
          },
        ],
      },
      {
        checkIn: '4/2024',
        timelines: [
          {
            id: timelines[3].id,
            title: timelines[3].getObject().title,
            date: timelines[3].getObject().date,
          },
        ],
      },
    ];
    expect(service.execute(timelines)).toEqual(expectedResult);
  });
});

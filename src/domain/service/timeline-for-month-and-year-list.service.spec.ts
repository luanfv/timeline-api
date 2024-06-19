import { TimelineEntity } from 'src/application/interface/timeline.entity';
import { Timeline } from '../timeline.entity';
import { TimelineForMonthAndYearListService } from './timeline-for-month-and-year-list.service';

describe('TimelineForMonthAndYearListService unit tests', () => {
  it('SHOULD return timeline list from month/year', () => {
    const timelines: TimelineEntity[] = [
      Timeline.create('test 1', '1/1/2024'),
      Timeline.create('test 2', '02/1/2024'),
      Timeline.create('test 3', '02/6/2024'),
      Timeline.create('test 4', '9/04/2024'),
      Timeline.create('test 5', '9/1/2024'),
    ];
    const service = new TimelineForMonthAndYearListService();
    const expectedResult = [
      {
        checkIn: '1/2024',
        timelines: [
          {
            id: timelines[0].id,
            title: timelines[0].object.title,
            date: timelines[0].object.date,
          },
          {
            id: timelines[1].id,
            title: timelines[1].object.title,
            date: timelines[1].object.date,
          },
          {
            id: timelines[4].id,
            title: timelines[4].object.title,
            date: timelines[4].object.date,
          },
        ],
      },
      {
        checkIn: '6/2024',
        timelines: [
          {
            id: timelines[2].id,
            title: timelines[2].object.title,
            date: timelines[2].object.date,
          },
        ],
      },
      {
        checkIn: '4/2024',
        timelines: [
          {
            id: timelines[3].id,
            title: timelines[3].object.title,
            date: timelines[3].object.date,
          },
        ],
      },
    ];
    expect(service.execute(timelines)).toEqual(expectedResult);
  });
});

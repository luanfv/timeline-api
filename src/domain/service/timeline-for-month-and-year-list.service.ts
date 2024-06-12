import { Injectable } from '@nestjs/common';
import { TimelineEntity } from '../timeline.entity';

type TimelineForMonthAndYear = {
  checkIn: string;
  timelines: {
    id: string;
    title: string;
    description?: string;
    date: string;
  }[];
};

@Injectable()
export class TimelineForMonthAndYearListService {
  execute(timelines: TimelineEntity[]): TimelineForMonthAndYear[] {
    const timelinesMonthYear: TimelineForMonthAndYear[] = [];
    timelines.forEach((timeline) => {
      if (timelinesMonthYear.length > 0) {
        const monthYearIndex = timelinesMonthYear.findIndex(({ checkIn }) =>
          this.isCheckInEquals(timeline, checkIn),
        );
        if (monthYearIndex >= 0) {
          const { id, title, description, date } = timeline.getObject();
          timelinesMonthYear[monthYearIndex].timelines.push({
            id,
            title,
            description,
            date,
          });
          return;
        }
      }
      timelinesMonthYear.push(this.generateFirstTimeline(timeline));
    });
    return timelinesMonthYear;
  }

  private isCheckInEquals(timeline: TimelineEntity, checkIn: string) {
    const [, month, year] = timeline.getDate().split('/');
    return checkIn === `${month}/${year}`;
  }

  private generateFirstTimeline(
    timeline: TimelineEntity,
  ): TimelineForMonthAndYear {
    const { id, title, description, date } = timeline.getObject();
    const [, month, year] = timeline.getDate().split('/');
    return {
      checkIn: `${month}/${year}`,
      timelines: [
        {
          id,
          title,
          description,
          date,
        },
      ],
    };
  }
}

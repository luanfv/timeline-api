type TimelineObject = {
  id: string;
  title: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
};

export interface TimelineEntity {
  readonly id: string;
  get day(): number;
  get month(): number;
  get year(): number;
  get object(): TimelineObject;
}

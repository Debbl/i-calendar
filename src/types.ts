export interface ICSData {
  calendar: {
    xWrCalname: string;
  };
  events: Array<{
    location: string;
    description: string;
    url: string;
    summary: string;
    dtstamp: {
      timezone: string;
      value: string;
    };
    dtstart: {
      timezone: string;
      value: string;
    };
  }>;
}

export interface ItemInfo {
  startTimeValue: number;
  startTime: string;
  dayStarted: boolean;
  name: string;
  liveURL: string;
  summary: string;
}

export interface DayInfo {
  weekDay: string;
  isToday: boolean;
  day: string;
  content: Array<ItemInfo>;
}

export type WeekData = Array<DayInfo>;

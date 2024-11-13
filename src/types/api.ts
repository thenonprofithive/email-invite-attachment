export interface EmailEvent {
  id: string;
  // Add other email event properties as needed
}

//https://www.npmjs.com/package/ics
export interface ICSEvent {
  // Required date/time fields
  start: [number, number, number, number, number] | number;
  startInputType?: 'local' | 'utc';
  startOutputType?: 'local' | 'utc';
  end?: [number, number, number, number, number] | number;
  endInputType?: 'local' | 'utc';
  endOutputType?: 'local' | 'utc';
  duration?: {
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  // Basic event details
  title: string;
  description: string;
  location?: string;
  url?: string;
  status?: 'TENTATIVE' | 'CONFIRMED' | 'CANCELLED';

  // Geographic data
  geo?: {
    lat: number;
    lon: number;
  };

  // People
  organizer?: {
    name: string;
    email: string;
    dir?: string;
    sentBy?: string;
  };
  attendees?: Array<{
    name: string;
    email: string;
    rsvp?: boolean;
    dir?: string;
    partstat?: string;
    role?: string;
  }>;

  // Categorization and metadata
  categories?: string[];
  productId?: string;
  uid?: string;
  method?: string;
  sequence?: number;
  busyStatus?: 'BUSY' | 'FREE' | 'TENTATIVE' | 'OOF';
  transp?: 'TRANSPARENT' | 'OPAQUE';
  classification?: 'PUBLIC' | 'PRIVATE' | 'CONFIDENTIAL' | string;

  // Recurrence
  recurrenceRule?: string;
  exclusionDates?: Array<[number, number, number, number, number]> | number[];

  // Timestamps
  created?: [number, number, number, number, number] | number;
  lastModified?: [number, number, number, number, number] | number;

  // Calendar metadata
  calName?: string;

  // Alarms
  alarms?: Array<{
    action: 'display' | 'audio';
    description: string;
    trigger:
      | [number, number, number, number, number]
      | {
          hours: number;
          minutes: number;
          before: boolean;
        };
    repeat?: number;
    attachType?: string;
    attach?: string;
  }>;

  // HTML Content
  htmlContent?: string;
}

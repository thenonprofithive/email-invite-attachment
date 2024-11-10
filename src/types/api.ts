export interface EmailEvent {
  id: string;
  // Add other email event properties as needed
}

export interface ICSEvent {
  start: number[];
  duration: { hours: number; minutes: number };
  title: string;
  description: string;
  location?: string;
  url?: string;
  geo?: { lat: number; lon: number };
  categories?: string[];
  status?: string;
  busyStatus?: string;
  organizer?: { name: string; email: string };
  attendees?: {
    name: string;
    email: string;
    rsvp?: boolean;
    partstat?: string;
    role?: string;
    dir?: string;
  }[];
}

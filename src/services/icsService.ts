import { createEvent } from 'ics';
import { ICSEvent } from '../types/api';

// First, let's fix the type issue by creating an interface that matches the ics package requirements
interface CalendarEventParams {
  start: [number, number, number, number, number]; // [year, month, day, hour, minute]
  description: string;
  url: string;
  attendeeName: string;
  attendeeEmail: string;
}

export const generateICSFile = (eventData: ICSEvent): Promise<string> => {
  return new Promise((resolve, reject) => {
    createEvent(eventData, (error: Error | undefined, value: string) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
};

export const createHiveChatPlaceHolderCalendarEvent = async ({
  start,
  description,
  url,
  attendeeName,
  attendeeEmail,
}: CalendarEventParams): Promise<string> => {
  const event: ICSEvent = {
    start,
    duration: { hours: 0, minutes: 30 }, // Default 30-minute duration
    title: 'Hive Chat',
    description,
    url,
    busyStatus: 'BUSY',
    sequence: 0,
    attendees: [
      {
        name: attendeeName,
        email: attendeeEmail,
        rsvp: true,
        partstat: 'ACCEPTED',
        role: 'REQ-PARTICIPANT',
      },
    ],
  };

  try {
    const icsData = await generateICSFile(event);
    console.log('Generated ICS file:');
    console.log(icsData);
    return icsData;
  } catch (error) {
    console.error('Error generating ICS file:', error);
    throw error;
  }
};

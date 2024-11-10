import { createEvent } from 'ics';
import { ICSEvent } from '../types/api';

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

// Example hardcoded event for testing
export const createSampleEvent = async () => {
  const event: ICSEvent = {
    start: [2024, 11, 10, 16, 30],
    duration: { hours: 0, minutes: 30 },
    title: 'Test Hive Chat - Title',
    description: 'Hive Room Link - https://thenonprofithive.daily.co/test-room',
    url: 'https://thenonprofithive.daily.co/test-room',
    busyStatus: 'BUSY',
    sequence: 2,
    attendees: [
      {
        name: 'Cole Van Vlack',
        email: 'cvanvlack@gmail.com',
        rsvp: true,
        partstat: 'ACCEPTED',
        role: 'REQ-PARTICIPANT',
      },
    ],
    // alarms: [
    //   {
    //     action: 'display',
    //     description: 'Reminder - Test Reminder',
    //     trigger: [2024, 11, 10, 4, 0],
    //   },
    // ],
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

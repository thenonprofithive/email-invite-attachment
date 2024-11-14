import React from 'react';
import { createHiveChatPlaceHolderCalendarEvent } from '../services/icsService';

interface EmailCreationFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

const EmailCreationForm: React.FC<EmailCreationFormProps> = ({ onSubmit }) => {
  const handleGenerateICS = async () => {
    try {
      await createHiveChatPlaceHolderCalendarEvent({
        attendeeEmail: "cvanvlack@gmail.com",
        attendeeName: "Cole",
        url: 'https://thenonprofithive.daily.co/test-room',
        description: 'Hive Room Link - https://thenonprofithive.daily.co/test-room',
        start: [2024, 11, 14, 16, 30]
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="email-form">
      <h2>Generate ICS File</h2>
      <button 
        type="button" 
        onClick={handleGenerateICS}
        className="generate-button"
      >
        Generate Sample ICS
      </button>
    </div>
  );
};

export default EmailCreationForm; 

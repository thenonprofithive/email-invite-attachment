import React from 'react';
import { createSampleEvent } from '../services/icsService';

interface EmailCreationFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

const EmailCreationForm: React.FC<EmailCreationFormProps> = ({ onSubmit }) => {
  const handleGenerateICS = async () => {
    try {
      await createSampleEvent();
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

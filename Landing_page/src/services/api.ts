const API_BASE_URL = 'http://localhost:5000/api';

export interface FormSubmissionData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  formType: string;
  service?: string;
  role?: string;
  duration?: string;
  teamSize?: string;
  startDate?: string;
  budget?: string;
  projectType?: string;
  receiveUpdates?: boolean;
}

export const submitForm = async (data: FormSubmissionData): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Form submission failed');
    }

    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

export const getFormStats = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/forms/stats`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch stats');
    }

    return result;
  } catch (error) {
    console.error('Stats fetch error:', error);
    throw error;
  }
};
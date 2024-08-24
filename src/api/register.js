import axios from 'axios';

// Use the environment variable for API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

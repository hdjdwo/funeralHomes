import { api } from './api';

export const fetchAuthToken = async () => {
  try {
    const response = await fetch(
      'https://test-task-api.allfuneral.com/auth?user=USERNAME'
    );
    const token = response.headers.get('Authorization')?.split(' ')[1];
    if (token) {
      localStorage.setItem('token', token);
    }
  } catch (error) {
    console.error('Auth error:', error);
  }
};
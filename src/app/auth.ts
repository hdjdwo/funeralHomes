// src/app/auth.ts
export const fetchAuthToken = async (username: string = 'testuser') => {
  try {
    const response = await fetch(
      `https://test-task-api.allfuneral.com/auth?user=${username}`
    );
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const authHeader = response.headers.get('Authorization');
    if (!authHeader) throw new Error('Authorization header missing');
    
    const token = authHeader.split(' ')[1];
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Auth error:', error);
    throw error;
  }
};
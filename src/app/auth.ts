
export const fetchAuthToken = async (username: string = 'USERNAME') => {
  try {
    const response = await fetch(
      `https://test-task-api.allfuneral.com/auth?user=${username}`
    );
    
    if (!response.ok) throw new Error('Authorization failed');
    
    const token = response.headers.get('Authorization')?.split(' ')[1];
    if (!token) throw new Error('Token not found');
    
    localStorage.setItem('authToken', token);
    return token;
  } catch (error) {
    console.error('Authentication Error:', error);
    throw error;
  }
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
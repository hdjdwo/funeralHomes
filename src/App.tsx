import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CompanyPage from './features/company/CompanyPage';
import { fetchAuthToken } from './app/auth';
import theme from './theme';

function App() {
  fetchAuthToken();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <CompanyPage />
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
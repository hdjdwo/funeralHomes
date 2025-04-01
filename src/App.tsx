import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CompanyPage from './features/company/CompanyPage';
import { fetchAuthToken } from './app/auth';

function App() {
  fetchAuthToken();

  return (
    <Router>
      <MainLayout>
        <CompanyPage />
      </MainLayout>
    </Router>
  );
}

export default App;
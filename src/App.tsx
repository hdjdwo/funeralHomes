import { BrowserRouter as Router } from 'react-router-dom';
import CompanyPage from './features/company/CompanyPage';
import { fetchAuthToken } from './app/auth';

function App() {
  fetchAuthToken();

  return (
    <Router>
      <CompanyPage />
    </Router>
  );
}

export default App;
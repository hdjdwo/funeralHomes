import { BrowserRouter, Router} from 'react-router-dom';
import CompanyPage from './features/company/CompanyPage';
import { fetchAuthToken } from './app/auth';

function App() {

  fetchAuthToken();

  return (
    <Router>
      <div className="app">
        <CompanyPage />
      </div>
    </Router>
  );
}

export default App;
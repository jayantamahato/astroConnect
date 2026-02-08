import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from './store/hooks';
import { selectTheme } from './features/theme/themeSlice';
import HomePage from './pages/HomePage';
import AstrologerProfile from './features/astrologer/AstrologerProfile';
import LoginDialog from './components/auth/LoginDialog';
import './App.css';

function App() {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/astrologer/:id" element={<AstrologerProfile />} />
        {/* Add more routes here as needed */}
      </Routes>
      <LoginDialog />
    </Router>
  );
}

export default App;

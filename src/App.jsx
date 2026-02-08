import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from './store/hooks';
import { selectTheme } from './features/theme/themeSlice';
import HomePage from './pages/HomePage';
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
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from './store/hooks';
import { selectTheme } from './features/theme/themeSlice';
import HomePage from './features/home/pages/HomePage';
import AstrologerProfile from './features/astrologer/pages/AstrologerProfile';
import AllAstrologersPage from './features/astrologer/pages/AllAstrologersPage';
import BlogPage from './features/blog/pages/BlogPage';
import BlogDetailsPage from './features/blog/pages/BlogDetailsPage';
import LiveListingPage from './features/live/pages/LiveListingPage';
import LiveStreamViewerPage from './features/live/pages/LiveStreamViewerPage';
import ShortsPage from './features/shorts/pages/ShortsPage';
import WalletPage from './features/wallet/pages/WalletPage';
import UserProfilePage from './features/userProfile/pages/UserProfilePage';
import AboutUsPage from './features/company/pages/AboutUsPage';
import ContactUsPage from './features/company/pages/ContactUsPage';
import PrivacyPolicyPage from './features/company/pages/PrivacyPolicyPage';
import TermsOfServicePage from './features/company/pages/TermsOfServicePage';
import LoginDialog from './components/auth/LoginDialog';
import ProtectedRoute from './components/auth/ProtectedRoute';
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
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/astrologer/:id" element={<AstrologerProfile />} />
        <Route path="/all-astrologers" element={<AllAstrologersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/live" element={<LiveListingPage />} />
        <Route path="/live/:id" element={<LiveStreamViewerPage />} />
        <Route path="/shorts" element={<ShortsPage />} />

        {/* Company Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />

        {/* Protected Routes - Require Authentication */}
        <Route path="/wallet" element={
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        } />
        {/* Add more protected routes here as needed */}
      </Routes>
      <LoginDialog />
    </Router>
  );
}

export default App;


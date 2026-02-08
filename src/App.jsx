import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
import ChatPage from './features/chat/pages/ChatPage';
import LoginDialog from './components/auth/LoginDialog';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './App.css';

// Root Layout Component
const RootLayout = () => {
  return (
    <>
      <Outlet />
      <LoginDialog />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "astrologer/:id",
        element: <AstrologerProfile />,
      },
      {
        path: "all-astrologers",
        element: <AllAstrologersPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <BlogDetailsPage />,
      },
      {
        path: "live",
        element: <LiveListingPage />,
      },
      {
        path: "live/:id",
        element: <LiveStreamViewerPage />,
      },
      {
        path: "shorts",
        element: <ShortsPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms",
        element: <TermsOfServicePage />,
      },
      {
        path: "wallet",
        element: (
          <ProtectedRoute>
            <WalletPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "chat/:id",
        element: (
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;


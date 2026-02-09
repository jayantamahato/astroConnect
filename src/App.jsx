import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useAppSelector } from './store/hooks';
import { selectTheme } from './features/theme/themeSlice';

// Eagerly loaded components (critical path)
import LoginDialog from './components/auth/LoginDialog';
import ProtectedRoute from './components/auth/ProtectedRoute';
import WaitlistButton from './components/drawers/WaitlistButton';
import { ConnectionProvider } from './components/ConnectionProvider';
import './App.css';

// Lazy loaded pages for better performance
const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const AstrologerProfile = lazy(() => import('./features/astrologer/pages/AstrologerProfile'));
const AllAstrologersPage = lazy(() => import('./features/astrologer/pages/AllAstrologersPage'));
const BlogPage = lazy(() => import('./features/blog/pages/BlogPage'));
const BlogDetailsPage = lazy(() => import('./features/blog/pages/BlogDetailsPage'));
const LiveListingPage = lazy(() => import('./features/live/pages/LiveListingPage'));
const LiveStreamViewerPage = lazy(() => import('./features/live/pages/LiveStreamViewerPage'));
const ShortsPage = lazy(() => import('./features/shorts/pages/ShortsPage'));
const WalletPage = lazy(() => import('./features/wallet/pages/WalletPage'));
const UserProfilePage = lazy(() => import('./features/user-profile/pages/UserProfilePage'));
const AboutUsPage = lazy(() => import('./features/company/pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('./features/company/pages/ContactUsPage'));
const PrivacyPolicyPage = lazy(() => import('./features/company/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./features/company/pages/TermsOfServicePage'));
const ChatPage = lazy(() => import('./features/chat/pages/ChatPage'));
const VoiceCallPage = lazy(() => import('./features/call/pages/VoiceCallPage'));
const VideoCallPage = lazy(() => import('./features/call/pages/VideoCallPage'));
const HoroscopePage = lazy(() => import('./features/horoscope/pages/HoroscopePage'));
const KundaliPage = lazy(() => import('./features/kundali/pages/KundaliPage'));
const KundaliResultPage = lazy(() => import('./features/kundali/pages/KundaliResultPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm font-medium">Loading...</p>
    </div>
  </div>
);

// Root Layout Component
const RootLayout = () => (
  <ConnectionProvider>
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
    <LoginDialog />
    <WaitlistButton />
  </ConnectionProvider>
);

// Route configuration for better maintainability
const routes = [
  { index: true, element: <HomePage /> },
  { path: "astrologer/:id", element: <AstrologerProfile /> },
  { path: "all-astrologers", element: <AllAstrologersPage /> },
  { path: "blog", element: <BlogPage /> },
  { path: "blog/:id", element: <BlogDetailsPage /> },
  { path: "live", element: <LiveListingPage /> },
  { path: "live/:id", element: <LiveStreamViewerPage /> },
  { path: "shorts", element: <ShortsPage /> },
  { path: "about", element: <AboutUsPage /> },
  { path: "contact", element: <ContactUsPage /> },
  { path: "privacy", element: <PrivacyPolicyPage /> },
  { path: "terms", element: <TermsOfServicePage /> },
  { path: "services/horoscope", element: <HoroscopePage /> },
  { path: "services/kundali", element: <KundaliPage /> },
  { path: "services/kundali/result", element: <KundaliResultPage /> },
  // Protected routes
  { path: "wallet", element: <ProtectedRoute><WalletPage /></ProtectedRoute> },
  { path: "profile", element: <ProtectedRoute><UserProfilePage /></ProtectedRoute> },
  { path: "chat/:id", element: <ProtectedRoute><ChatPage /></ProtectedRoute> },
  { path: "voice-call/:id", element: <ProtectedRoute><VoiceCallPage /></ProtectedRoute> },
  { path: "video-call/:id", element: <ProtectedRoute><VideoCallPage /></ProtectedRoute> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: routes,
  },
]);

function App() {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;

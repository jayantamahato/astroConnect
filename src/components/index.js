// Main barrel exports for all components
export * from './cards';
export * from './dialogs';
export * from './drawers';

// Layout components
export { default as Navbar } from './layout/Navbar';
export { default as Footer } from './layout/Footer';

// Auth components
export { default as LoginDialog } from './auth/LoginDialog';
export { default as ProtectedRoute } from './auth/ProtectedRoute';

// UI components
export { default as Skeleton } from './ui/Skeleton';

// SEO
export { default as SeoMeta } from './seo/SeoMeta';

// Providers
export { ConnectionProvider, useConnection } from './ConnectionProvider';

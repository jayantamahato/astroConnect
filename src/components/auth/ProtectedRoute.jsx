import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectAuth, openLogin } from '../../features/auth/authSlice';
import { useEffect } from 'react';

/**
 * ProtectedRoute component that guards routes requiring authentication.
 * If the user is not authenticated, they are redirected to the home page
 * and the login dialog is automatically opened.
 */
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        // If user is not authenticated, open the login dialog
        if (!isAuthenticated) {
            dispatch(openLogin());
        }
    }, [isAuthenticated, dispatch]);

    if (!isAuthenticated) {
        // Redirect to home page, preserving the intended destination
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;

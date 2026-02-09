import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Wallet, User, LogOut, HelpCircle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTheme, toggleTheme } from '../../features/theme/themeSlice';
import { openLogin, selectAuth, logout } from '../../features/auth/authSlice';
import LogoutDialog from '../dialogs/LogoutDialog';
import HelpSupportDialog from '../dialogs/HelpSupportDialog';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile dropdown toggle
    const [isProfileOpen, setIsProfileOpen] = useState(false); // Profile dropdown toggle
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false); // Logout confirmation dialog
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false); // Help & Support dialog
    const profileDropdownRef = useRef(null);
    const theme = useAppSelector(selectTheme);
    const { isAuthenticated, user } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
        setIsProfileOpen(false);
    }, [location.pathname]);

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getInitials = (name) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const openLogoutDialog = () => {
        setIsProfileOpen(false);
        setIsOpen(false);
        setIsLogoutDialogOpen(true);
    };

    const confirmLogout = () => {
        dispatch(logout());
        setIsLogoutDialogOpen(false);
        navigate('/');
    };

    const cancelLogout = () => {
        setIsLogoutDialogOpen(false);
    };

    const openHelpDialog = () => {
        setIsProfileOpen(false);
        setIsOpen(false);
        setIsHelpDialogOpen(true);
    };

    const closeHelpDialog = () => {
        setIsHelpDialogOpen(false);
    };
    const links = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Horoscope', path: '/services/horoscope' },
                { name: 'Free Kundali', path: '/services/kundali' },
                { name: 'Kundali Matching', path: '/services/kundali-matching' },
                { name: 'Numerology', path: '/services/numerology' },
                { name: 'Tarot Reading', path: '/services/tarot' },
                { name: 'Palmistry', path: '/services/palmistry' },
            ]
        },
        { name: 'Shorts', path: '/shorts' },
        { name: 'Live', path: '/live' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <>
            <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <span className="text-primary text-3xl">🔆</span>
                            <span className="text-2xl font-heading font-bold text-foreground">
                                AstroConnect
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {links.map((link) => (
                                    link.dropdown ? (
                                        <div key={link.name} className="relative group">
                                            <button
                                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 group-hover:text-primary ${location.pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'
                                                    }`}
                                            >
                                                {link.name}
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className="absolute left-0 mt-0 w-56 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="py-2">
                                                    {link.dropdown.map((subItem) => (
                                                        <NavLink
                                                            key={subItem.name}
                                                            to={subItem.path}
                                                            className={({ isActive }) =>
                                                                `block px-4 py-2 text-sm transition-colors ${isActive
                                                                    ? 'bg-primary/10 text-primary'
                                                                    : 'text-foreground hover:bg-muted hover:text-primary'
                                                                }`
                                                            }
                                                        >
                                                            {subItem.name}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            key={link.name}
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                                    ? 'text-primary'
                                                    : 'text-muted-foreground hover:text-foreground'
                                                }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="hidden md:flex items-center gap-4">

                            <button
                                onClick={() => dispatch(toggleTheme())}
                                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Conditional: Profile Avatar or Login Button */}
                            {isAuthenticated ? (
                                <div className="relative" ref={profileDropdownRef}>
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center gap-2 p-1 rounded-full hover:bg-muted transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                            {user?.avatar ? (
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            ) : (
                                                <span className="text-sm font-bold text-white">
                                                    {getInitials(user?.name)}
                                                </span>
                                            )}
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Profile Dropdown */}
                                    {isProfileOpen && (
                                        <div className="absolute right-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                            {/* User Info Header */}
                                            <div className="px-4 py-3 bg-muted/30 border-b border-border">
                                                <p className="font-semibold text-foreground truncate">{user?.name || 'User'}</p>
                                                <p className="text-xs text-muted-foreground truncate">{user?.email || user?.phone}</p>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                <Link
                                                    to="/profile"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                                                >
                                                    <User className="w-4 h-4 text-muted-foreground" />
                                                    My Profile
                                                </Link>
                                                <Link
                                                    to="/wallet"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                                                >
                                                    <Wallet className="w-4 h-4 text-muted-foreground" />
                                                    My Wallet
                                                </Link>
                                                <button
                                                    onClick={openHelpDialog}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors w-full"
                                                >
                                                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                                                    Help & Support
                                                </button>
                                            </div>

                                            {/* Logout */}
                                            <div className="border-t border-border py-2">
                                                <button
                                                    onClick={openLogoutDialog}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/5 transition-colors w-full"
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => dispatch(openLogin())}
                                    className="bg-primary text-primary-foreground px-8 py-2 rounded-full font-bold hover:bg-opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                                    Login
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-card inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top-5 duration-200 max-h-[80vh] overflow-y-auto">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                link.dropdown ? (
                                    <div key={link.name} className="space-y-1">
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname.startsWith('/services') ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Mobile Dropdown */}
                                        {isServicesOpen && (
                                            <div className="pl-4 space-y-1 border-l-2 border-border ml-2 animate-in slide-in-from-top-2">
                                                {link.dropdown.map((subItem) => (
                                                    <NavLink
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className={({ isActive }) =>
                                                            `block px-3 py-2 rounded-md text-sm font-medium ${isActive
                                                                ? 'text-primary'
                                                                : 'text-muted-foreground hover:text-foreground'
                                                            }`
                                                        }
                                                    >
                                                        {subItem.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                                ? 'text-primary bg-primary/10'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                )
                            ))}
                        </div>
                        <div className="pt-4 pb-4 border-t border-border px-5 space-y-4">

                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Theme</span>
                                <button
                                    onClick={() => dispatch(toggleTheme())}
                                    className="p-2 rounded-full bg-muted text-foreground"
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            </div>

                            {/* Conditional: Profile or Login */}
                            {isAuthenticated ? (
                                <>
                                    {/* User Info */}
                                    <Link
                                        to="/profile"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                                            {user?.avatar ? (
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            ) : (
                                                <span className="text-lg font-bold text-white">
                                                    {getInitials(user?.name)}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-foreground">{user?.name || 'User'}</p>
                                            <p className="text-xs text-muted-foreground">{user?.email || user?.phone}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                    </Link>

                                    {/* Quick Links */}
                                    <div className="space-y-1">
                                        <Link
                                            to="/favorites"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                                        >
                                            <Heart className="w-5 h-5 text-muted-foreground" />
                                            <span className="font-medium text-foreground">Favorites</span>
                                        </Link>
                                        <Link
                                            to="/settings"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                                        >
                                            <Settings className="w-5 h-5 text-muted-foreground" />
                                            <span className="font-medium text-foreground">Settings</span>
                                        </Link>
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                        onClick={openLogoutDialog}
                                        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors font-medium"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => dispatch(openLogin())}
                                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all">
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {/* Logout Confirmation Dialog */}
            <LogoutDialog
                isOpen={isLogoutDialogOpen}
                onClose={cancelLogout}
                onConfirm={confirmLogout}
            />

            {/* Help & Support Dialog */}
            <HelpSupportDialog
                isOpen={isHelpDialogOpen}
                onClose={closeHelpDialog}
            />
        </>
    );
};

export default Navbar;

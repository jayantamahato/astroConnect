import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTheme, toggleTheme } from '../../features/theme/themeSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Horoscopes', path: '/horoscopes' },
        { name: 'Panchang', path: '/panchang' },
        { name: 'Kundli', path: '/kundli' },
        // { name: 'Tarot', path: '/tarot' },
        // { name: 'Numerology', path: '/numerology' },
        // { name: 'Vastu', path: '/vastu' },
        // { name: 'Ask Question', path: '/ask-question' },
        { name: 'Blog', path: '/blog' },
        { name: 'Shop', path: '/shop' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-primary text-3xl">🔆</span>
                        <span className="text-2xl font-heading font-bold text-foreground">
                            AstroConnect
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {links.map((link) => (
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
                        <button className="bg-primary text-primary-foreground px-8 py-2 rounded-full font-bold hover:bg-opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                            Login
                        </button>
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
                <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top-5 duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
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
                        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

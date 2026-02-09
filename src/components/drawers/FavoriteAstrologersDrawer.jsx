import React from 'react';
import { X, Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AstrologerCard } from '../cards/AstrologerCard';
import { useConnection } from '../ConnectionProvider';

/**
 * FavoriteAstrologersDrawer - A slide-in drawer showing favorite astrologers
 * 
 * @param {boolean} isOpen - Whether the drawer is open
 * @param {function} onClose - Function to close the drawer
 * @param {array} favorites - Array of favorite astrologers
 * @param {function} onRemove - Function to remove an astrologer from favorites
 */
const FavoriteAstrologersDrawer = ({ isOpen, onClose, favorites = [], onRemove }) => {
    const { startChat, startCall } = useConnection();

    // Mock data for demonstration (replace with actual data from props/state)
    const mockFavorites = [
        {
            id: 1,
            name: "Pandit Sharma",
            skills: "Vedic Astrology, Horoscope",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 4.9,
            experience: "15 Years Experience",
            price: "₹25/min",
            status: "online"
        },
        {
            id: 2,
            name: "Astro Meera",
            skills: "Tarot Reading, Palmistry",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            rating: 4.8,
            experience: "12 Years Experience",
            price: "₹30/min",
            status: "busy"
        },
        {
            id: 3,
            name: "Guru Rajesh",
            skills: "Numerology, Vastu",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
            rating: 4.7,
            experience: "10 Years Experience",
            price: "₹20/min",
            status: "offline"
        }
    ];

    const displayFavorites = favorites.length > 0 ? favorites : mockFavorites;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <Heart className="w-5 h-5 text-primary fill-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-heading font-bold text-foreground">
                                Favorite Astrologers
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {displayFavorites.length} astrologer{displayFavorites.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
                    {displayFavorites.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="p-4 bg-muted rounded-full mb-4">
                                <Heart className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                No Favorites Yet
                            </h3>
                            <p className="text-muted-foreground max-w-xs">
                                Start adding astrologers to your favorites to quickly access them here.
                            </p>
                            <Link
                                to="/all-astrologers"
                                onClick={onClose}
                                className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Browse Astrologers
                            </Link>
                        </div>
                    ) : (
                        displayFavorites.map((astro) => (
                            <div key={astro.id} className="relative group">
                                {/* Remove Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onRemove && onRemove(astro.id);
                                    }}
                                    className="absolute top-2 right-2 z-20 p-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 hover:border-destructive/30 transition-all opacity-0 group-hover:opacity-100"
                                    title="Remove from favorites"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>

                                {/* Astrologer Card */}
                                <AstrologerCard
                                    astro={astro}
                                    onChat={() => {
                                        startChat(astro);
                                        onClose();
                                    }}
                                    onCall={() => {
                                        startCall(astro);
                                        onClose();
                                    }}
                                />
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {displayFavorites.length > 0 && (
                    <div className="p-4 border-t border-border bg-card">
                        <Link
                            to="/all-astrologers"
                            onClick={onClose}
                            className="block w-full text-center py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Browse More Astrologers
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoriteAstrologersDrawer;

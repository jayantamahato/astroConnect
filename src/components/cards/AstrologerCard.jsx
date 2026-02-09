import React, { memo } from 'react';
import { useNavigate } from "react-router-dom";
import { Star, Phone } from "lucide-react";

/**
 * AstrologerCard - Premium global card component for astrologer profiles
 * Memoized for performance optimization
 */
const AstrologerCard = memo(function AstrologerCard({ astro, onChat, onCall }) {
    const navigate = useNavigate();

    const handleCardClick = () => navigate(`/astrologer/${astro.id || 1}`);

    const handleCallClick = (e) => {
        e.stopPropagation();
        onCall?.(astro);
    };

    const handleChatClick = (e) => {
        e.stopPropagation();
        onChat?.(astro);
    };

    const isOnline = astro.status === 'online';
    const isBusy = astro.status === 'busy';
    const isAvailable = isOnline || isBusy;

    const statusColor = isOnline ? 'bg-green-500' : isBusy ? 'bg-purple-500' : 'bg-red-500';
    const buttonColor = isBusy
        ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
        : 'border-primary text-primary hover:bg-primary hover:text-white';
    const callButtonColor = isBusy
        ? 'border-purple-500/30 text-purple-500 hover:bg-purple-500 hover:text-white'
        : 'border-green-500/30 text-green-500 hover:bg-green-500 hover:text-white';

    const displayPrice = astro.price || `₹${astro.pricing?.chat?.discounted}/min`;
    const displayExperience = typeof astro.experience === 'number' ? `${astro.experience} Yrs` : astro.experience;

    return (
        <div
            onClick={handleCardClick}
            className="bg-white dark:bg-card border border-zinc-200 dark:border-white/5 p-5 rounded-2xl flex flex-col gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all group relative cursor-pointer h-full"
        >
            <div className="flex gap-4">
                {/* Avatar */}
                <div className="relative">
                    <img
                        src={astro.image}
                        alt={astro.name}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover border-2 border-secondary p-0.5"
                    />
                    <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-card shadow-sm ${statusColor}`} />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white line-clamp-1">
                            {astro.name}
                        </h3>
                        <span className="shrink-0 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            {astro.rating} <Star className="w-2 h-2 fill-current" />
                        </span>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 leading-tight line-clamp-1">
                        {astro.skills || astro.specialties}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {displayExperience}
                    </span>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-2 mt-auto min-h-[44px]">
                <div className="flex flex-col">
                    <span className="text-zinc-900 dark:text-white font-bold text-lg">
                        {displayPrice}
                    </span>
                </div>

                {isAvailable ? (
                    <div className="flex gap-3">
                        <button
                            onClick={handleCallClick}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${callButtonColor}`}
                            aria-label="Call astrologer"
                        >
                            <Phone className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handleChatClick}
                            className={`px-5 py-2 rounded-full border font-bold text-xs uppercase tracking-widest transition-colors ${buttonColor}`}
                        >
                            {isBusy ? 'Waitlist' : 'Chat'}
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-red-500/50 italic text-[10px] font-bold uppercase tracking-widest px-4">
                        Offline
                    </div>
                )}
            </div>
        </div>
    );
});

export { AstrologerCard };
export default AstrologerCard;

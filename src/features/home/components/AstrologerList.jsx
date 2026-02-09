import { memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AstrologerCard } from "../../../components/cards/AstrologerCard";
import { useConnection } from '../../../components/ConnectionProvider';
import { EXPERT_ASTROLOGERS } from '../../../constants/astrologers';

/**
 * AstrologerList - Homepage section showing featured astrologers
 * Memoized for performance
 */
const AstrologerList = memo(function AstrologerList() {
    const navigate = useNavigate();
    const { startChat, startCall } = useConnection();

    const handleViewAll = useCallback(() => navigate('/all-astrologers'), [navigate]);
    const handleChat = useCallback((astro) => startChat(astro), [startChat]);
    const handleCall = useCallback((astro) => startCall(astro), [startCall]);

    return (
        <section className="py-16 bg-background relative z-10 px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Header & Filters */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-heading font-normal">
                        Expert Astrologers
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                        Connect with verified experts instantly
                    </p>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto justify-center md:justify-end">
                    <button
                        onClick={handleViewAll}
                        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center gap-2 group"
                    >
                        View All Astrologers
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EXPERT_ASTROLOGERS.map((astro) => (
                    <AstrologerCard
                        key={astro.id}
                        astro={astro}
                        onChat={handleChat}
                        onCall={handleCall}
                    />
                ))}
            </div>
        </section>
    );
});

export { AstrologerList };
export default AstrologerList;

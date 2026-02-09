import { memo, useCallback } from 'react';
import { Search } from 'lucide-react';
import { AstrologerCard } from '../../../components/cards/AstrologerCard';

/**
 * EmptyState - Extracted empty state component
 */
const EmptyState = memo(function EmptyState({ onClearFilters }) {
    return (
        <div className="col-span-full py-20 flex flex-col items-center justify-center text-center space-y-4 bg-card rounded-3xl border border-dashed border-border">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-foreground">No Astrologers Found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            </div>
            <button
                onClick={onClearFilters}
                className="text-primary font-bold hover:underline"
            >
                Clear all filters
            </button>
        </div>
    );
});

/**
 * AstrologerGrid - Grid of astrologer cards with empty state
 * Memoized for performance
 */
const AstrologerGrid = memo(function AstrologerGrid({ astrologers, onClearFilters, onChat, onCall }) {
    const handleChat = useCallback((astro) => onChat?.(astro), [onChat]);
    const handleCall = useCallback((astro) => onCall?.(astro), [onCall]);

    if (astrologers.length === 0) {
        return <EmptyState onClearFilters={onClearFilters} />;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {astrologers.map((astro) => (
                    <AstrologerCard
                        key={astro.id}
                        astro={astro}
                        onChat={handleChat}
                        onCall={handleCall}
                    />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 rounded-xl border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors shadow-sm">
                    See More Astrologers
                </button>
            </div>
        </>
    );
});

export default AstrologerGrid;

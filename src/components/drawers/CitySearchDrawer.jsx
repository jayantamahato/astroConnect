import React, { useState, useEffect } from 'react';
import { X, Search, MapPin, History, ChevronRight } from 'lucide-react';

const RECENT_CITIES = [
    { city: "Kolkata", state: "West Bengal", country: "India" },
    { city: "Mumbai", state: "Maharashtra", country: "India" },
    { city: "New Delhi", state: "Delhi", country: "India" }
];

const PREDICTIONS = [
    { city: "Bangalore", state: "Karnataka", country: "India" },
    { city: "Hyderabad", state: "Telangana", country: "India" },
    { city: "Chennai", state: "Tamil Nadu", country: "India" },
    { city: "Pune", state: "Maharashtra", country: "India" },
    { city: "Ahmedabad", state: "Gujarat", country: "India" }
];

const CitySearchDrawer = ({ isOpen, onClose, onSelect }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentSearches, setRecentSearches] = useState(RECENT_CITIES);

    useEffect(() => {
        if (isOpen) {
            setSearchQuery("");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const filteredPredictions = searchQuery.length > 0
        ? PREDICTIONS.filter(p => p.city.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col border-l border-border">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                    <div className="space-y-1">
                        <h2 className="text-xl font-heading font-bold text-foreground">
                            Search Birth Place
                        </h2>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">
                            Select accurate city for precise calculations
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Search Bar */}
                <div className="p-6 border-b border-border bg-card/50">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Type city or town name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-muted/40 border border-border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm font-medium text-foreground placeholder:text-muted-foreground/30"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
                    {searchQuery.length > 0 ? (
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Search Results</h3>
                            <div className="space-y-2">
                                {filteredPredictions.length > 0 ? (
                                    filteredPredictions.map((p, i) => (
                                        <button
                                            key={i}
                                            onClick={() => onSelect(`${p.city}, ${p.state}, ${p.country}`)}
                                            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-muted/20 border border-border hover:border-primary/30 hover:bg-muted/40 transition-all text-left group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-foreground">{p.city}</h4>
                                                <p className="text-xs text-muted-foreground">{p.state}, {p.country}</p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                                        </button>
                                    ))
                                ) : (
                                    <div className="text-center py-12 space-y-3 opacity-50">
                                        <Search className="w-10 h-10 mx-auto text-muted-foreground/30" />
                                        <p className="text-sm text-muted-foreground">No matches found for "{searchQuery}"</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1 flex items-center gap-2">
                                <History className="w-3 h-3" />
                                Recent Searches
                            </h3>
                            <div className="space-y-2">
                                {recentSearches.map((p, i) => (
                                    <button
                                        key={i}
                                        onClick={() => onSelect(`${p.city}, ${p.state}, ${p.country}`)}
                                        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-muted/10 border border-transparent hover:border-border hover:bg-muted/30 transition-all text-left"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-foreground">{p.city}</h4>
                                            <p className="text-[11px] text-muted-foreground">{p.state}, {p.country}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CitySearchDrawer;

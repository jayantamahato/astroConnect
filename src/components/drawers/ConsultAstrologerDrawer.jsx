import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { AstrologerCard } from "../cards/AstrologerCard";
import { useConnection } from '../ConnectionProvider';

import { ALL_ASTROLOGERS } from '../../constants/astrologers';

const ConsultAstrologerDrawer = ({ isOpen, onClose }) => {
    const { startChat, startCall } = useConnection();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAstrologers = ALL_ASTROLOGERS.filter(astro =>
        astro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        astro.skills.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex justify-end">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                    <div className="space-y-1">
                        <h2 className="text-xl font-heading font-bold text-foreground">
                            Consult Astrologer
                        </h2>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                            Expert Guidance Instantly
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <div className="p-6 border-b border-border bg-card/50">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by name or skill..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-muted/20 border border-border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm font-medium"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                    {filteredAstrologers.length === 0 ? (
                        <div className="text-center py-12 space-y-4 opacity-50">
                            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                                <Search className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground font-medium">No experts found matching your search</p>
                        </div>
                    ) : (
                        filteredAstrologers.map((astro) => (
                            <AstrologerCard
                                key={astro.id}
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
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConsultAstrologerDrawer;

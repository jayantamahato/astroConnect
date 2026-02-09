import React, { useState } from 'react';
import { Search, History, Trash2, User, Clock, Brain, TrendingUp } from "lucide-react";
import DeleteConfirmationDialog from '../../../components/modals/DeleteConfirmationDialog';

const INITIAL_SEARCHES = [
    { id: 1, name: "Jayanta Mahato", details: "15 May 1995 • 10:30 AM • Ranchi", gender: "Male" },
    { id: 2, name: "Priya Sharma", details: "22 Oct 1998 • 04:15 PM • Delhi", gender: "Female" },
];

const KundaliHero = () => {
    const [recentSearches, setRecentSearches] = useState(INITIAL_SEARCHES);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [profileToDelete, setProfileToDelete] = useState(null);

    const handleDeleteClick = (e, profile) => {
        e.stopPropagation();
        setProfileToDelete(profile);
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        if (profileToDelete) {
            setRecentSearches(prev => prev.filter(p => p.id !== profileToDelete.id));
            setProfileToDelete(null);
        }
    };

    return (
        <div className="space-y-16">
            {/* Recent Searches Section */}
            <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <History className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Recent Profiles</h3>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search recent profiles..."
                        className="w-full bg-muted/20 border border-border rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm font-medium text-foreground placeholder:text-muted-foreground/30"
                    />
                </div>

                {/* List Items */}
                <div className="space-y-4">
                    {recentSearches.map((item) => (
                        <div key={item.id} className="group relative flex items-center gap-4 p-4 rounded-2xl bg-muted/10 border border-border/30 hover:border-primary/30 hover:bg-muted/20 transition-all cursor-pointer">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <User className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-foreground truncate font-heading">{item.name}</h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                    <Clock className="w-3 h-3" />
                                    <span className="truncate">{item.details}</span>
                                </div>
                            </div>
                            <button
                                onClick={(e) => handleDeleteClick(e, item)}
                                className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}

                    {recentSearches.length === 0 && (
                        <div className="text-center py-8 space-y-2 opacity-50">
                            <History className="w-12 h-12 mx-auto text-muted-foreground" />
                            <p className="text-sm font-medium">No recent searches found</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Info Cards */}
            <div className="space-y-8 pl-8">
                <div className="flex gap-6 group">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Brain className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground font-heading">Understand Your Destiny</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Your Kundali is a snapshot of the heavens at your birth, revealing your life's unique purpose and path.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 group">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <TrendingUp className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground font-heading">Future Predictions</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Gain insights into upcoming phases of your life regarding career, relationships, and health.
                        </p>
                    </div>
                </div>
            </div>

            <DeleteConfirmationDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Profile?"
                message={`Are you sure you want to remove ${profileToDelete?.name}'s profile from your recent history?`}
            />
        </div>
    );
};

export default KundaliHero;

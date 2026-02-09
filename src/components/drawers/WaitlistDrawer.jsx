import React, { useState } from 'react';
import { X, User, Trash2, Clock, MessageSquare, Phone } from 'lucide-react';

const INITIAL_WAITLIST = [
    { id: 1, name: "Acharya Varma", experience: "12 Yrs", status: "In Session", waitTime: "12 mins", image: "https://i.pravatar.cc/150?u=Acharya", type: "Chat" },
    { id: 2, name: "Dr. Sharma", experience: "20 Yrs", status: "Busy", waitTime: "8 mins", image: "https://i.pravatar.cc/150?u=Sharma", type: "Call" },
];

const WaitlistDrawer = ({ isOpen, onClose, waitlist = INITIAL_WAITLIST, onRemove }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col border-l border-border">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                    <div className="space-y-1">
                        <h2 className="text-xl font-heading font-bold text-foreground">
                            My Waitlist
                        </h2>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">
                            Track your connection requests
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                    {waitlist.length === 0 ? (
                        <div className="text-center py-20 space-y-4 opacity-40">
                            <Clock className="w-16 h-16 mx-auto text-muted-foreground" />
                            <div className="space-y-1">
                                <p className="font-bold text-lg">Waitlist is empty</p>
                                <p className="text-sm">You haven't joined any waiting lists yet.</p>
                            </div>
                        </div>
                    ) : (
                        waitlist.map((astro) => (
                            <div key={astro.id} className="relative group p-4 rounded-2xl bg-muted/20 border border-border hover:border-primary/30 hover:bg-muted/30 transition-all flex gap-4">
                                {/* Astro Image */}
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-muted border border-border">
                                        <img src={astro.image} alt={astro.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg">
                                        {astro.type === 'Chat' ? <MessageSquare className="w-3 h-3" /> : <Phone className="w-3 h-3" />}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-bold text-foreground truncate">{astro.name}</h4>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                            {astro.waitTime} Wait
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-3">{astro.experience} Exp • {astro.status}</p>

                                    <button
                                        onClick={() => onRemove(astro.id)}
                                        className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                        Leave Waitlist
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Info */}
                <div className="p-6 bg-card/30 border-t border-border mt-auto">
                    <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                        You will be notified via push notification <br /> when the astrologer is ready to connect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WaitlistDrawer;

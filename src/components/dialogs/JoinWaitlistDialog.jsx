import React, { useState } from 'react';
import { X, Clock, Users, ArrowRight, ShieldCheck, MessageSquare, Phone, Video } from 'lucide-react';

/**
 * JoinWaitlistDialog - Integrated waitlist dialog with consultation type selection
 */
const JoinWaitlistDialog = ({ isOpen, onClose, astrologer, onJoin, initialType = 'chat' }) => {
    const [selectedType, setSelectedType] = useState(initialType);

    if (!isOpen) return null;

    const consultationTypes = [
        { id: 'chat', label: 'Chat', icon: MessageSquare, color: 'text-primary' },
        { id: 'voice', label: 'Voice', icon: Phone, color: 'text-green-500' },
        { id: 'video', label: 'Video', icon: Video, color: 'text-purple-500' }
    ];

    const handleJoin = () => {
        onJoin({ type: selectedType });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-auto"
                onClick={onClose}
            />

            {/* Dialog Container */}
            <div className="relative w-full max-w-md bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-8 space-y-8">
                    {/* Header Image/Icon Section */}
                    <div className="relative text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                            <Clock className="w-12 h-12 text-primary -rotate-3 animate-pulse" />
                        </div>
                        <div className="absolute top-0 right-1/4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg transform -translate-y-2 translate-x-4">
                            <Users className="w-4 h-4 text-secondary-foreground" />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-heading font-bold text-foreground">
                            Join the Waitlist
                        </h2>
                        <p className="text-xs text-muted-foreground leading-relaxed px-4">
                            <span className="font-bold text-foreground">{astrologer?.name}</span> is currently busy. Choose your mode and join the queue.
                        </p>
                    </div>

                    {/* Type Selection */}
                    <div className="grid grid-cols-3 gap-3">
                        {consultationTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${selectedType === type.id
                                        ? 'border-primary bg-primary/5 shadow-inner'
                                        : 'border-border bg-muted/20 hover:border-zinc-400'
                                    }`}
                            >
                                <type.icon className={`w-5 h-5 ${selectedType === type.id ? type.color : 'text-muted-foreground'}`} />
                                <span className={`text-[10px] font-black uppercase tracking-widest ${selectedType === type.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {type.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/30 rounded-2xl p-4 text-center space-y-1">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Waiting</p>
                            <p className="text-lg font-bold text-foreground">3 Users</p>
                        </div>
                        <div className="bg-muted/30 rounded-2xl p-4 text-center space-y-1">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Est. Wait</p>
                            <p className="text-lg font-bold text-foreground">~ 12 mins</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 pt-2">
                        <button
                            onClick={handleJoin}
                            className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-primary/90 active:scale-95 shadow-[0_15px_30px_rgba(255,140,0,0.2)] group"
                        >
                            JOIN {selectedType.toUpperCase()} WAITLIST
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em] font-black">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Guaranteed Notification
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinWaitlistDialog;

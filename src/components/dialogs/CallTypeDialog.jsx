import React from 'react';
import { X, Video, Phone, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

const CallTypeDialog = ({ isOpen, onClose, astrologer, onSelect }) => {
    if (!isOpen) return null;

    const options = [
        {
            id: 'voice',
            title: 'Audio Call',
            description: 'Private voice consultation',
            icon: Phone,
            color: 'bg-green-500/10 text-green-500',
            price: astrologer?.price || astrologer?.pricing?.call?.discounted || '30',
            tag: 'Popular'
        },
        {
            id: 'video',
            title: 'Video Call',
            description: 'Face-to-face live session',
            icon: Video,
            color: 'bg-purple-500/10 text-purple-500',
            price: (parseInt((astrologer?.price || '30').toString().replace(/[^0-9]/g, '')) * 1.5).toFixed(0),
            tag: 'Premium Experience'
        }
    ];

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 pointer-events-auto"
                onClick={onClose}
            />

            {/* Dialog Container */}
            <div className="relative w-full max-w-lg bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-8 space-y-8">
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-2">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Secure Connection
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-foreground">
                            Choose Call Mode
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Connect with <span className="text-foreground font-bold">{astrologer?.name}</span> via your preferred method
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => {
                                    onSelect(option.id);
                                    onClose();
                                }}
                                className="relative group text-left p-6 rounded-3xl bg-muted/20 border-2 border-transparent hover:border-primary/50 hover:bg-muted/40 transition-all flex flex-col gap-4"
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${option.color} group-hover:scale-110 transition-transform`}>
                                    <option.icon className="w-6 h-6" />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg text-foreground">{option.title}</h3>
                                        <span className="text-[9px] font-black uppercase tracking-tighter text-muted-foreground opacity-50">₹{option.price}/m</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{option.description}</p>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                                    Start Now <ArrowRight className="w-3 h-3" />
                                </div>

                                {option.tag && (
                                    <span className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-tighter bg-card px-2 py-0.5 rounded-full border border-border">
                                        {option.tag}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4 items-start">
                        <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-amber-600 dark:text-amber-500 font-medium leading-relaxed">
                            {astrologer?.status === 'busy'
                                ? "Astrologer is currently in a session. You'll be added to the queue for your chosen call type."
                                : "The average connection time for live calls is less than 2 minutes."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallTypeDialog;

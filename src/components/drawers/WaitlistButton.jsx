import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useAppSelector } from '../../store/hooks';
import { selectAuth } from '../../features/auth/authSlice';
import WaitlistDrawer from './WaitlistDrawer';

const INITIAL_WAITLIST = [
    { id: 1, name: "Acharya Varma", experience: "12 Yrs", status: "In Session", waitTime: "12 mins", image: "https://i.pravatar.cc/150?u=Acharya", type: "Chat" },
    { id: 2, name: "Dr. Sharma", experience: "20 Yrs", status: "Busy", waitTime: "8 mins", image: "https://i.pravatar.cc/150?u=Sharma", type: "Call" },
];

const WaitlistButton = () => {
    const { isAuthenticated } = useAppSelector(selectAuth);
    const [isOpen, setIsOpen] = useState(false);
    const [waitlist, setWaitlist] = useState(INITIAL_WAITLIST);

    const handleRemove = (id) => {
        setWaitlist(prev => prev.filter(item => item.id !== id));
    };

    // Hide if not authenticated or list is empty
    if (!isAuthenticated || waitlist.length === 0) return null;

    return (
        <>
            {/* Floating Waitlist Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-32 right-12 z-[100] bg-white dark:bg-card border border-border text-foreground px-6 py-4 rounded-full font-bold flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all group"
            >
                <div className="relative">
                    <Clock className="w-5 h-5 text-primary animate-pulse" />
                    {waitlist.length > 0 && (
                        <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#1A1A1A]">
                            {waitlist.length}
                        </div>
                    )}
                </div>
                <span className="uppercase tracking-widest text-xs font-black">Waitlist</span>
            </button>

            <WaitlistDrawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                waitlist={waitlist}
                onRemove={handleRemove}
            />
        </>
    );
};

export default WaitlistButton;

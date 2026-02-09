import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mic, MicOff, Volume2, PhoneOff, User, MoreVertical, Shield } from 'lucide-react';

const VoiceCallPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [callDuration, setCallDuration] = useState(0);
    const [status, setStatus] = useState('Connecting...');

    // Mock Astrologer Data
    const astrologer = {
        name: "Pandit Sharma",
        image: "https://i.pravatar.cc/150?u=Pandit",
        specialty: "Vedic Astrologer"
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);

        // Simulate connection
        setTimeout(() => setStatus('00:00:00'), 2000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return [h, m, s].map(v => v < 10 ? "0" + v : v).join(":");
    };

    const handleEndCall = () => {
        navigate(-1);
    };

    return (
        <div className="fixed inset-0 bg-[#0F172A] text-white flex flex-col items-center justify-between p-8 md:p-12 overflow-hidden">
            {/* Background Blur Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />

            {/* Header */}
            <div className="w-full flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">Secure Voice Line</span>
                </div>
                <button className="p-3 hover:bg-white/10 rounded-full transition-colors">
                    <MoreVertical className="w-6 h-6" />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-8 relative z-10">
                <div className="relative">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150 opacity-20" />
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse scale-125 opacity-30" />

                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 p-2 relative bg-[#1E293B]">
                        <img
                            src={astrologer.image}
                            alt={astrologer.name}
                            className="w-full h-full object-cover rounded-full shadow-2xl"
                        />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-heading font-bold tracking-tight">{astrologer.name}</h1>
                    <p className="text-primary font-medium tracking-wide uppercase text-xs">{astrologer.specialty}</p>
                    <p className="text-white/40 text-lg font-mono pt-4">
                        {status === 'Connecting...' ? status : formatTime(callDuration)}
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="w-full max-w-md grid grid-cols-3 gap-8 items-center relative z-10">
                <div className="flex flex-col items-center gap-3">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{isMuted ? 'Muted' : 'Mute'}</span>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <button
                        onClick={handleEndCall}
                        className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-2xl shadow-red-600/40 hover:scale-110 active:scale-95"
                    >
                        <PhoneOff className="w-8 h-8" />
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">End Call</span>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <button className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">
                        <Volume2 className="w-6 h-6" />
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Speaker</span>
                </div>
            </div>

            {/* Price indicator */}
            <div className="relative z-10 text-[10px] font-black tracking-[0.2em] text-white/20 uppercase">
                Consultation charges applied per minute
            </div>
        </div>
    );
};

export default VoiceCallPage;

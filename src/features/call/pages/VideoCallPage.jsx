import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Mic, MicOff,
    Video as VideoIcon, VideoOff,
    PhoneOff,
    SwitchCamera,
    Shield,
    Settings,
    MessageCircle
} from 'lucide-react';

const VideoCallPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [callDuration, setCallDuration] = useState(0);

    // Mock Astrologer Data
    const astrologer = {
        name: "Pandit Sharma",
        image: "https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg",
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCallDuration(prev => prev + 1);
        }, 1000);
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
        <div className="fixed inset-0 bg-black text-white flex flex-col overflow-hidden">
            {/* Main Remote Video Stream (Mocked with Image) */}
            <div className="absolute inset-0 z-0">
                <img
                    src={astrologer.image}
                    alt="Remote Stream"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            {/* Top Header */}
            <div className="relative z-10 p-6 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-heading font-bold drop-shadow-lg">{astrologer.name}</h1>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-sm font-mono tracking-tighter drop-shadow-md">
                            Live • {formatTime(callDuration)}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className="text-[10px] font-black tracking-widest uppercase">End-to-End Encrypted</span>
                    </div>
                    <button className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                        <Settings className="w-5 h-5 text-white/70" />
                    </button>
                </div>
            </div>

            {/* Picture-in-Picture (Local Stream) */}
            <div className="absolute right-6 top-24 w-32 h-44 md:w-48 md:h-64 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl z-20 group">
                <div className="absolute inset-0 bg-muted/20 backdrop-blur-xl flex items-center justify-center">
                    {isVideoOff ? (
                        <VideoOff className="w-10 h-10 text-white/20" />
                    ) : (
                        <div className="w-full h-full bg-[#1E293B] flex items-center justify-center">
                            <span className="text-xs font-bold text-white/30">You</span>
                        </div>
                    )}
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <SwitchCamera className="w-4 h-4" />
                </button>
            </div>

            {/* Bottom Controls */}
            <div className="mt-auto relative z-30 p-8 pb-12 flex flex-col items-center gap-8">
                {/* Visual Feedback Bar */}
                <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-[shimmer_2s_infinite]" style={{ width: '60%' }} />
                </div>

                <div className="flex items-center gap-6 md:gap-10">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 transition-all ${isMuted ? 'bg-red-500/80 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {isMuted ? <MicOff className="w-6 h-6 md:w-7 md:h-7" /> : <Mic className="w-6 h-6 md:w-7 md:h-7" />}
                    </button>

                    <button
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 transition-all ${isVideoOff ? 'bg-red-500/80 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {isVideoOff ? <VideoOff className="w-6 h-6 md:w-7 md:h-7" /> : <VideoIcon className="w-6 h-6 md:w-7 md:h-7" />}
                    </button>

                    <button
                        onClick={handleEndCall}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-110 active:scale-95 border-4 border-black/20"
                    >
                        <PhoneOff className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">
                        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                    </button>

                    <button className="hidden md:flex w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white items-center justify-center hover:bg-white/20 transition-all">
                        <Settings className="w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Connection Strength indicator */}
            <div className="absolute bottom-6 left-6 flex gap-1 items-end z-30">
                <div className="w-1.5 h-3 bg-green-500 rounded-sm" />
                <div className="w-1.5 h-5 bg-green-500 rounded-sm" />
                <div className="w-1.5 h-7 bg-green-500 rounded-sm" />
                <div className="w-1.5 h-9 bg-green-500 rounded-sm opacity-30" />
            </div>
        </div>
    );
};

export default VideoCallPage;

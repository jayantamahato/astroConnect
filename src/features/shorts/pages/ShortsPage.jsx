import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Music2, User, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';

const ShortsPage = () => {
    // Mock Data for Shorts
    const shortsData = [
        {
            id: 1,
            username: "@astro_priya",
            description: "How Mercury Retrograde affects your sign 🌟 #astrology #darkmoon",
            music: "Original Audio - Astro Beats",
            likes: "12.5K",
            comments: "856",
            shares: "2.3K",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1610-large.mp4",
            image: "https://images.unsplash.com/photo-1534067783865-9eb9c8646b15?w=500&auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            username: "@tarot_mystic",
            description: "Pick a card! What's coming next for you? 🔮 #tarot #reading",
            music: "Mystic Vibes - Sound 2",
            likes: "8.2K",
            comments: "420",
            shares: "1.1K",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mysteriousman-looking-at-golden-particles-3636-large.mp4",
            image: "https://images.unsplash.com/photo-1620066228770-3882260be341?w=500&auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            username: "@vedic_guru",
            description: "Morning rituals for positive energy ☀️ #vedic #morning #energy",
            music: "Chanting Om - Peaceful",
            likes: "45K",
            comments: "1.2K",
            shares: "5K",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-shining-stars-in-space-background-loop-2-1627-large.mp4",
            image: "https://images.unsplash.com/photo-1545229720-d1727fc82827?w=500&auto=format&fit=crop&q=80"
        },
    ];

    const containerRef = useRef(null);

    const scrollUp = () => {
        if (containerRef.current) {
            const height = containerRef.current.clientHeight;
            containerRef.current.scrollBy({ top: -height, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (containerRef.current) {
            const height = containerRef.current.clientHeight;
            containerRef.current.scrollBy({ top: height, behavior: 'smooth' });
        }
    };

    return (
        <div className="h-screen bg-black text-white flex flex-col pt-16 md:pt-20 relative overflow-hidden">
            {/* Navbar Wrapper */}
            <div className="absolute top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex-1 w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide scroll-smooth relative"
            >
                {shortsData.map((short) => (
                    <ShortItem key={short.id} data={short} />
                ))}
            </div>

            {/* Navigation Buttons (Desktop Only) */}
            <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 pointer-events-none md:pointer-events-auto hidden md:flex">
                <button
                    onClick={scrollUp}
                    className="p-4 bg-gray-800/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all shadow-lg hover:scale-110 pointer-events-auto border border-white/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <button
                    onClick={scrollDown}
                    className="p-4 bg-gray-800/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all shadow-lg hover:scale-110 pointer-events-auto border border-white/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>
            </div>
        </div>
    );
};

const ShortItem = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsPlaying(true);
                    videoRef.current?.play().catch(() => { });
                } else {
                    setIsPlaying(false);
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.6 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-full snap-start flex items-center justify-center p-0 md:p-4 relative">
            {/* Inner Card Container */}
            <div className="relative w-full max-w-md h-full bg-black rounded-none md:rounded-2xl overflow-hidden shadow-2xl border-0 md:border border-white/10 group">

                {/* Video Player */}
                <video
                    ref={videoRef}
                    src={data.videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                    onClick={togglePlay}
                    poster={data.image}
                />

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>

                {/* Play/Pause Icon Overlay */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/40 backdrop-blur-md p-4 rounded-full animate-in zoom-in duration-200">
                            <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                    </div>
                )}

                {/* Top Right Controls (Mute) */}
                <div className="absolute top-4 right-4 z-20">
                    <button onClick={toggleMute} className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition">
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                </div>

                {/* Right Side Social Actions */}
                <div className="absolute bottom-24 right-2 flex flex-col gap-6 items-center z-20 pointer-events-auto">
                    <div className="flex flex-col items-center gap-1">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className="p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Heart className={`w-7 h-7 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                        </button>
                        <span className="text-xs font-bold text-white drop-shadow-md">{data.likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <button className="p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors">
                            <MessageCircle className="w-7 h-7 text-white" />
                        </button>
                        <span className="text-xs font-bold text-white drop-shadow-md">{data.comments}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <button className="p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors">
                            <Share2 className="w-7 h-7 text-white" />
                        </button>
                        <span className="text-xs font-bold text-white drop-shadow-md">Share</span>
                    </div>

                    {/* User Profile Pic Small */}
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden mt-2">
                        <img src="https://i.pravatar.cc/100" alt="user" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Bottom Info Section */}
                <div className="absolute bottom-6 left-4 right-16 z-20 pointer-events-auto text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-white text-base drop-shadow-sm">{data.username}</h3>
                        <button className="text-[10px] font-bold bg-white text-black px-2 py-0.5 rounded-full hover:bg-gray-200 transition">Follow</button>
                    </div>
                    <p className="text-sm text-white/90 mb-3 drop-shadow-sm line-clamp-2 leading-snug">
                        {data.description}
                    </p>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                        <Music2 className="w-3 h-3 text-white animate-spin-slow" />
                        <span className="text-xs text-white font-medium truncate max-w-[150px]">{data.music}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShortsPage;

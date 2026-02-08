import React, { useState, useEffect, useRef } from 'react';
import { Heart, Send, Share2, MessageCircle, X, ThumbsUp, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';

const LiveStreamViewerPage = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { id: 1, user: "Aarav", text: "Can you tell me about my career?", color: "text-blue-400" },
        { id: 2, user: "Sanya", text: "Love this reading!", color: "text-pink-400" },
        { id: 3, user: "Vikram", text: "Waiting for my turn...", color: "text-green-400" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [likes, setLikes] = useState(1240);
    const scrollRef = useRef(null);

    // Auto-scroll chat
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Simulate incoming messages
    useEffect(() => {
        const interval = setInterval(() => {
            const randomUser = ["User123", "AstroFan", "StarGazer", "MoonChild"][Math.floor(Math.random() * 4)];
            const randomMsg = ["Hello!", "Great insight", "Wow", "Please check my chart"][Math.floor(Math.random() * 4)];
            const randomColor = ["text-red-400", "text-yellow-400", "text-purple-400", "text-orange-400"][Math.floor(Math.random() * 4)];

            setMessages(prev => [...prev.slice(-50), { id: Date.now(), user: randomUser, text: randomMsg, color: randomColor }]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        setMessages(prev => [...prev, { id: Date.now(), user: "You", text: newMessage, color: "text-primary font-bold" }]);
        setNewMessage("");
    };

    const handleLike = () => {
        setLikes(prev => prev + 1);
        // Add floating heart animation logic here (mocked for now)
    };

    return (
        <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
            {/* Minimal Navbar for Viewer */}
            <div className="absolute top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-black/40 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    LIVE
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row h-full pt-0 lg:pt-0">

                {/* Video Area */}
                <div className="flex-1 relative bg-black flex items-center justify-center group">
                    {/* Placeholder for Video Player */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534067783865-9eb9c8646b15?w=500&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div>
                    <div className="z-10 text-center space-y-4">
                        <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center mx-auto animate-bounce">
                            <div className="w-16 h-16 bg-primary rounded-full"></div>
                        </div>
                        <h2 className="text-2xl font-bold">Live Stream Started</h2>
                        <p className="text-gray-400">Waiting for astrologer to join...</p>
                    </div>

                    {/* Gradient Overlay for controls */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

                    {/* Desktop Overlay Controls (Action Buttons) */}
                    <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20 pointer-events-auto">
                        <button onClick={handleLike} className="group relative flex flex-col items-center">
                            <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-pink-600 transition-colors">
                                <Heart className={`w-6 h-6 ${likes % 2 === 0 ? 'fill-pink-500 text-pink-500' : 'text-white'}`} />
                            </div>
                            <span className="text-xs font-bold mt-1">{likes}</span>
                        </button>
                        <button className="group flex flex-col items-center">
                            <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-primary transition-colors">
                                <Share2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs font-bold mt-1">Share</span>
                        </button>
                        <button className="group flex flex-col items-center">
                            <div className="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-yellow-500 transition-colors">
                                <Gift className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs font-bold mt-1">Gift</span>
                        </button>
                    </div>
                </div>

                {/* Chat Sidebar */}
                <div className="w-full lg:w-96 bg-card border-l border-border flex flex-col h-[40vh] lg:h-full z-20 absolute bottom-0 lg:relative shadow-2xl lg:shadow-none transition-colors duration-300">

                    {/* Chat Header */}
                    <div className="p-4 border-b border-border bg-muted/30">
                        <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Live Chat
                        </h3>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-muted-foreground/20 hover:scrollbar-thumb-muted-foreground/40"
                    >
                        {messages.map((msg) => (
                            <div key={msg.id} className="text-sm animate-in fade-in slide-in-from-bottom-2 duration-300 bg-muted/30 p-2 rounded-lg">
                                <span className={`font-bold ${msg.color} mr-2 block text-xs`}>{msg.user}</span>
                                <span className="text-foreground/90">{msg.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-background border-t border-border flex gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Add a comment..."
                            className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary outline-none placeholder:text-muted-foreground transition-all"
                        />
                        <button
                            type="submit"
                            className="p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 shadow-sm"
                            disabled={!newMessage.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LiveStreamViewerPage;

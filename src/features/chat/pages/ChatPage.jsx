import React, { useState, useEffect, useRef } from 'react';
import {
    Send,
    Paperclip,
    MoreVertical,
    ChevronLeft,
    Clock,
    Wallet,
    Smile,
    Image as ImageIcon,
    FileText,
    X,
    LogOut
} from 'lucide-react';
import { useNavigate, useParams, useBlocker } from 'react-router-dom';
import EndChatDialog from '../../../components/dialogs/EndChatDialog';

const ChatPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isEndChatDialogOpen, setIsEndChatDialogOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Namaste! I am Pandit Sharma. How can I guide you today?", sender: 'astrologer', time: '10:00 AM' },
        { id: 2, text: "I have some questions about my career path in the next 6 months.", sender: 'user', time: '10:01 AM' },
        { id: 3, text: "Sure, please provide your date, time and place of birth for a detailed analysis.", sender: 'astrologer', time: '10:02 AM' }
    ]);
    const scrollRef = useRef(null);
    const fileInputRef = useRef(null);

    // Block navigation
    const blocker = useBlocker(
        ({ currentValue, nextValue }) =>
            currentValue.pathname !== nextValue.pathname
    );

    // Prevent tab close / refresh
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ''; // Standard for modern browsers
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        if (blocker.state === "blocked") {
            setIsEndChatDialogOpen(true);
        }
    }, [blocker.state]);

    const emojis = ['😊', '🙏', '✨', '🌟', '🌙', '🔮', '🕉️', '💖', '👍', '🙌', '🔥', '🤔', '⏳', '📈'];

    // Mock data for the active astrologer
    const astrologer = {
        name: "Pandit Sharma",
        image: "https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg",
        specialties: "Vedic, Numerology",
        isOnline: true,
        rate: 20
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSend = (text = message) => {
        if (!text.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: text,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setMessage('');
        setShowEmojiPicker(false);

        // Mock response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "Thank you for the details. Let me analyze your chart. It will take a moment.",
                sender: 'astrologer',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
        }, 2000);
    };

    const onEmojiClick = (emoji) => {
        setMessage(prev => prev + emoji);
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Mock image sending
            const newMessage = {
                id: messages.length + 1,
                text: "📷 Image Sent",
                sender: 'user',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isImage: true,
                imageUrl: URL.createObjectURL(file)
            };
            setMessages([...messages, newMessage]);
        }
    };

    const confirmEndChat = () => {
        setIsEndChatDialogOpen(false);
        if (blocker.state === "blocked") {
            blocker.proceed();
        } else {
            navigate('/profile');
        }
    };

    const cancelEndChat = () => {
        setIsEndChatDialogOpen(false);
        if (blocker.state === "blocked") {
            blocker.reset();
        }
    };
    const handleEndChat = () => {
        setIsEndChatDialogOpen(true);
    };

    return (
        <div className="fixed inset-0 bg-background flex flex-col z-[150] overflow-hidden">
            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            {/* Header */}
            <header className="h-20 bg-card border-b border-border px-4 md:px-8 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <img src={astrologer.image} alt={astrologer.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card shadow-sm"></div>
                    </div>
                    <div>
                        <h2 className="font-heading font-bold text-foreground leading-tight">{astrologer.name}</h2>
                        <span className="text-xs text-muted-foreground">{astrologer.specialties}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-6">
                    {/* Timer & Balance */}
                    <div className="hidden md:flex flex-col items-end">
                        <div className="flex items-center gap-2 text-primary">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-bold tracking-wider">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Wallet className="w-3.5 h-3.5" />
                            <span>Wallet: ₹480</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleEndChat}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl text-xs font-bold transition-all"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">End Chat</span>
                        </button>
                        <button className="p-2.5 hover:bg-muted rounded-full transition-colors text-foreground/70 sm:hidden">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Chat Area */}
            <main
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth scrollbar-hide bg-muted/5 font-sans"
            >
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="text-center">
                        <span className="px-4 py-1.5 bg-card border border-border text-muted-foreground text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                            Session Started • {new Date().toLocaleDateString()}
                        </span>
                    </div>

                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                        >
                            <div className={`max-w-[85%] md:max-w-[70%] space-y-1`}>
                                <div className={`p-4 rounded-3xl shadow-sm ${msg.sender === 'user'
                                    ? 'bg-primary text-white rounded-tr-none'
                                    : 'bg-card text-foreground border border-border rounded-tl-none'
                                    }`}>
                                    {msg.isImage ? (
                                        <div className="space-y-2">
                                            <img src={msg.imageUrl} alt="sent" className="rounded-2xl max-h-60 w-full object-cover" />
                                            <p className="text-xs opacity-80">{msg.text}</p>
                                        </div>
                                    ) : (
                                        <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                                    )}
                                </div>
                                <div className={`text-[10px] text-muted-foreground font-semibold px-2 flex items-center gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.time}
                                    {msg.sender === 'user' && <span className="text-primary font-bold">✓✓</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Input Area */}
            <footer className="p-4 md:p-8 bg-card border-t border-border flex-shrink-0 relative">
                {/* Simple Emoji Picker */}
                {showEmojiPicker && (
                    <div className="absolute bottom-full left-4 md:left-8 mb-4 p-4 bg-card border border-border rounded-2xl shadow-2xl grid grid-cols-7 gap-2 animate-in slide-in-from-bottom-4">
                        {emojis.map(e => (
                            <button
                                key={e}
                                onClick={() => onEmojiClick(e)}
                                className="w-10 h-10 flex items-center justify-center text-xl hover:bg-muted rounded-xl transition-colors"
                            >
                                {e}
                            </button>
                        ))}
                    </div>
                )}

                <div className="max-w-4xl mx-auto">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="relative flex items-center gap-3"
                    >
                        <div className="flex items-center gap-1 bg-muted/40 rounded-2xl px-2">
                            <button
                                type="button"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                className={`p-2.5 rounded-full transition-colors ${showEmojiPicker ? 'bg-primary text-white' : 'text-muted-foreground hover:text-primary hover:bg-primary/10'}`}
                            >
                                <Smile className="w-6 h-6" />
                            </button>
                            <div className="w-px h-6 bg-border mx-1 hidden sm:block"></div>
                            <button
                                type="button"
                                onClick={handleImageClick}
                                className="p-2.5 hover:bg-primary/10 rounded-full transition-colors text-muted-foreground hover:text-primary hidden sm:block"
                            >
                                <ImageIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message..."
                                className="w-full bg-muted/50 border border-border rounded-2xl py-4 flex-1 pl-6 pr-14 text-sm md:text-base focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/60"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <button type="button" className="p-1.5 hover:bg-primary/10 rounded-full transition-colors text-muted-foreground hover:text-primary">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!message.trim()}
                            className="w-14 h-14 bg-primary text-white rounded-2xl shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale disabled:scale-100"
                        >
                            <Send className="w-6 h-6" />
                        </button>
                    </form>
                    <p className="text-[10px] text-center text-muted-foreground mt-4 font-bold uppercase tracking-widest opacity-60">
                        Secure & End-to-End Encrypted Session
                    </p>
                </div>
            </footer>

            <EndChatDialog
                isOpen={isEndChatDialogOpen}
                onClose={cancelEndChat}
                onConfirm={confirmEndChat}
            />
        </div>
    );
};

export default ChatPage;

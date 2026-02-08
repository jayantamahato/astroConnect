import { MessageCircle, Phone, ChevronRight, Lock, ShieldCheck } from 'lucide-react';

/**
 * ConnectCard - Sidebar card with chat/call buttons and pricing
 */
const ConnectCard = ({ pricing, isOnline = true }) => {
    return (
        <div className="bg-card rounded-2xl p-6 shadow-lg border border-primary/20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-heading font-bold">Connect Now</h2>
                {isOnline && (
                    <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full animate-pulse">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                        Available
                    </span>
                )}
            </div>

            <div className="space-y-4">
                {/* Chat Button */}
                <div>
                    <div className="flex justify-between items-center mb-2 text-sm">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                            <MessageCircle className="w-4 h-4" />
                            Chat
                        </div>
                        <div>
                            <span className="text-muted-foreground line-through text-xs mr-2">₹{pricing.chat.original}/min</span>
                            <span className="text-primary font-bold">₹{pricing.chat.discounted}<span className="text-xs font-normal text-muted-foreground">/min</span></span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2">
                        Start Chat
                        <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                </div>

                {/* Call Button */}
                <div className="pt-2">
                    <div className="flex justify-between items-center mb-2 text-sm">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                            <Phone className="w-4 h-4" />
                            Call
                        </div>
                        <div>
                            <span className="text-primary font-bold">₹{pricing.call.discounted}<span className="text-xs font-normal text-muted-foreground">/min</span></span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-card border-2 border-primary/20 hover:border-primary/50 text-foreground font-bold rounded-xl transition-all hover:bg-muted/50 flex items-center justify-center gap-2">
                        Start Call
                    </button>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                <div className="flex flex-col items-center text-center gap-1">
                    <Lock className="w-5 h-5 text-muted-foreground/70" />
                    <span className="text-[10px] text-muted-foreground font-medium">100% Private & Confidential</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-muted-foreground/70" />
                    <span className="text-[10px] text-muted-foreground font-medium">Verified Astrologer</span>
                </div>
            </div>
        </div>
    );
};

export default ConnectCard;

import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Star } from "lucide-react";

const SidebarWidgets = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8">
            {/* Kundali Widget */}
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground space-y-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
                    <Star className="w-24 h-24 fill-current" />
                </div>
                <div className="space-y-2 relative z-10">
                    <User className="w-12 h-12 mb-4" />
                    <h3 className="text-3xl font-heading font-normal">Free Kundali Generation</h3>
                    <p className="text-primary-foreground/80 text-lg leading-snug">
                        Unlock the secrets of your birth chart. Get personalized planetary insights and dosha analysis instantly.
                    </p>
                </div>
                <button
                    onClick={() => navigate('/services/kundali')}
                    className="w-full bg-background text-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all group/btn"
                >
                    Enter Details
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Lucky Factors Widget */}
            <div className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-lg">
                <h3 className="text-xl font-bold border-b border-border pb-4">Lucky Factors</h3>
                <div className="space-y-4">
                    {[
                        { label: "Lucky Number", value: "7", badge: true },
                        { label: "Lucky Color", value: "Gold", dot: "bg-yellow-500" },
                        { label: "Lucky Stone", value: "Ruby" },
                    ].map((factor) => (
                        <div key={factor.label} className="flex justify-between items-center py-1">
                            <span className="text-muted-foreground">{factor.label}</span>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-foreground">{factor.value}</span>
                                {factor.badge && (
                                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                                        {factor.value}
                                    </div>
                                )}
                                {factor.dot && <div className={`w-3 h-3 rounded-full ${factor.dot}`} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SidebarWidgets;

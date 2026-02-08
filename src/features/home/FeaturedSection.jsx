import { useNavigate } from "react-router-dom";
import { Calendar, UserPlus, Sun } from "lucide-react";
import relationshipBg from "../../assets/images/relationShipBg.png";

export function FeaturedSection() {
    const navigate = useNavigate();

    return (
        <section className="py-12 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Today's Panchang - Takes up 1 column on large screens */}
                <div className="bg-card p-8 rounded-3xl flex flex-col justify-between lg:col-span-1 shadow-md shadow-zinc-200/50 dark:shadow-black/20 border border-border h-full transition-colors duration-300">

                    <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Calendar className="text-secondary w-6 h-6" />
                                <h2 className="text-2xl font-heading font-normal text-card-foreground">
                                    Today's Panchang
                                </h2>
                            </div>
                            <span className="bg-muted text-primary px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider">
                                New Delhi
                            </span>
                        </div>

                        {/* Info Rows */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between text-base border-b border-border pb-4">
                                <span className="text-muted-foreground font-medium">Tithi</span>
                                <span className="text-card-foreground font-medium">Shukla Paksha</span>
                            </div>
                            <div className="flex items-center justify-between text-base border-b border-border pb-4">
                                <span className="text-muted-foreground font-medium">Nakshatra</span>
                                <span className="text-card-foreground font-medium">Rohini</span>
                            </div>
                            <div className="flex items-center justify-between text-base border-b border-border pb-4">
                                <span className="text-muted-foreground font-medium">Yog</span>
                                <span className="text-card-foreground font-medium">Sadhya</span>
                            </div>
                        </div>

                        {/* Sun Data */}
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 text-secondary">
                                <Sun className="w-5 h-5" />
                                <span className="text-sm font-medium text-muted-foreground">06:14 AM</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <div className="relative">
                                    <Sun className="w-5 h-5" />
                                    <div className="absolute inset-0 bg-current opacity-20 rounded-full" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">06:32 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={() => navigate("/panchang")}
                        className="w-full mt-8 py-3.5 rounded-xl bg-transparent border border-border hover:bg-muted text-muted-foreground hover:text-foreground font-bold text-xs uppercase tracking-widest transition-all"
                    >
                        View Full Panchang
                    </button>
                </div>

                {/* Compatibility Banner - Takes up 2 columns on large screens */}
                <div className="relative rounded-3xl overflow-hidden group lg:col-span-2 min-h-[360px] border border-border shadow-md transition-colors duration-300">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={relationshipBg}
                            alt="Relationship Compatibility"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent dark:from-black/90 dark:via-black/50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center items-start space-y-6">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-wide">
                            Featured
                        </span>

                        <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-tight max-w-xl drop-shadow-lg">
                            Understand Your <br />
                            Relationship Compatibility
                        </h2>

                        <p className="text-white/90 dark:text-zinc-300 max-w-lg text-sm md:text-base leading-relaxed drop-shadow-md">
                            Get a detailed matchmaking report and consultation to ensure a harmonious life with your partner.
                        </p>

                        <button
                            onClick={() => navigate("/compatibility")}
                            className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors uppercase text-xs tracking-widest shadow-lg"
                        >
                            Check Compatibility
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;

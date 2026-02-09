import React from 'react';
import { Heart, Briefcase, PlusCircle, Lightbulb } from "lucide-react";

import horoscopeBg from '../../../assets/images/horoscope-bg.png';

const InsightsCard = ({ sign, timeframe }) => {
    return (
        <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

            {/* Image/Header Section */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                    src={horoscopeBg}
                    alt="Mystical background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-8 left-8 md:left-12 space-y-2">
                    <h2 className="text-4xl md:text-6xl font-heading text-secondary drop-shadow-lg">
                        {timeframe}'s Insights
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium">
                        October 24, 2023 • {sign} Energy
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 space-y-12 relative">
                {/* Main Text */}
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed italic border-l-4 border-primary/30 pl-6">
                    "The celestial alignment today suggests a powerful surge in your creative energy. You might find yourself drawn to new artistic pursuits or finding innovative solutions to long-standing problems. Trust your intuition and let your natural leadership shine as the sun transits through your fourth house of home and family."
                </p>

                {/* Stat Bars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Love", value: 85, icon: Heart, color: "bg-red-500" },
                        { label: "Career", value: 70, icon: Briefcase, color: "bg-blue-500" },
                        { label: "Health", value: 92, icon: PlusCircle, color: "bg-green-500" },
                    ].map((stat) => (
                        <div key={stat.label} className="bg-muted/50 p-6 rounded-2xl border border-border space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <stat.icon className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-sm tracking-widest uppercase">{stat.label}</span>
                                </div>
                                <span className="font-bold text-primary">{stat.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${stat.color} transition-all duration-1000`}
                                    style={{ width: `${stat.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="border-border" />

                {/* Detailed Forecast */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-secondary">
                        <Lightbulb className="w-6 h-6 fill-current" />
                        <h3 className="text-2xl font-bold">Detailed Forecast</h3>
                    </div>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            Your social life is buzzing with potential today. If you've been considering reaching out to an old contact, the planetary vibes are perfect for reconciliation or new beginnings. Ensure you're listening as much as you're speaking.
                        </p>
                        <p>
                            Financially, a cautious approach is recommended. While your confidence is high, avoid impulsive major purchases until later in the week when Mercury provides clearer communication in your financial sector.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsCard;

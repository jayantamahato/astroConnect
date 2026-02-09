import React, { useState } from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import SeoMeta from "../../../components/seo/SeoMeta";
import { Star, MessageCircle } from "lucide-react";
import SignSelector from '../components/SignSelector';
import TimeframeSelector from '../components/TimeframeSelector';
import InsightsCard from '../components/InsightsCard';
import SidebarWidgets from '../components/SidebarWidgets';
import ConsultAstrologerDrawer from '../../../components/drawers/ConsultAstrologerDrawer';

const HoroscopePage = () => {
    const [selectedSign, setSelectedSign] = useState('Leo');
    const [selectedTimeframe, setSelectedTimeframe] = useState('Today');
    const [isAstroDrawerOpen, setIsAstroDrawerOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <SeoMeta
                title="Daily Horoscope | AstroConnect"
                description="Get your detailed daily horoscope, lucky factors, and live guidance. Discover what the stars have in store for you today."
                keywords="horoscope, daily horoscope, astrology predictions, zodiac signs, leo horoscope"
            />

            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="space-y-8 mt-20">
                        <SignSelector selectedSign={selectedSign} onSelect={setSelectedSign} />
                    </div>

                    {/* Navigation and Action Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border/50 pb-8">
                        <TimeframeSelector selectedTimeframe={selectedTimeframe} onSelect={setSelectedTimeframe} />

                        <button className="relative group overflow-hidden bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,140,0,0.3)]">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <Star className="w-5 h-5 fill-current animate-pulse" />
                            <span className="relative z-10">Horoscope 2026</span>
                        </button>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Insights Content */}
                        <div className="lg:col-span-8">
                            <InsightsCard sign={selectedSign} timeframe={selectedTimeframe} />
                        </div>

                        {/* Sidebar Widgets */}
                        <div className="lg:col-span-4 space-y-10">
                            <SidebarWidgets />
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating Consult Button */}
            <button
                onClick={() => setIsAstroDrawerOpen(true)}
                className="fixed bottom-12 right-12 z-50 bg-gradient-to-r from-orange-600 to-primary text-white px-8 py-5 rounded-full font-bold flex items-center gap-3 shadow-[0_15px_40px_rgba(255,140,0,0.4)] hover:scale-105 active:scale-95 transition-all group"
            >
                <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
                CONSULT ASTROLOGER
            </button>

            <ConsultAstrologerDrawer
                isOpen={isAstroDrawerOpen}
                onClose={() => setIsAstroDrawerOpen(false)}
            />

            <Footer />
        </div>
    );
};

export default HoroscopePage;

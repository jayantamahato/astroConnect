import React, { useState } from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import SeoMeta from "../../../components/seo/SeoMeta";
import { User, Compass, Sparkles, MessageCircle, Settings } from "lucide-react";
import ConsultAstrologerDrawer from '../../../components/drawers/ConsultAstrologerDrawer';
import KundaliTab from '../components/KundaliTab';
import KPTab from '../components/KPTab';


const TABS = ["Basic", "Kundali", "KP", "Ashtakvarga", "Charts", "Dasha", "Free Report"];

const InfoRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-border/40 last:border-0 hover:bg-muted/30 px-2 rounded-lg transition-colors">
        <span className="text-muted-foreground font-medium">{label}</span>
        <span className="text-foreground font-bold text-right">{value}</span>
    </div>
);

const DetailCard = ({ title, icon: Icon, children }) => (
    <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group">
        <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 text-primary">
                <Icon className="w-6 h-6" />
                <h3 className="text-2xl font-heading text-primary">{title}</h3>
            </div>
            <div className="space-y-1">
                {children}
            </div>
        </div>
    </div>
);

const KundaliResultPage = () => {
    const [activeTab, setActiveTab] = useState("Basic");
    const [isAstroDrawerOpen, setIsAstroDrawerOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <SeoMeta
                title="Your Personalized Kundali Report | Celestial Insights"
                description="View your detailed Vedic astrology report, including Avakhada details, Panchang, and planetary positions."
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-12">
                {/* Heading Section */}
                <div className="text-center space-y-2">
                    <h1 className="text-5xl md:text-6xl font-heading text-primary drop-shadow-sm">
                        Celestial Insights
                    </h1>
                    <p className="text-muted-foreground font-bold tracking-[0.2em] uppercase text-sm">
                        YOUR PERSONALIZED VEDIC REPORT
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-2 flex items-center justify-between shadow-lg max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-1">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === tab
                                    ? "bg-primary text-white shadow-[0_5px_15px_rgba(255,140,0,0.3)]"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button className="p-3 hover:bg-muted rounded-xl transition-colors shrink-0 mx-2">
                        <Settings className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    {activeTab === "Basic" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-in fade-in duration-500">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <DetailCard title="Basic Details" icon={User}>
                                    <InfoRow label="Name" value="Jayanta" />
                                    <InfoRow label="Date" value="25/01/2000" />
                                    <InfoRow label="Time" value="02:52 AM" />
                                    <InfoRow label="Place" value="Kolkata, WB, India" />
                                    <InfoRow label="Latitude" value="22.57" />
                                    <InfoRow label="Longitude" value="88.36" />
                                    <InfoRow label="Timezone" value="GMT+5.5" />
                                    <InfoRow label="Sunrise" value="6:18:1" />
                                    <InfoRow label="Sunset" value="17:19:33" />
                                    <InfoRow label="Ayanamsha" value="23.85799" />
                                </DetailCard>

                                <DetailCard title="Panchang Details" icon={Sparkles}>
                                    <InfoRow label="Tithi" value="KrishnaPanchami" />
                                    <InfoRow label="Karan" value="Kaulav" />
                                </DetailCard>
                            </div>

                            {/* Right Column */}
                            <DetailCard title="Avakhada Details" icon={Compass}>
                                <InfoRow label="Varna" value="Kshattriya" />
                                <InfoRow label="Vashya" value="Vanacara" />
                                <InfoRow label="Yoni" value="Mesha" />
                                <InfoRow label="Gan" value="Manav" />
                                <InfoRow label="Nadi" value="Adhya" />
                                <InfoRow label="Sign" value="Leo" />
                                <InfoRow label="Sign Lord" value="Sun" />
                                <InfoRow label="Nakshatra-Charan" value="Uttara Phalguni" />
                                <InfoRow label="Yog" value="Atiganda" />
                                <InfoRow label="Karan" value="Kaulav" />
                                <InfoRow label="Tithi" value="KrishnaPanchami" />
                                <InfoRow label="Yunja" value="Antya" />
                                <InfoRow label="Tatva" value="Fire" />
                            </DetailCard>
                        </div>
                    )}

                    {activeTab === "Kundali" && <KundaliTab />}
                    {activeTab === "KP" && <KPTab />}

                    {activeTab !== "Basic" && activeTab !== "Kundali" && activeTab !== "KP" && (
                        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 opacity-50">
                            <div className="p-6 bg-muted rounded-full">
                                <Sparkles className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold">Coming Soon</h3>
                            <p className="text-muted-foreground max-w-sm">
                                We are working hard to bring detailed {activeTab} reports to your personalized celestial insights.
                            </p>
                        </div>
                    )}
                </div>

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
            </main>

            <Footer />
        </div>
    );
};

export default KundaliResultPage;

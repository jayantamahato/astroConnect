import React from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import SeoMeta from "../../../components/seo/SeoMeta";
import KundaliForm from '../components/KundaliForm';
import KundaliHero from '../components/KundaliHero';

const KundaliPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <SeoMeta
                title="Free Kundali & Janam Kundali Online | AstroConnect"
                description="Generate your free Janam Kundali online with AstroConnect. Get detailed insights into your planet positions, vimshottari dasha, and future predictions."
                keywords="free kundali, janam kundali, online kundali matching, astrology report, birth chart"
            />

            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side: Form */}
                    <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
                        <KundaliForm />
                    </div>

                    {/* Right Side: Hero Content */}
                    <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <KundaliHero />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default KundaliPage;

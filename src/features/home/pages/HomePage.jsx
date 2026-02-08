import Navbar from "../../../components/layout/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HoroscopeSection from "../components/HoroscopeSection";
import FeaturedSection from "../components/FeaturedSection";
import AstrologerList from "../components/AstrologerList";
import Footer from "../../../components/layout/Footer";
import SeoMeta from "../../../components/seo/SeoMeta";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <SeoMeta
                title="Top Astrologer Online | Vedic, Tarot, Numerology | AstroConnect"
                description="Consult India's top verified astrologers for detailed horoscope analysis, Kundali matching, and life predictions. Get instant remedies and solutions."
                keywords="Top Astrologer, Vedic Astrology, Online Puja, Kundali Matching, Daily Horoscope"
            />
            <Navbar />
            <main>
                <HeroSection />
                <div className="relative z-20 space-y-24 pb-24">
                    <ServicesSection />
                    <HoroscopeSection />
                    <FeaturedSection />
                    <AstrologerList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

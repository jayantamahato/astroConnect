import Navbar from "../components/layout/Navbar";
import HeroSection from "../features/home/HeroSection";
import ServicesSection from "../features/home/ServicesSection";
import HoroscopeSection from "../features/home/HoroscopeSection";
import FeaturedSection from "../features/home/FeaturedSection";
import AstrologerList from "../features/home/AstrologerList";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
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

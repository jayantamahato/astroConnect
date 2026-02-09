import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { useConnection } from '../../../components/ConnectionProvider';
import {
    AstrologerProfileHeader,
    AboutSection,
    PhotosGallery,
    ReviewsSection,
    ConnectCard,
    OfferCard
} from '../components';

const AstrologerProfile = () => {
    const navigate = useNavigate();
    const { startChat, startCall } = useConnection();

    // ... same astrologer data ...
    const astrologer = {
        id: 1,
        name: "Pandit Sharma",
        specialties: "Vedic Astrology, Numerology, Vastu, Face Reading",
        languages: ["English", "Hindi", "Sanskrit"],
        experience: 15,
        rating: 4.9,
        reviews: 2405,
        consultations: "25k+",
        isVerified: true,
        isOnline: true,
        isBusy: false,
        image: "https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg",
        about: {
            text: "Namaste! I am Pandit Sharma, a certified Vedic Astrologer with over 15 years of experience in guiding people through the celestial map of their lives.",
            expertise: ["Love & Relationship", "Career & Business"]
        },
        pricing: {
            chat: { original: 30, discounted: 20 },
            call: { original: 45, discounted: 30 }
        },
        photos: [],
        reviewsList: []
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <nav className="flex text-sm text-muted-foreground mb-6">
                    <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/all-astrologers')}>Astrologers</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground font-medium">{astrologer.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <AstrologerProfileHeader astrologer={astrologer} />
                        <AboutSection about={astrologer.about} />
                        <PhotosGallery photos={astrologer.photos} />
                        <ReviewsSection
                            reviews={astrologer.reviewsList}
                            rating={astrologer.rating}
                            totalReviews={astrologer.reviews}
                        />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <ConnectCard
                                pricing={astrologer.pricing}
                                isOnline={astrologer.isOnline}
                                isBusy={astrologer.isBusy}
                                onChat={() => startChat(astrologer)}
                                onCall={() => startCall(astrologer)}
                            />
                            <OfferCard title="Get 50% OFF on your first consultation!" code="FIRST50" />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AstrologerProfile;

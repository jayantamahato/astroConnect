import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import ChatEstablishmentDialog from '../../../components/dialogs/ChatEstablishmentDialog';
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
    const [isChatDialogOpen, setIsChatDialogOpen] = useState(false);
    const userBalance = 500; // Mock user balance

    // Mock Data
    const astrologer = {
        name: "Pandit Sharma",
        specialties: "Vedic Astrology, Numerology, Vastu, Face Reading",
        languages: ["English", "Hindi", "Sanskrit"],
        experience: 15,
        rating: 4.9,
        reviews: 2405,
        consultations: "25k+",
        isVerified: true,
        isOnline: true,
        image: "https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg",
        about: {
            text: "Namaste! I am Pandit Sharma, a certified Vedic Astrologer with over 15 years of experience in guiding people through the celestial map of their lives. My journey began in Varanasi, where I studied ancient scriptures and astrology under the guidance of renowned gurus.\n\nI specialize in relationship counseling, career guidance, and remedial measures using Gemstones and Mantras. My approach is practical and modern, yet deeply rooted in traditional wisdom. I believe that astrology is not just about predicting the future, but about empowering you to create it.",
            expertise: ["Love & Relationship", "Career & Business", "Marriage Matching", "Health Issues", "Legal Matters", "Gemstone Consultation"]
        },
        pricing: {
            chat: { original: 30, discounted: 20 },
            call: { original: 45, discounted: 30 }
        },
        photos: [
            "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150519396.jpg",
            "https://img.freepik.com/premium-photo/spiritual-background-with-candles_1029471-558.jpg"
        ],
        reviewsList: [
            {
                id: 1,
                name: "Sneha Gupta",
                initial: "S",
                daysAgo: "2 days ago",
                rating: 5,
                comment: "Pandit Ji is amazing! He accurately predicted my job change and gave me simple remedies. I felt so much positive energy after talking to him. Highly recommended!"
            },
            {
                id: 2,
                name: "Rahul Verma",
                initial: "R",
                daysAgo: "1 week ago",
                rating: 5,
                comment: "Very knowledgeable person. He explained the planetary positions clearly. The consultation was a bit short for the price, but the advice was solid."
            },
            {
                id: 3,
                name: "Anjali K.",
                initial: "A",
                daysAgo: "2 weeks ago",
                rating: 5,
                comment: "My marriage was delayed for 3 years. Pandit Sharma suggested a specific pooja and within 4 months things started moving. Thank you guruji!"
            }
        ]
    };

    const handleStartChat = () => {
        setIsChatDialogOpen(true);
    };

    const handleConnectChat = () => {
        setIsChatDialogOpen(false);
        navigate(`/chat/1`); // Redirect to chat page
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex text-sm text-muted-foreground mb-6">
                    <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/all-astrologers')}>Astrologers</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground font-medium">{astrologer.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
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

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <ConnectCard
                                pricing={astrologer.pricing}
                                isOnline={astrologer.isOnline}
                                onChat={handleStartChat}
                            />
                            <OfferCard
                                title="Get 50% OFF on your first consultation!"
                                code="FIRST50"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <ChatEstablishmentDialog
                isOpen={isChatDialogOpen}
                onClose={() => setIsChatDialogOpen(false)}
                astrologer={astrologer}
                userBalance={userBalance}
                onConnect={handleConnectChat}
            />
        </div>
    );
};

export default AstrologerProfile;

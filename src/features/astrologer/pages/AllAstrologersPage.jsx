import { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import SeoMeta from '../../../components/seo/SeoMeta';
import { useConnection } from '../../../components/ConnectionProvider';
import {
    AstrologerFilters,
    PromotionalBanner,
    AstrologerGrid
} from '../components';

import { ALL_ASTROLOGERS as mockAstrologers } from '../../../constants/astrologers';

const AllAstrologersPage = () => {
    const { startChat, startCall } = useConnection();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [sortBy] = useState('Recommended');
    const [priceRange, setPriceRange] = useState(500);
    const [experienceRange, setExperienceRange] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);

    const handleChatClick = (astro) => startChat(astro);
    const handleCallClick = (astro) => startCall(astro);

    const sortedFilteredAstrologers = mockAstrologers
        .filter(astro => {
            const matchesSearch = astro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                astro.skills.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = selectedFilter === 'All' || astro.skills.includes(selectedFilter);
            const matchesStatus = !isAvailable || astro.status === 'online';
            const matchesExperience = parseInt(astro.experience) >= experienceRange;
            return matchesSearch && matchesFilter && matchesStatus && matchesExperience;
        })
        .sort((a, b) => {
            if (sortBy === 'Price: Low to High') {
                return parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', ''));
            }
            if (sortBy === 'Price: High to Low') {
                return parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', ''));
            }
            if (sortBy === 'Rating: High to Low') {
                return parseFloat(b.rating) - parseFloat(a.rating);
            }
            if (sortBy === 'Experience: High to Low') {
                return parseInt(b.experience) - parseInt(a.experience);
            }
            return 0;
        });

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedFilter('All');
        setIsAvailable(false);
        setExperienceRange(0);
        setPriceRange(500);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <SeoMeta
                title="Chat with Best Astrologers | 24/7 Live Consultation | AstroConnect"
                description="Connect with expert astrologers instantly. Filter by expertise like Vedic, Tarot, Vastu. Compare ratings and get personalized guidance."
                keywords="astrology chat, talk to astrologer, online consultation, vedic astrologer, live astrology"
            />
            <Navbar />

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <AstrologerFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                        isAvailable={isAvailable}
                        setIsAvailable={setIsAvailable}
                        experienceRange={experienceRange}
                        setExperienceRange={setExperienceRange}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        onReset={handleResetFilters}
                    />

                    <main className="flex-1 min-w-0">
                        <PromotionalBanner />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pt-2">
                            <div>
                                <h1 className="text-2xl font-heading font-bold text-foreground">Talk to Astrologer</h1>
                                <p className="text-sm text-muted-foreground font-medium mt-1">
                                    Found <span className="text-foreground font-bold">{sortedFilteredAstrologers.length}</span> expert astrologers online
                                </p>
                            </div>
                        </div>

                        <AstrologerGrid
                            astrologers={sortedFilteredAstrologers}
                            onClearFilters={handleResetFilters}
                            onChat={handleChatClick}
                            onCall={handleCallClick}
                        />
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AllAstrologersPage;

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { LiveStreamCard, CategoryTabs, LiveHeader } from '../components';

const LiveListingPage = () => {
    const categories = ["All", "Love", "Career", "Tarot", "Vedic"];
    const [activeCategory, setActiveCategory] = useState("All");

    const liveStreams = [
        {
            id: 1,
            name: "Astro Priya",
            topic: "Live Tarot Reading for Love & Career",
            viewers: 1205,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
            category: "Tarot",
            isLive: true
        },
        {
            id: 2,
            name: "Pandit Rahul",
            topic: "Daily Horoscope & Vastu Tips",
            viewers: 850,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
            category: "Vedic",
            isLive: true
        },
        {
            id: 3,
            name: "Mystic Mira",
            topic: "Crystal Healing Session",
            viewers: 620,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
            category: "Love",
            isLive: true
        },
        {
            id: 4,
            name: "Star Gazer",
            topic: "Moon Phase Analysis",
            viewers: 410,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
            category: "Career",
            isLive: true
        },
        {
            id: 5,
            name: "Tarot Queen",
            topic: "Instant Yes/No Answers",
            viewers: 2100,
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",
            category: "Tarot",
            isLive: true
        },
        {
            id: 6,
            name: "Guru Dev",
            topic: "Meditation & Chant",
            viewers: 150,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
            category: "Vedic",
            isLive: true
        }
    ];

    const filteredStreams = activeCategory === "All"
        ? liveStreams
        : liveStreams.filter(stream => stream.category === activeCategory);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <LiveHeader />

                <CategoryTabs
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStreams.map((stream) => (
                        <LiveStreamCard key={stream.id} stream={stream} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LiveListingPage;

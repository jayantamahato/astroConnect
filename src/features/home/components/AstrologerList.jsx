import { useNavigate } from "react-router-dom";
import { Star, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { AstrologerCard } from "../../astrologer/components/AstrologerCard";

const EXPERT_ASTROLOGERS = [
    {
        name: "Acharya V...",
        experience: "Exp: 12 Years",
        skills: "Vedic, Numerology",
        rating: "4.9",
        price: "\u20B925/min",
        image: "https://i.pravatar.cc/150?u=Acharya",
        status: "online",
    },
    {
        name: "Dr. Sharma",
        experience: "Exp: 20 Years",
        skills: "Vedic, KP System",
        rating: "4.8",
        price: "\u20B940/min",
        image: "https://i.pravatar.cc/150?u=Sharma",
        status: "online",
    },
    {
        name: "Tarot Priya",
        experience: "Exp: 8 Years",
        skills: "Tarot, Psychic",
        rating: "5.0",
        price: "\u20B930/min",
        image: "https://i.pravatar.cc/150?u=Priya",
        status: "busy",
    },
    {
        name: "Pandit Ravi",
        experience: "Exp: 15 Years",
        skills: "Vedic, Face Reading",
        rating: "4.7",
        price: "\u20B920/min",
        image: "https://i.pravatar.cc/150?u=Ravi",
        status: "online",
    },
];

export function AstrologerList() {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-background relative z-10 px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Header & Filters */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-heading font-normal ">
                        Expert Astrologers
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                        Connect with verified experts instantly
                    </p>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto justify-center md:justify-end">
                    <button
                        onClick={() => navigate('/all-astrologers')}
                        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center gap-2 group"
                    >
                        View All Astrologers
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EXPERT_ASTROLOGERS.map((astro, index) => (
                    <AstrologerCard key={index} astro={astro} index={index} />
                ))}
            </div>
        </section>
    );
};

export default AstrologerList;

import { useNavigate } from "react-router-dom";
import { Star, MessageCircle, Phone } from "lucide-react";

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
                    <h2 className="text-4xl md:text-5xl font-heading font-normal text-zinc-900 dark:text-white">
                        Expert Astrologers
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                        Connect with verified experts instantly
                    </p>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto justify-center md:justify-end">
                    {["All", "Vedic", "Tarot", "Numerology"].map((filter) => (
                        <button
                            key={filter}
                            className={`px-5 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap border ${filter === "All"
                                ? "bg-primary border-primary text-black font-bold"
                                : "bg-white dark:bg-[#27221b] border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EXPERT_ASTROLOGERS.map((astro, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#27221b] border border-zinc-200 dark:border-white/5 p-5 rounded-2xl flex flex-col gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all group relative cursor-pointer"
                    >
                        <div className="flex gap-4">
                            {/* Avatar */}
                            <div className="relative">
                                <img
                                    src={astro.image}
                                    alt={astro.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary p-0.5"
                                />
                                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${astro.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white line-clamp-1">
                                        {astro.name}
                                    </h3>
                                    <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                        {astro.rating} <Star className="w-2 h-2 fill-current" />
                                    </span>
                                </div>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400 leading-tight">
                                    {astro.skills}
                                </span>
                                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                    {astro.experience}
                                </span>
                            </div>
                        </div>

                        {/* Actions Footer */}
                        <div className="flex items-center justify-between pt-2 mt-auto">
                            <span className="text-zinc-900 dark:text-white font-bold text-lg">
                                {astro.price}
                            </span>

                            {astro.status === 'online' ? (
                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                    <button className="px-6 py-2 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-black transition-colors">
                                        Chat
                                    </button>
                                </div>
                            ) : (
                                <button className="px-6 py-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-400 dark:text-zinc-500 font-medium text-sm cursor-not-allowed">
                                    Busy
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AstrologerList;

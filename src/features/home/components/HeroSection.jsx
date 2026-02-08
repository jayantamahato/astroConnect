import { Search } from "lucide-react";
import bgImage from "../../../assets/images/bg.png";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center pt-20 pb-32 px-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-50"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            <div className="relative z-10 max-w-4xl w-full space-y-6 animate-fade-in-up flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-heading font-normal tracking-wide text-white drop-shadow-md">
                    Find Clarity in Your <br />
                    Future
                </h1>

                <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-sans mt-4">
                    Consult India's Top Astrologers for Vedic Astrology, Tarot, and
                    Numerology. Get Instant guidance today.
                </p>

                {/* Search Bar Container */}
                <div className="w-full max-w-2xl mt-8 relative px-2 sm:px-0">
                    <div className="relative flex items-center w-full h-14 md:h-16 rounded-full bg-white/90 dark:bg-[#1E1E1E]/80 border border-zinc-200 dark:border-white/10 backdrop-blur-md shadow-2xl transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50">
                        <div className="pl-6 pr-2 text-zinc-400 dark:text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for Astrologer, Skill, or Language..."
                            className="flex-1 h-full bg-transparent border-none outline-none text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-gray-500 px-2 text-sm md:text-base w-full"
                        />
                        <div className="p-1.5 md:p-2">
                            <button className="h-full px-6 md:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold rounded-full transition-transform active:scale-95 text-sm md:text-base flex items-center justify-center shadow-lg shadow-primary/20">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Tags */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
                    <span className="text-muted-foreground text-sm font-medium">Popular:</span>
                    {["Tarot", "Vedic", "Numerology", "Love"].map((tag) => (
                        <button
                            key={tag}
                            className="px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-xs md:text-sm hover:text-primary hover:border-primary/50 transition-all duration-200"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

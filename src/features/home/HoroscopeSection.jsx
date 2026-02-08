import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Flame, Droplet, Sun, Moon, Leaf, Cloud, Scale, VenetianMask, Zap, Anchor, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Using Lucide icons as placeholders for Zodiac symbols
const DAILY_HOROSCOPES = [
    { name: "Aries", dates: "Mar 21 - Apr 19", icon: Flame },
    { name: "Taurus", dates: "Apr 20 - May 20", icon: Leaf },
    { name: "Gemini", dates: "May 21 - Jun 20", icon: VenetianMask },
    { name: "Cancer", dates: "Jun 21 - Jul 22", icon: Droplet },
    { name: "Leo", dates: "Jul 23 - Aug 22", icon: Sun },
    { name: "Virgo", dates: "Aug 23 - Sep 22", icon: Moon },
    { name: "Libra", dates: "Sep 23 - Oct 22", icon: Scale },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", icon: Zap },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", icon: ArrowRight }, // Placeholder
    { name: "Capricorn", dates: "Dec 22 - Jan 19", icon: Anchor },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", icon: Cloud },
    { name: "Pisces", dates: "Feb 19 - Mar 20", icon: Droplet },
];

export function HoroscopeSection() {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Scroll by card width (160px) + gap (16px) * 2 roughly
            const scrollAmount = direction === "left" ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-normal drop-shadow-sm">
                            Daily Horoscope
                        </h2>
                        <p className="text-muted-foreground mt-2 text-lg">
                            What do the stars say about your day?
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/horoscope")}
                        className="text-primary hover:text-primary/80 font-bold text-sm tracking-wider flex items-center gap-2 group transition-colors uppercase"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel">

                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-card hover:bg-primary text-card-foreground hover:text-white p-4 rounded-full border border-border shadow-xl transition-all hover:scale-110 active:scale-95"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-card hover:bg-primary text-card-foreground hover:text-white p-4 rounded-full border border-border shadow-xl transition-all hover:scale-110 active:scale-95"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scrollable List */}
                    <div
                        ref={scrollRef}
                        className="relative w-full overflow-x-auto pb-12 pt-8 px-4 md:px-12 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex gap-6 scroll-smooth snap-x snap-mandatory"
                    >
                        {DAILY_HOROSCOPES.map((sign) => (
                            <motion.div
                                key={sign.name}
                                whileHover={{ y: -10 }}
                                className="snap-center min-w-[170px] md:min-w-[190px] h-60 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-[0_0_30px_rgba(255,140,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-5 group relative shadow-sm"
                            >
                                {/* Icon Circle */}
                                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <sign.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                </div>

                                <div className="text-center space-y-1.5">
                                    <h3 className="text-2xl font-heading font-normal text-card-foreground group-hover:text-secondary transition-colors">
                                        {sign.name}
                                    </h3>
                                    <span className="text-xs font-medium text-muted-foreground block uppercase tracking-wide">
                                        {sign.dates}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoroscopeSection;

import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="bg-white dark:bg-[#12100E] border-t border-zinc-100 dark:border-white/5 pt-20 pb-10 relative z-10 text-zinc-600 dark:text-zinc-400 w-full font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-primary text-3xl">🔆</span>
                            <span className="text-2xl font-heading font-normal text-zinc-900 dark:text-white">
                                AstroConnect
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Connecting you with the cosmos. Get insights into your future using Vedic astrology, Tarot, and Numerology from India's most trusted experts.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <button key={idx} className="p-2 rounded-full bg-zinc-100 dark:bg-[#1e1a15] hover:bg-primary text-zinc-500 hover:text-black transition-all border border-zinc-200 dark:border-white/5 shadow-sm">
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-xl font-heading font-normal text-zinc-900 dark:text-white mb-8">
                            Services
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {['Chat with Astrologer', 'Talk to Astrologer', 'Book a Pooja', 'Love Compatibility'].map(item => (
                                <li key={item} className="hover:text-primary transition-colors cursor-pointer w-fit">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-heading font-normal text-zinc-900 dark:text-white mb-8">
                            Resources
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {['Daily Horoscope', 'Kundli Matching', 'Panchang', 'Astrology Blog'].map(item => (
                                <li key={item} className="hover:text-primary transition-colors cursor-pointer w-fit">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-heading font-normal text-zinc-900 dark:text-white mb-8">
                            Company
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(item => (
                                <li key={item} className="hover:text-primary transition-colors cursor-pointer w-fit">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-200 dark:border-white/5 pt-8 text-center text-xs text-zinc-500 dark:text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} AstroConnect. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

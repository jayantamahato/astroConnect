import { Flame } from 'lucide-react';

/**
 * PromotionalBanner - Promotional banner for the astrologer listing page
 */
const PromotionalBanner = ({ title, subtitle, buttonText, onButtonClick }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-6 md:p-8 mb-8 relative overflow-hidden shadow-xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-wider uppercase">
                        <Flame className="w-3 h-3 text-yellow-500" />
                        Limited Offer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-white leading-tight">
                        {title || (
                            <>
                                First Chat <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Free</span> with Top <br /> Astrologers!
                            </>
                        )}
                    </h2>
                    <p className="text-indigo-100/80 text-sm max-w-lg">
                        {subtitle || "Get instant guidance on career, love, and health. 100% private & secure consultation."}
                    </p>
                </div>
                <button
                    onClick={onButtonClick}
                    className="flex-shrink-0 px-8 py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:scale-105 active:scale-95"
                >
                    {buttonText || "Claim Free Chat"}
                </button>
            </div>
        </div>
    );
};

export default PromotionalBanner;

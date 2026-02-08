/**
 * OfferCard - Promotional offer card
 */
const OfferCard = ({ title, description, code, onClaim }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold mb-3 border border-white/10">
                First Session Offer
            </span>

            <h3 className="text-xl font-bold mb-2">{title || "Get 50% OFF on your first consultation!"}</h3>
            <p className="text-indigo-100 text-sm mb-4 opacity-90">Use code: {code || "FIRST50"}</p>

            <button
                onClick={onClaim}
                className="text-sm font-semibold underline decoration-2 decoration-white/50 underline-offset-4 hover:decoration-white transition-all"
            >
                Claim Offer
            </button>
        </div>
    );
};

export default OfferCard;

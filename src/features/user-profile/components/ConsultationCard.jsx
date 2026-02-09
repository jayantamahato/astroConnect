import { MessageCircle, PhoneCall, Star } from 'lucide-react';

/**
 * ConsultationCard - Displays a single consultation item
 * 
 * @param {object} consultation - Consultation data
 * @param {boolean} showDate - Whether to show the date
 * @param {boolean} showFullRating - Whether to show full 5-star rating
 */
const ConsultationCard = ({ consultation, showDate = false, showFullRating = false }) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
            <img
                src={consultation.astrologerAvatar}
                alt={consultation.astrologerName}
                className={`${showFullRating ? 'w-14 h-14' : 'w-12 h-12'} rounded-full object-cover`}
            />
            <div className="flex-1">
                <h4 className="font-semibold text-foreground">{consultation.astrologerName}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                    {consultation.type === 'Chat' ? (
                        <MessageCircle className="w-3 h-3" />
                    ) : (
                        <PhoneCall className="w-3 h-3" />
                    )}
                    {consultation.type} • {consultation.duration}
                </p>
                {showDate && (
                    <p className="text-xs text-muted-foreground mt-1">{consultation.date}</p>
                )}
            </div>
            <div className="text-right">
                <p className={`${showFullRating ? 'font-semibold' : 'text-sm font-medium'} text-foreground`}>
                    ₹{consultation.amount}
                </p>
                {showFullRating ? (
                    <div className="flex items-center gap-1 text-yellow-500 mt-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3 h-3 ${i < consultation.rating ? 'fill-current' : 'text-muted'}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs">{consultation.rating}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConsultationCard;

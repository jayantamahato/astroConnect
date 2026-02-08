import { Star, MessageSquare } from 'lucide-react';

/**
 * ReviewCard - Displays a single review
 */
const ReviewCard = ({ review }) => {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                {review.initial}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                        <div className="flex items-center gap-1">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-muted'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.daysAgo}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{review.comment}</p>
            </div>
        </div>
    );
};

/**
 * ReviewsSection - Displays reviews with rating summary
 */
const ReviewsSection = ({ reviews, rating, totalReviews }) => {
    const ratingBreakdown = [
        { star: 5, pct: "85%" },
        { star: 4, pct: "10%" },
        { star: 3, pct: "3%" },
        { star: 2, pct: "1%" },
        { star: 1, pct: "1%" },
    ];

    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-heading font-bold">User Reviews</h2>
                </div>
                <select className="bg-muted text-sm border-none rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-primary outline-none">
                    <option>Most Recent</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                </select>
            </div>

            {/* Ratings Summary */}
            <div className="flex items-center gap-8 mb-8 pb-8 border-b border-border">
                <div className="text-center">
                    <div className="text-5xl font-bold text-foreground mb-1">{rating}</div>
                    <div className="flex text-yellow-500 justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <div className="text-xs text-muted-foreground">Based on {totalReviews?.toLocaleString()} reviews</div>
                </div>

                <div className="flex-1 space-y-2">
                    {ratingBreakdown.map((row) => (
                        <div key={row.star} className="flex items-center gap-3 text-xs">
                            <span className="w-2">{row.star}</span>
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary/80 rounded-full" style={{ width: row.pct }}></div>
                            </div>
                            <span className="w-6 text-right text-muted-foreground">{row.pct}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>

            <button className="w-full mt-8 py-3 border border-border rounded-xl text-sm font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                Show More Reviews
            </button>
        </div>
    );
};

export default ReviewsSection;

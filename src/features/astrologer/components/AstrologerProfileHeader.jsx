import { Star, Globe, Award, BadgeCheck } from 'lucide-react';

/**
 * AstrologerProfileHeader - Profile header with image, name, and stats
 */
const AstrologerProfileHeader = ({ astrologer }) => {
    return (
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Profile Image Section */}
                <div className="flex-shrink-0 mx-auto md:mx-0 relative">
                    <div className="w-40 h-40 rounded-full p-1 border-[3px] border-secondary relative z-0">
                        <img
                            src={astrologer.image || "https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg"}
                            alt={astrologer.name}
                            className="w-full h-full object-cover rounded-full"
                        />

                        {/* Online Badge */}
                        {astrologer.isOnline && (
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 bg-[#22C55E] text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-lg border-4 border-card flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                ONLINE
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Info Section */}
                <div className="flex-1 text-center md:text-left pt-4 md:pt-2">
                    <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-2 flex items-center justify-center md:justify-start gap-3">
                        {astrologer.name}
                        {astrologer.isVerified && (
                            <BadgeCheck className="w-8 h-8 text-white fill-blue-500" />
                        )}
                    </h1>
                    <p className="text-muted-foreground text-lg mb-6">
                        {astrologer.specialties}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border">
                            <Globe className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium text-foreground/80">
                                {astrologer.languages?.join(", ")}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border">
                            <Award className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium text-foreground/80">
                                {astrologer.experience} Years Exp.
                            </span>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center justify-center md:justify-start gap-8 pt-6 border-t border-dashed border-border">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-foreground">
                                {astrologer.rating}
                            </span>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="flex text-secondary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-xs text-muted-foreground underline decoration-muted-foreground/50 underline-offset-2">
                                    ({astrologer.reviews?.toLocaleString()} Reviews)
                                </span>
                            </div>
                        </div>

                        <div className="w-px h-10 bg-border"></div>

                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-foreground">
                                {astrologer.consultations}
                            </span>
                            <span className="text-muted-foreground font-medium">
                                Consultations
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AstrologerProfileHeader;

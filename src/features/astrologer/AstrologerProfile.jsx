import React from 'react';
import {
    Star,
    MessageCircle,
    Phone,
    ShieldCheck,
    Lock,
    Globe,
    User,
    Award,
    Image as ImageIcon,
    MessageSquare,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const AstrologerProfile = () => {
    // Mock Data
    const astrologer = {
        name: "Pandit Sharma",
        specialties: "Vedic Astrology, Numerology, Vastu, Face Reading",
        languages: ["English", "Hindi", "Sanskrit"],
        experience: 15,
        rating: 4.9,
        reviews: 2405,
        consultations: "25k+",
        isVerified: true,
        isOnline: true,
        about: {
            text: "Namaste! I am Pandit Sharma, a certified Vedic Astrologer with over 15 years of experience in guiding people through the celestial map of their lives. My journey began in Varanasi, where I studied ancient scriptures and astrology under the guidance of renowned gurus.\n\nI specialize in relationship counseling, career guidance, and remedial measures using Gemstones and Mantras. My approach is practical and modern, yet deeply rooted in traditional wisdom. I believe that astrology is not just about predicting the future, but about empowering you to create it.",
            expertise: ["Love & Relationship", "Career & Business", "Marriage Matching", "Health Issues", "Legal Matters", "Gemstone Consultation"]
        },
        pricing: {
            chat: {
                original: 30,
                discounted: 20
            },
            call: {
                original: 45, // implied higher price
                discounted: 30
            }
        },
        reviewsList: [
            {
                id: 1,
                name: "Sneha Gupta",
                initial: "S",
                daysAgo: "2 days ago",
                rating: 5,
                comment: "Pandit Ji is amazing! He accurately predicted my job change and gave me simple remedies. I felt so much positive energy after talking to him. Highly recommended!"
            },
            {
                id: 2,
                name: "Rahul Verma",
                initial: "R",
                daysAgo: "1 week ago",
                rating: 5,
                comment: "Very knowledgeable person. He explained the planetary positions clearly. The consultation was a bit short for the price, but the advice was solid."
            },
            {
                id: 3,
                name: "Anjali K.",
                initial: "A",
                daysAgo: "2 weeks ago",
                rating: 5,
                comment: "My marriage was delayed for 3 years. Pandit Sharma suggested a specific pooja and within 4 months things started moving. Thank you guruji!"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex text-sm text-muted-foreground mb-6">
                    <span className="hover:text-primary cursor-pointer">Home</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="hover:text-primary cursor-pointer">Astrologers</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground font-medium">{astrologer.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* 1. Profile Header Card */}
                        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Profile Image Section */}
                                <div className="flex-shrink-0 mx-auto md:mx-0 relative">
                                    <div className="w-40 h-40 rounded-full p-1 border-[3px] border-secondary relative z-0">
                                        <img
                                            src="https://img.freepik.com/free-photo/portrait-young-indian-woman-traditional-sari_23-2149565118.jpg?t=st=1739113000~exp=1739116600~hmac=e2098d5c5f8df60f8df9765432f4b23f2b4c3b5d5d3b6f2f2c4d5e6f7a8b9c0d"
                                            alt={astrologer.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />

                                        {/* Verified Badge */}
                                        {astrologer.isVerified && (
                                            <div className="absolute top-2 -left-2 z-10 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border border-background">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                Verified
                                            </div>
                                        )}

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
                                    <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-2">
                                        {astrologer.name}
                                    </h1>
                                    <p className="text-muted-foreground text-lg mb-6">
                                        {astrologer.specialties}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border">
                                            <Globe className="w-4 h-4 text-secondary" />
                                            <span className="text-sm font-medium text-foreground/80">
                                                {astrologer.languages.join(", ")}
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
                                                    ({astrologer.reviews.toLocaleString()} Reviews)
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

                        {/* 2. About Me Card */}
                        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                            <div className="flex items-center gap-2 mb-4">
                                <User className="w-5 h-5 text-primary" />
                                <h2 className="text-xl font-heading font-bold">About Me</h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                                    {astrologer.about.text}
                                </p>

                                <div className="space-y-2 pt-2">
                                    <h3 className="text-sm font-semibold text-foreground">Areas of Expertise</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {astrologer.about.expertise.map((item, index) => (
                                            <span key={index} className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-xs md:text-sm text-foreground hover:border-primary/30 transition-colors cursor-default">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Photos & Certificates (Placeholder) */}
                        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5 text-primary" />
                                    <h2 className="text-xl font-heading font-bold">Photos & Certificates</h2>
                                </div>
                                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-3 gap-4 h-32 sm:h-40">
                                <div className="rounded-xl overflow-hidden bg-muted relative group cursor-pointer">
                                    <img src="https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150519396.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Certificate 1" />
                                </div>
                                <div className="rounded-xl overflow-hidden bg-muted relative group cursor-pointer">
                                    <img src="https://img.freepik.com/premium-photo/spiritual-background-with-candles_1029471-558.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Certificate 2" />
                                </div>
                                <div className="rounded-xl overflow-hidden bg-muted relative group cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors">
                                    <span className="text-sm font-medium">+4 More</span>
                                </div>
                            </div>
                        </div>

                        {/* 4. User Reviews */}
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
                                    <div className="text-5xl font-bold text-foreground mb-1">{astrologer.rating}</div>
                                    <div className="flex text-yellow-500 justify-center mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Based on {astrologer.reviews.toLocaleString()} reviews</div>
                                </div>

                                <div className="flex-1 space-y-2">
                                    {[
                                        { star: 5, pct: "85%" },
                                        { star: 4, pct: "10%" },
                                        { star: 3, pct: "3%" },
                                        { star: 2, pct: "1%" },
                                        { star: 1, pct: "1%" },
                                    ].map((row) => (
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
                                {astrologer.reviewsList.map((review) => (
                                    <div key={review.id} className="flex gap-4">
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
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 border border-border rounded-xl text-sm font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                                Show More Reviews
                            </button>
                        </div>

                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* 1. Connect Now Card */}
                            <div className="bg-card rounded-2xl p-6 shadow-lg border border-primary/20">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-heading font-bold">Connect Now</h2>
                                    <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full animate-pulse">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                                        Available
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {/* Chat Button */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2 text-sm">
                                            <div className="flex items-center gap-2 text-foreground font-medium">
                                                <MessageCircle className="w-4 h-4" />
                                                Chat
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground line-through text-xs mr-2">₹{astrologer.pricing.chat.original}/min</span>
                                                <span className="text-primary font-bold">₹{astrologer.pricing.chat.discounted}<span className="text-xs font-normal text-muted-foreground">/min</span></span>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2">
                                            Start Chat
                                            <ChevronRight className="w-4 h-4 opacity-50" />
                                        </button>
                                    </div>

                                    {/* Call Button */}
                                    <div className="pt-2">
                                        <div className="flex justify-between items-center mb-2 text-sm">
                                            <div className="flex items-center gap-2 text-foreground font-medium">
                                                <Phone className="w-4 h-4" />
                                                Call
                                            </div>
                                            <div>
                                                <span className="text-primary font-bold">₹{astrologer.pricing.call.discounted}<span className="text-xs font-normal text-muted-foreground">/min</span></span>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 bg-card border-2 border-primary/20 hover:border-primary/50 text-foreground font-bold rounded-xl transition-all hover:bg-muted/50 flex items-center justify-center gap-2">
                                            Start Call
                                        </button>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <Lock className="w-5 h-5 text-muted-foreground/70" />
                                        <span className="text-[10px] text-muted-foreground font-medium">100% Private & Confidential</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <ShieldCheck className="w-5 h-5 text-muted-foreground/70" />
                                        <span className="text-[10px] text-muted-foreground font-medium">Verified Astrologer</span>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Offer Card */}
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold mb-3 border border-white/10">
                                    First Session Offer
                                </span>

                                <h3 className="text-xl font-bold mb-2">Get 50% OFF on your first consultation!</h3>
                                <p className="text-indigo-100 text-sm mb-4 opacity-90">Use code: FIRST50</p>

                                <button className="text-sm font-semibold underline decoration-2 decoration-white/50 underline-offset-4 hover:decoration-white transition-all">
                                    Claim Offer
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AstrologerProfile;

import { Users, Target, Heart, Award, CheckCircle } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const AboutUsPage = () => {
    const stats = [
        { value: "10M+", label: "Happy Users" },
        { value: "5000+", label: "Expert Astrologers" },
        { value: "50M+", label: "Consultations" },
        { value: "4.9", label: "App Rating" }
    ];

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To make ancient wisdom accessible to everyone through technology, helping people navigate life's journey with clarity and confidence."
        },
        {
            icon: Heart,
            title: "Our Vision",
            description: "To be the world's most trusted platform for astrological guidance, connecting seekers with authentic wisdom keepers."
        },
        {
            icon: Award,
            title: "Our Values",
            description: "Authenticity, integrity, and compassion guide everything we do. We believe in empowering individuals through knowledge."
        }
    ];

    const teamMembers = [
        {
            name: "Rajesh Kumar",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        },
        {
            name: "Priya Sharma",
            role: "Chief Astrology Officer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
        },
        {
            name: "Amit Patel",
            role: "Head of Technology",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        About <span className="text-primary">AstroConnect</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're on a mission to bring the ancient wisdom of astrology to the modern world,
                        helping millions find clarity, purpose, and direction in their lives.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 border-y border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
                        Our Story
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                        <p className="mb-4">
                            AstroConnect was founded in 2020 with a simple yet powerful vision: to bridge the gap
                            between ancient astrological wisdom and modern technology. Our founders, passionate
                            about both spirituality and innovation, saw an opportunity to make authentic
                            astrological guidance accessible to everyone.
                        </p>
                        <p className="mb-4">
                            What started as a small team of dedicated astrologers and developers has grown into
                            India's leading astrology platform, serving millions of users across the globe. We've
                            carefully curated a network of over 5,000 verified astrologers, each bringing their
                            unique expertise in Vedic astrology, tarot, numerology, and more.
                        </p>
                        <p>
                            Today, AstroConnect stands as a testament to what's possible when tradition meets
                            technology. We continue to innovate and expand our offerings, always keeping our
                            users' spiritual growth and well-being at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-16 px-4 bg-card">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
                        Why Choose AstroConnect?
                    </h2>
                    <div className="space-y-4">
                        {[
                            "5000+ verified and experienced astrologers",
                            "24/7 availability for consultations",
                            "100% confidential and private sessions",
                            "Multiple consultation modes - Chat, Call, Video",
                            "Affordable pricing with first consultation free",
                            "Money-back guarantee if not satisfied"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 bg-card">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
                        Meet Our Leadership
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary/20"
                                />
                                <h3 className="text-lg font-heading font-bold text-foreground">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;

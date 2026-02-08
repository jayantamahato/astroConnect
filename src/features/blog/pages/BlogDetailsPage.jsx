import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogDetailsPage = () => {
    const navigate = useNavigate();

    // Mock data for a single post (in real app, fetch based on ID)
    const post = {
        title: "Understanding Your Moon Sign: A Deep Dive into Emotional Intelligence",
        subtitle: "How the position of the moon at your birth shapes your inner world, instincts, and emotional needs.",
        image: "https://images.unsplash.com/photo-1534067783865-9eb9c8646b15?w=1200&auto=format&fit=crop&q=80",
        author: "Dr. Ananya Sharma",
        authorRole: "Senior Astrologer",
        authorImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        date: "Feb 14, 2024",
        readTime: "8 min read",
        category: "Astrology",
        content: `
            <p>Astrology is often associated with your Sun sign—the zodiac sign determined by your date of birth. While the Sun sign represents your core personality, ego, and external self, there is another equally important celestial body that governs your inner world: the Moon.</p>
            
            <p>Your Moon sign reveals your emotional nature, instincts, and what you need to feel secure. It is the "soul" behind the "ego" of the Sun. Understanding your Moon sign can provide profound insights into how you process feelings, how you nurture yourself and others, and your intuitive capabilities.</p>

            <h2>The Significance of the Moon in Astrology</h2>
            <p>In Vedic astrology, the Moon (Chandra) is considered even more significant than the Sun. It represents the mind (Manas) and controls our moods and reactions. Since the Moon moves quickly through the zodiac (spending about 2.5 days in each sign), it reflects the fluctuating nature of our emotions.</p>

            <h3>What Your Moon Sign Says About You</h3>
            <ul>
                <li><strong>Fire Moons (Aries, Leo, Sagittarius):</strong> You react with passion and enthusiasm. You need freedom and validation to feel secure.</li>
                <li><strong>Earth Moons (Taurus, Virgo, Capricorn):</strong> You find comfort in stability and routine. You process emotions through practical actions.</li>
                <li><strong>Air Moons (Gemini, Libra, Aquarius):</strong> You need communication and social connection. You analyze your feelings rather than just feeling them.</li>
                <li><strong>Water Moons (Cancer, Scorpio, Pisces):</strong> You are deeply intuitive and sensitive. You need emotional depth and privacy.</li>
            </ul>

            <h2>Integrating Your Sun and Moon</h2>
            <p>Your astrological profile is a blend of these energies. For instance, a Leo Sun with a Scorpio Moon might appear confident and outgoing (Leo) but harbors deep, intense secret feelings (Scorpio) that they rarely show to the world.</p>
            
            <p>By exploring your Moon sign, you can learn better self-care strategies. A Gemini Moon might need to journal or talk to a friend to release stress, while a Taurus Moon might prefer a comforting meal or a walk in nature.</p>
            
            <blockquote>"The Moon does not fight. It attacks no one. It does not worry. It does not crush. It keeps its course, but by its very nature, it gently influences."</blockquote>

            <p>Embrace your lunar side to achieve a more balanced and harmonious life. It is the key to unlocking your emotional intelligence and deepening your relationships.</p>
        `
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-24 pb-16">

                {/* Hero / Header Image */}
                <div className="w-full h-[400px] md:h-[500px] relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-12">
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-6 flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-black/40"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </button>
                        <span className="bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 leading-tight shadow-sm">
                            {post.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
                            {post.subtitle}
                        </p>
                    </div>
                </div>

                <article className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-8 relative z-10">
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl">

                        {/* Meta Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8 mb-8">
                            <div className="flex items-center gap-4">
                                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                <div>
                                    <h4 className="font-bold text-foreground">{post.author}</h4>
                                    <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="flex gap-2 pl-4 border-l border-border">
                                    <button className="p-2 hover:bg-muted rounded-full transition-colors text-foreground">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 hover:bg-muted rounded-full transition-colors text-foreground">
                                        <Bookmark className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6
                            prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                            prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                    </div>
                </article>

                {/* Newsletter / CTA */}
                <div className="max-w-4xl mx-auto px-4 mt-16">
                    <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
                        <h3 className="text-2xl font-bold mb-3 font-heading">Enjoyed this article?</h3>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Subscribe to our newsletter to get more astrological insights delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none flex-grow"
                            />
                            <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-primary/25 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default BlogDetailsPage;

import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { BlogCard } from '../components/BlogCard';
import bgImage from '../../../assets/images/bg.png';

const mockPosts = Array(12).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 ? "Understanding Your Moon Sign" : "The Power of Numerology in 2024",
    excerpt: "Discover how your moon sign influences your emotional landscape and inner world. This comprehensive guide breaks down the basics.",
    category: i % 3 === 0 ? "Astrology" : i % 3 === 1 ? "Tarot" : "Numerology",
    image: `https://images.unsplash.com/photo-1534067783865-9eb9c8646b15?w=500&auto=format&fit=crop&q=80`,
    author: "Dr. Ananya Sharma",
    authorImage: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    date: "Feb 14, 2024",
    readTime: 5 + (i % 5)
}));

const BlogPage = () => {

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
            <Navbar />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-12">

                    {/* Banner Section */}
                    <div className="relative rounded-3xl overflow-hidden mb-12 h-[300px] md:h-[400px] flex items-center justify-center text-center">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={bgImage}
                                alt="Blog Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-4 max-w-3xl mx-auto space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                                Latest Insights & Wisdom
                            </span>
                            <h1 className="text-4xl md:text-6xl font-heading font-black text-white drop-shadow-lg">
                                AstroNov Blog
                            </h1>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                Explore the mysteries of the universe. Our expert astrologers share deep insights into planetary movements, spiritual growth, and more.
                            </p>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {mockPosts.map((post) => (
                            <div key={post.id}>
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>

                    {/* Pagination (Mock) */}
                    {mockPosts.length > 0 && (
                        <div className="flex justify-center pt-12">
                            <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">Previous</button>
                                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/20">1</button>
                                <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">2</button>
                                <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">3</button>
                                <span className="px-2 py-2 text-muted-foreground">...</span>
                                <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">Next</button>
                            </div>
                        </div>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;

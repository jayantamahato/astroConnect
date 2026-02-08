import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({ post }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${post.id}`);
    };

    return (
        <div
            onClick={handleReadMore}
            className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-border shadow-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min read</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
                            {post.authorImage ? (
                                <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-4 h-4 text-muted-foreground" />
                            )}
                        </div>
                        <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore();
                        }}
                        className="text-primary font-bold text-sm flex items-center gap-1 group/btn"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

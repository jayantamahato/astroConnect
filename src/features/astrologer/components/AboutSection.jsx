import { User } from 'lucide-react';

/**
 * AboutSection - Displays astrologer's about text and expertise areas
 */
const AboutSection = ({ about }) => {
    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-heading font-bold">About Me</h2>
            </div>
            <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {about.text}
                </p>

                <div className="space-y-2 pt-2">
                    <h3 className="text-sm font-semibold text-foreground">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                        {about.expertise.map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-xs md:text-sm text-foreground hover:border-primary/30 transition-colors cursor-default"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

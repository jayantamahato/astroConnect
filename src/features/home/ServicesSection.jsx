import { useNavigate } from "react-router-dom";
import { MessageCircle, Phone, Video, FileText, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        title: "Chat with Astrologer",
        description: "Get instant answers to your queries via chat.",
        icon: MessageCircle,
        color: "text-blue-400",
        path: "/chat",
    },
    {
        title: "Talk to Astrologer",
        description: "Voice call with premium astrologers.",
        icon: Phone,
        color: "text-green-400",
        path: "/talk",
    },
    {
        title: "Video Call",
        description: "Face-to-face consultation for better clarity.",
        icon: Video,
        color: "text-purple-400",
        path: "/video",
    },
    {
        title: "Detailed Report",
        description: "Get a manual report written by experts.",
        icon: FileText,
        color: "text-orange-400",
        path: "/report",
    },
];

const ServicesSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            onClick={() => navigate(service.path)}
                            className="group relative bg-white dark:bg-card p-6 rounded-2xl border border-zinc-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-md shadow-zinc-200/50 dark:shadow-black/20 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-primary" />
                            </div>

                            <div className={`w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center mb-6 ring-1 ring-zinc-100 dark:ring-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

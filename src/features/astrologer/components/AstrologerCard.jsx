import { useNavigate } from "react-router-dom";
import { Star, Phone } from "lucide-react";

export function AstrologerCard({ astro }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate('/astrologer/1')}
            className="bg-white dark:bg-card border border-zinc-200 dark:border-white/5 p-5 rounded-2xl flex flex-col gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all group relative cursor-pointer"
        >
            <div className="flex gap-4">
                {/* Avatar */}
                <div className="relative">
                    <img
                        src={astro.image}
                        alt={astro.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-secondary p-0.5"
                    />
                    <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${astro.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white line-clamp-1">
                            {astro.name}
                        </h3>
                        <span className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            {astro.rating} <Star className="w-2 h-2 fill-current" />
                        </span>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 leading-tight">
                        {astro.skills}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {astro.experience}
                    </span>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-2 mt-auto">
                <span className="text-zinc-900 dark:text-white font-bold text-lg">
                    {astro.price}
                </span>

                {astro.status === 'online' ? (
                    <div className="flex gap-3">
                        <button className="w-10 h-10 rounded-full border border-green-500/30 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                            <Phone className="w-4 h-4" />
                        </button>
                        <button className="px-6 py-2 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors">
                            Chat
                        </button>
                    </div>
                ) : (
                    <button className="px-6 py-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-400 dark:text-zinc-500 font-medium text-sm cursor-not-allowed">
                        Busy
                    </button>
                )}
            </div>
        </div>
    );
}

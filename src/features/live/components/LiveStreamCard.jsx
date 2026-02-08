import { Users, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * LiveStreamCard - Displays a single live stream card
 */
const LiveStreamCard = ({ stream }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/live/${stream.id}`)}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
        >
            {/* Image & Overlay */}
            <div className="aspect-video relative">
                <img
                    src={stream.image}
                    alt={stream.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Live Badge */}
                {stream.isLive && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-lg">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        LIVE
                    </div>
                )}

                {/* Viewer Count */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/90 text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
                    <Users className="w-3 h-3" />
                    {stream.viewers}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-bold text-lg line-clamp-1">{stream.name}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {stream.category}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1 mb-4">{stream.topic}</p>

                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground pt-3 border-t border-border">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[8px] overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <span>+ {stream.viewers} watching now</span>
                </div>
            </div>
        </div>
    );
};

export default LiveStreamCard;

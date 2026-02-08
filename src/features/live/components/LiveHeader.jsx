/**
 * LiveHeader - Header section for live listing page
 */
const LiveHeader = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-8">
            <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold flex items-center gap-3">
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                    </span>
                    {title || "Live Astrologers"}
                </h1>
                <p className="text-muted-foreground mt-2">
                    {subtitle || "Join live sessions to get instant answers and guidance."}
                </p>
            </div>
        </div>
    );
};

export default LiveHeader;

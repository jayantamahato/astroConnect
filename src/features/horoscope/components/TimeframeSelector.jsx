import React from 'react';

const TIMEFRAMES = ["Yesterday", "Today", "Tomorrow", "Daily", "Monthly", "Yearly"];

const TimeframeSelector = ({ selectedTimeframe, onSelect }) => {
    return (
        <div className="flex gap-8 overflow-x-auto scrollbar-hide py-2">
            {TIMEFRAMES.map((tf) => {
                const isSelected = selectedTimeframe === tf;
                return (
                    <button
                        key={tf}
                        onClick={() => onSelect(tf)}
                        className={`text-lg font-medium transition-all relative whitespace-nowrap ${isSelected ? "text-primary" : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {tf}
                        {isSelected && (
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)]" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default TimeframeSelector;

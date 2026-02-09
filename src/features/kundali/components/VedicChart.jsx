import React from 'react';

const VedicChart = ({ title, showTitle = true }) => {
    return (
        <div className={`bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-6 shadow-xl space-y-6 ${!showTitle ? 'border-none shadow-none bg-transparent' : ''}`}>
            {showTitle && title && (
                <h3 className="text-xl font-heading text-primary text-center font-bold">{title}</h3>
            )}

            <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-[#fffdf5] border-2 border-primary/20 rounded-xl overflow-hidden shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary/30 stroke-[0.5]">
                    {/* Outer Square is the container itself or can be explicitly drawn */}
                    <rect x="0" y="0" width="100" height="100" fill="none" />

                    {/* Diagonals */}
                    <line x1="0" y1="0" x2="100" y2="100" />
                    <line x1="100" y1="0" x2="0" y2="100" />

                    {/* Inner Diamond */}
                    <line x1="50" y1="0" x2="0" y2="50" />
                    <line x1="0" y1="50" x2="50" y2="100" />
                    <line x1="50" y1="100" x2="100" y2="50" />
                    <line x1="100" y1="50" x2="50" y2="0" />

                    {/* Placeholder for House Numbers / Planets */}
                    <text x="50" y="30" fontSize="3" textAnchor="middle" fill="#6366f1" className="font-bold">1</text>
                    <text x="50" y="25" fontSize="2.5" textAnchor="middle" fill="#ef4444" opacity="0.8">Ma 22.22°</text>

                    <text x="30" y="15" fontSize="3" textAnchor="middle" fill="#6b7280">2</text>
                    <text x="15" y="30" fontSize="3" textAnchor="middle" fill="#6b7280">3</text>
                    <text x="30" y="50" fontSize="3" textAnchor="middle" fill="#6b7280">4</text>

                    <text x="15" y="70" fontSize="3" textAnchor="middle" fill="#6b7280">5</text>
                    <text x="30" y="85" fontSize="3" textAnchor="middle" fill="#6b7280">6</text>

                    <text x="50" y="75" fontSize="3" textAnchor="middle" fill="#6b7280">7</text>

                    <text x="70" y="85" fontSize="3" textAnchor="middle" fill="#6b7280">8</text>
                    <text x="85" y="70" fontSize="3" textAnchor="middle" fill="#6b7280">9</text>

                    <text x="70" y="50" fontSize="3" textAnchor="middle" fill="#6b7280">10</text>
                    <text x="85" y="30" fontSize="3" textAnchor="middle" fill="#6b7280">11</text>
                    <text x="70" y="15" fontSize="3" textAnchor="middle" fill="#6b7280">12</text>
                </svg>
            </div>
        </div>
    );
};

export default VedicChart;

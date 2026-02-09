import React, { useState } from 'react';
import VedicChart from './VedicChart';
import { ChevronRight } from 'lucide-react';

const PLANET_DATA = [
    { planet: "Ascendant", sign: "Scorpio", lord: "Mars", nakshatra: "Jyeshtha", degree: "19° 59' 4\"", retro: "Direct", house: 1, status: "Neutral" },
    { planet: "Sun", sign: "Capricorn", lord: "Saturn", nakshatra: "Shravana", degree: "10° 28' 24\"", retro: "Direct", house: 3, status: "Enemy" },
    { planet: "Moon", sign: "Leo", lord: "Sun", nakshatra: "Uttara Phalguni", degree: "29° 31' 51\"", retro: "Direct", house: 10, status: "Friendly" },
    { planet: "Mercury", sign: "Capricorn", lord: "Saturn", nakshatra: "Shravana", degree: "16° 18' 20\"", retro: "Direct", house: 3, status: "Friendly" },
    { planet: "Venus", sign: "Sagittarius", lord: "Jupiter", nakshatra: "Mula", degree: "6° 13' 18\"", retro: "Direct", house: 2, status: "Enemy" },
    { planet: "Mars", sign: "Aquarius", lord: "Saturn", nakshatra: "Purva Bhadrapada", degree: "22° 12' 58\"", retro: "Direct", house: 4, status: "Enemy" },
];

const DASHA_DATA = [
    { planet: "Sun", start: "Birth", end: "10-Oct-2004", current: false },
    { planet: "Moon", start: "10-Oct-2004", end: "11-Oct-2014", current: false },
    { planet: "Mars", start: "11-Oct-2014", end: "10-Oct-2021", current: false },
    { planet: "Rahu", start: "10-Oct-2021", end: "11-Oct-2039", current: true },
    { planet: "Jupiter", start: "11-Oct-2039", end: "11-Oct-2055", current: false },
    { planet: "Saturn", start: "11-Oct-2055", end: "11-Oct-2074", current: false },
];

const KundaliTab = () => {
    const [chartType, setChartType] = useState("North Indian");
    const [dashaLevel, setDashaLevel] = useState("Mahadasha");
    const [selections, setSelections] = useState({
        Mahadasha: "Rahu",
        Antardasha: null,
        Pratyantardasha: null,
        Sookshmadasha: null
    });

    const handleDashaClick = (planet) => {
        const nextLevelMap = {
            "Mahadasha": "Antardasha",
            "Antardasha": "Pratyantardasha",
            "Pratyantardasha": "Sookshmadasha"
        };

        const nextLevel = nextLevelMap[dashaLevel];
        if (nextLevel) {
            setSelections(prev => ({ ...prev, [dashaLevel]: planet }));
            setDashaLevel(nextLevel);
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Header with Switcher */}
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-heading text-primary font-bold">Comprehensive Kundali Report</h2>
                <div className="bg-muted/50 p-1.5 rounded-full flex gap-1">
                    {["North Indian", "South Indian"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setChartType(type)}
                            className={`px-8 py-2.5 rounded-full font-bold transition-all ${chartType === type
                                ? "bg-primary text-white shadow-lg"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VedicChart title="Lagna / Ascendant / Basic Birth Chart" />
                <VedicChart title="Navamsa Chart (D-9)" />
            </div>

            {/* Planet Positions Table */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl">
                <div className="p-8 border-b border-border/50 bg-muted/20">
                    <h3 className="text-2xl font-heading text-primary font-bold flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        Planet Positions & Details
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-muted/30">
                            <tr>
                                {["PLANET", "SIGN", "SIGN LORD", "NAKSHATRA", "DEGREE", "RETRO", "HOUSE", "STATUS"].map((h) => (
                                    <th key={h} className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                            {PLANET_DATA.map((row, i) => (
                                <tr key={i} className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-bold text-primary">{row.planet}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{row.sign}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{row.lord}</td>
                                    <td className="px-6 py-4 text-sm font-medium">{row.nakshatra}</td>
                                    <td className="px-6 py-4 text-sm font-mono">{row.degree}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-muted-foreground">{row.retro}</td>
                                    <td className="px-6 py-4 text-sm font-bold">{row.house}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${row.status === 'Friendly' ? 'bg-green-100 text-green-700' :
                                            row.status === 'Enemy' ? 'bg-red-100 text-red-700' :
                                                'bg-muted text-muted-foreground'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Vimshottari Dasha Section */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl">
                <div className="p-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-heading text-primary font-bold flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full" />
                            Vimshottari Dasha
                        </h3>
                        {dashaLevel !== "Mahadasha" && (
                            <button
                                onClick={() => {
                                    if (dashaLevel === "Sookshmadasha") setDashaLevel("Pratyantardasha");
                                    else if (dashaLevel === "Pratyantardasha") setDashaLevel("Antardasha");
                                    else if (dashaLevel === "Antardasha") setDashaLevel("Mahadasha");
                                }}
                                className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                            >
                                ← Back to Previous Level
                            </button>
                        )}
                    </div>

                    {/* Dasha Stepper/Tabs - Now non-clickable as per request */}
                    <div className="flex items-center gap-4 py-2 overflow-x-auto scrollbar-hide">
                        {["Mahadasha", "Antardasha", "Pratyantardasha", "Sookshmadasha"].map((level, i) => (
                            <React.Fragment key={level}>
                                <div
                                    className={`flex flex-col gap-1 transition-all ${dashaLevel === level ? "text-primary" : "text-muted-foreground"
                                        }`}
                                >
                                    <div className="flex items-center gap-3 whitespace-nowrap">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${dashaLevel === level ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                                            }`}>
                                            {i + 1}
                                        </div>
                                        <span className="text-sm font-bold tracking-tight">{level}</span>
                                    </div>
                                    {selections[level] && (
                                        <span className="text-[11px] font-bold ml-11 text-secondary bg-secondary/10 px-2 py-0.5 rounded-md self-start">
                                            {selections[level]}
                                        </span>
                                    )}
                                </div>
                                {i < 3 && <div className="w-8 h-px bg-border shrink-0 mt-4" />}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="overflow-hidden border border-border/50 rounded-2xl">
                        <table className="w-full text-left font-sans">
                            <thead className="bg-muted/30">
                                <tr>
                                    {["PLANET", "START DATE", "END DATE", "ACTION"].map((h) => (
                                        <th key={h} className="px-6 py-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {DASHA_DATA.map((row, i) => (
                                    <tr
                                        key={i}
                                        onClick={() => handleDashaClick(row.planet)}
                                        className={`transition-all cursor-pointer ${(selections[dashaLevel] === row.planet || (dashaLevel === 'Mahadasha' && row.current && !selections.Mahadasha)) ? "bg-primary/5 border-l-4 border-primary" : "hover:bg-muted/10"}`}
                                    >
                                        <td className={`px-6 py-5 font-bold ${row.current ? "text-primary" : "text-foreground"}`}>
                                            {row.planet} {row.current && <span className="ml-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase">Current</span>}
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium text-muted-foreground">{row.start}</td>
                                        <td className="px-6 py-5 text-sm font-medium text-muted-foreground">{row.end}</td>
                                        <td className="px-6 py-5">
                                            <div className="p-2 hover:bg-primary/10 rounded-full transition-colors group inline-block">
                                                <ChevronRight className={`w-5 h-5 ${row.current ? 'text-primary' : 'text-muted-foreground'} group-hover:translate-x-1 transition-transform`} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KundaliTab;

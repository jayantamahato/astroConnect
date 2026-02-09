import React from 'react';
import VedicChart from './VedicChart';

const RULING_PLANETS = [
    { type: "Mo", signLord: "Venus", starLord: "Jupiter", subLord: "VENUS" },
    { type: "Asc", signLord: "Moon", starLord: "Mercury", subLord: "Mercury" }
];

const CUSPS_DATA = [
    { cusp: 1, degree: "229.99", sign: "Scorpio", signLord: "Ma", starLord: "Me", subLord: "Ve" },
    { cusp: 2, degree: "260.62", sign: "Sagittarius", signLord: "Ju", starLord: "Ve", subLord: "Ju" },
    { cusp: 3, degree: "293.87", sign: "Capricorn", signLord: "Sa", starLord: "Ma", subLord: "Ma" },
    { cusp: 4, degree: "327.84", sign: "Aquarius", signLord: "Sa", starLord: "Ju", subLord: "Ve" },
    { cusp: 5, degree: "358.99", sign: "Pisces", signLord: "Ju", starLord: "Me", subLord: "Sa" },
    { cusp: 6, degree: "25.89", sign: "Aries", signLord: "Ma", starLord: "Ve", subLord: "Ke" },
    { cusp: 7, degree: "49.99", sign: "Taurus", signLord: "Ve", starLord: "Mo", subLord: "Ke" },
    { cusp: 8, degree: "80.62", sign: "Gemini", signLord: "Me", starLord: "Ju", subLord: "Ju" },
    { cusp: 9, degree: "113.87", sign: "Cancer", signLord: "Mo", starLord: "Me", subLord: "Ma" },
    { cusp: 10, degree: "147.84", sign: "Leo", signLord: "Su", starLord: "Su", subLord: "Ma" },
    { cusp: 11, degree: "178.99", sign: "Virgo", signLord: "Me", starLord: "Ma", subLord: "Sa" },
    { cusp: 12, degree: "205.89", sign: "Libra", signLord: "Ve", starLord: "Ju", subLord: "Ke" },
];

const KPTab = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500 pb-20 pt-8">
            {/* Top Section: Chart and Ruling Planets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Bhav Chalit Chart */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        <h3 className="text-2xl font-heading text-primary font-bold tracking-tight">Bhav Chalit Chart</h3>
                    </div>
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-8 shadow-xl flex items-center justify-center">
                        <VedicChart showTitle={false} />
                    </div>
                </div>

                {/* Ruling Planets */}
                <div className="space-y-6 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        <h3 className="text-2xl font-heading text-primary font-bold tracking-tight">Ruling Planets</h3>
                    </div>
                    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl flex-1">
                        <div className="overflow-x-auto h-full">
                            <table className="w-full text-left h-full border-collapse">
                                <thead className="bg-card border-b border-border/50">
                                    <tr>
                                        {["--", "SIGN LORD", "STAR LORD", "SUB LORD"].map((h) => (
                                            <th key={h} className="px-6 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/20">
                                    {RULING_PLANETS.map((row, i) => (
                                        <tr key={i} className="hover:bg-primary/5 transition-colors group">
                                            <td className="px-6 py-6 font-bold text-primary group-hover:scale-110 transition-transform inline-block">{row.type}</td>
                                            <td className="px-6 py-6 text-sm font-semibold text-primary">{row.signLord}</td>
                                            <td className="px-6 py-6 text-sm font-semibold text-primary">{row.starLord}</td>
                                            <td className="px-6 py-6 text-sm font-semibold text-primary">{row.subLord}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-card">
                                    <tr>
                                        <td className="px-6 py-5 font-bold text-muted-foreground uppercase text-[10px] tracking-widest">Day Lord</td>
                                        <td colSpan={3} className="px-6 py-5 font-bold text-right text-primary text-lg pr-12">Moon</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cusps Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full" />
                    <h3 className="text-2xl font-heading text-primary font-bold tracking-tight">Cusps</h3>
                </div>
                <div className="bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-card border-b border-border/50">
                                <tr>
                                    {["CUSP", "DEGREE", "SIGN", "SIGN LORD", "STAR LORD", "SUB LORD"].map((h) => (
                                        <th key={h} className="px-6 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20">
                                {CUSPS_DATA.map((row, i) => (
                                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                                        <td className="px-6 py-5 font-bold text-primary">{row.cusp}</td>
                                        <td className="px-6 py-5 text-sm font-mono text-primary/80">{row.degree}</td>
                                        <td className="px-6 py-5 text-sm font-semibold text-primary">{row.sign}</td>
                                        <td className="px-6 py-5 text-sm font-medium text-muted-foreground">{row.signLord}</td>
                                        <td className="px-6 py-5 text-sm font-medium text-muted-foreground">{row.starLord}</td>
                                        <td className="px-6 py-5 text-sm font-medium text-muted-foreground">{row.subLord}</td>
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

export default KPTab;

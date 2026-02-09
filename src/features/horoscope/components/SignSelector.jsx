import React from 'react';
import { Flame, Leaf, VenetianMask, Droplet, Sun, Moon, Scale, Zap, ArrowRight, Anchor, Cloud } from "lucide-react";

const SIGNS = [
    { name: "Aries", icon: Flame },
    { name: "Taurus", icon: Leaf },
    { name: "Gemini", icon: VenetianMask },
    { name: "Cancer", icon: Droplet },
    { name: "Leo", icon: Sun },
    { name: "Virgo", icon: Moon },
    { name: "Libra", icon: Scale },
    { name: "Scorpio", icon: Zap },
    { name: "Sagittarius", icon: ArrowRight },
    { name: "Capricorn", icon: Anchor },
    { name: "Aquarius", icon: Cloud },
    { name: "Pisces", icon: Droplet },
];

const SignSelector = ({ selectedSign, onSelect }) => {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {SIGNS.map((sign) => {
                const isSelected = selectedSign === sign.name;
                return (
                    <button
                        key={sign.name}
                        onClick={() => onSelect(sign.name)}
                        className={`flex flex-col items-center justify-center min-w-[100px] h-32 rounded-2xl border-2 transition-all duration-300 gap-3 group px-4 ${isSelected
                                ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,140,0,0.15)]"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                    >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isSelected ? "bg-primary/20" : "bg-muted group-hover:bg-primary/10"
                            }`}>
                            <sign.icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} strokeWidth={1.5} />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                            }`}>
                            {sign.name}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default SignSelector;

import { useState } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';

/**
 * AstrologerFilters - Sidebar filter component for astrologer listing
 */
const AstrologerFilters = ({
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
    isAvailable,
    setIsAvailable,
    experienceRange,
    setExperienceRange,
    priceRange,
    setPriceRange,
    onReset
}) => {
    const filters = ["Vedic", "Tarot", "Numerology", "Vastu", "Face Reading"];
    const languages = ['English', 'Hindi', 'Marathi', 'Bengali'];

    const [collapsedSections, setCollapsedSections] = useState({});

    const toggleSection = (section) => {
        setCollapsedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-heading font-bold">Filters</h3>
                    <button onClick={onReset} className="text-sm text-primary hover:underline font-bold">
                        Reset All
                    </button>
                </div>

                {/* Search */}
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/70"
                    />
                </div>

                {/* Available Toggle */}
                <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between shadow-sm">
                    <span className="font-medium text-sm">Available Now</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isAvailable}
                            onChange={() => setIsAvailable(!isAvailable)}
                        />
                        <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                </div>

                {/* Expertise Filter */}
                <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                    <button
                        onClick={() => toggleSection('expertise')}
                        className="flex items-center justify-between w-full font-medium text-sm text-foreground"
                    >
                        <span>Expertise</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${collapsedSections['expertise'] ? 'rotate-180' : ''}`} />
                    </button>
                    {!collapsedSections['expertise'] && (
                        <div className="mt-4 space-y-2">
                            {filters.map(filter => (
                                <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedFilter === filter ? 'bg-primary border-primary' : 'border-muted-foreground group-hover:border-primary'
                                        }`}>
                                        {selectedFilter === filter && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="expertise"
                                        className="hidden"
                                        checked={selectedFilter === filter}
                                        onChange={() => setSelectedFilter(selectedFilter === filter ? 'All' : filter)}
                                    />
                                    <span className={`text-sm ${selectedFilter === filter ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                                        {filter}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Languages Filter */}
                <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                    <button
                        onClick={() => toggleSection('languages')}
                        className="flex items-center justify-between w-full font-medium text-sm text-foreground"
                    >
                        <span>Languages</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${collapsedSections['languages'] ? 'rotate-180' : ''}`} />
                    </button>
                    {!collapsedSections['languages'] && (
                        <div className="mt-4 space-y-2">
                            {languages.map(lang => (
                                <label key={lang} className="flex items-center gap-3 cursor-pointer">
                                    <div className="w-4 h-4 rounded border border-muted-foreground flex items-center justify-center"></div>
                                    <span className="text-sm text-muted-foreground">{lang}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Experience Slider */}
                <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                    <div className="mb-4">
                        <span className="font-medium text-sm">Experience (Years)</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="30"
                        value={experienceRange}
                        onChange={(e) => setExperienceRange(e.target.value)}
                        className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-medium">
                        <span>0 Yrs</span>
                        <span>{experienceRange}+ Yrs</span>
                    </div>
                </div>

                {/* Price Slider */}
                <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                    <div className="mb-4">
                        <span className="font-medium text-sm">Price (₹/min)</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-medium">
                        <span>₹0</span>
                        <span>₹{priceRange}+</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AstrologerFilters;

/**
 * CategoryTabs - Tab buttons for filtering by category
 */
const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${activeCategory === cat
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-card border-border hover:border-primary/50'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;

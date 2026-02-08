/**
 * ProfileTabs - Tab navigation for profile sections
 */
const ProfileTabs = ({ activeTab, setActiveTab }) => {
    const tabs = ['overview', 'consultations', 'transactions'];

    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                        }`}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default ProfileTabs;

import { Camera, Edit3 } from 'lucide-react';

/**
 * ProfileCard - Displays user profile summary with avatar, name, and stats
 */
const ProfileCard = ({ userData, getInitials }) => {
    return (
        <div className="bg-card rounded-3xl p-6 shadow-sm border border-border relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-t-3xl"></div>

            {/* Avatar Section */}
            <div className="relative z-10 flex flex-col items-center pt-4">
                <div className="relative">
                    <div className="w-28 h-28 rounded-full p-1 border-4 border-card shadow-xl bg-card">
                        {userData.avatar ? (
                            <img
                                src={userData.avatar}
                                alt={userData.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">
                                    {getInitials(userData.name)}
                                </span>
                            </div>
                        )}
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>

                <h1 className="mt-4 text-2xl font-heading text-foreground">{userData.name}</h1>
                <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                    <span>☉</span> {userData.zodiacSign}
                </p>

                <button className="mt-4 px-6 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                    <Edit3 className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{userData.totalConsultations}</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                </div>
                <div className="text-center border-x border-border">
                    <div className="text-xl font-bold text-foreground">{userData.favoriteAstrologers}</div>
                    <div className="text-xs text-muted-foreground">Favorites</div>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold text-primary">₹{userData.walletBalance}</div>
                    <div className="text-xs text-muted-foreground">Balance</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

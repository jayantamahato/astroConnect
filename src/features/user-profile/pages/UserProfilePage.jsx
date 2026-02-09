import React, { useState } from 'react';
import {
    ChevronRight,
    Wallet,
    Clock,
    Bell,
    Heart,
    HelpCircle,
    FileText,
    Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logout, selectAuth } from '../../auth/authSlice';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import LogoutDialog from '../../../components/dialogs/LogoutDialog';
import HelpSupportDialog from '../../../components/dialogs/HelpSupportDialog';
import FavoriteAstrologersDrawer from '../../../components/drawers/FavoriteAstrologersDrawer';
import NotificationsDrawer from '../../../components/drawers/NotificationsDrawer';
import EditProfileDialog from '../../../components/dialogs/EditProfileDialog';
import {
    ProfileCard,
    ProfileMenu,
    ProfileTabs,
    PersonalInfoCard,
    ConsultationCard,
    SecurityCard,
    TransactionCard
} from '../components';

const UserProfilePage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(selectAuth);
    const [activeTab, setActiveTab] = useState('overview');
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
    const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);
    const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
    const [isNotificationsDrawerOpen, setIsNotificationsDrawerOpen] = useState(false);
    const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] = useState(false);

    // Mock user data (in production, this would come from the user state)
    const userData = {
        name: user?.name || "Jayanta Mahato",
        email: user?.email || "jayanta@example.com",
        phone: user?.phone || "+91 98765 43210",
        avatar: user?.avatar || null,
        dateOfBirth: "15 March 1995",
        location: "Kolkata, India",
        zodiacSign: "Pisces",
        walletBalance: 500,
        totalConsultations: 12,
        favoriteAstrologers: 5,
    };

    // Consultation history
    const consultationHistory = [
        {
            id: 1,
            astrologerName: "Pandit Sharma",
            astrologerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            type: "Chat",
            duration: "25 min",
            date: "Feb 8, 2026",
            amount: 500,
            rating: 5
        },
        {
            id: 2,
            astrologerName: "Dr. Patel",
            astrologerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            type: "Call",
            duration: "30 min",
            date: "Feb 5, 2026",
            amount: 450,
            rating: 4
        },
        {
            id: 3,
            astrologerName: "Astro Meera",
            astrologerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            type: "Chat",
            duration: "15 min",
            date: "Jan 30, 2026",
            amount: 300,
            rating: 5
        },
    ];

    // Transaction history
    const transactions = [
        { type: 'credit', label: 'Wallet Recharge', amount: 1000, date: 'Feb 8, 2026', status: 'completed' },
        { type: 'debit', label: 'Consultation with Pandit Sharma', amount: 500, date: 'Feb 5, 2026', status: 'completed' },
        { type: 'credit', label: 'Referral Bonus', amount: 100, date: 'Feb 1, 2026', status: 'completed' },
        { type: 'debit', label: 'Consultation with Dr. Patel', amount: 450, date: 'Jan 28, 2026', status: 'completed' },
    ];

    // Menu items
    const menuItems = [
        { icon: Wallet, label: 'My Wallet', path: '/wallet', badge: `₹${userData.walletBalance}` },
        { icon: Heart, label: 'Favorite Astrologers', onClick: () => setIsFavoritesDrawerOpen(true), badge: userData.favoriteAstrologers },
        { icon: Bell, label: 'Notifications', onClick: () => setIsNotificationsDrawerOpen(true) },
        { icon: HelpCircle, label: 'Help & Support', onClick: () => setIsHelpDialogOpen(true) },
        { icon: Lock, label: 'Privacy Policy', path: '/privacy' },
        { icon: FileText, label: 'Terms of Service', path: '/terms' },
    ];

    const openLogoutDialog = () => setIsLogoutDialogOpen(true);
    const cancelLogout = () => setIsLogoutDialogOpen(false);
    const confirmLogout = () => {
        dispatch(logout());
        setIsLogoutDialogOpen(false);
        navigate('/');
    };

    const handleEditProfile = () => {
        setIsEditProfileDialogOpen(true);
    };

    const handleSaveProfile = (updatedData) => {
        console.log("Saving profile data:", updatedData);
        // In a real app, you would dispatch an action to update user profile here
        setIsEditProfileDialogOpen(false);
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex text-sm text-muted-foreground mb-6">
                    <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-foreground font-medium">My Profile</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile Summary & Menu */}
                    <div className="lg:col-span-1 space-y-6">
                        <ProfileCard
                            userData={userData}
                            getInitials={getInitials}
                            onEdit={handleEditProfile}
                        />
                        <ProfileMenu menuItems={menuItems} onLogout={openLogoutDialog} />
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <PersonalInfoCard userData={userData} />

                                {/* Recent Consultations Preview */}
                                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-primary" />
                                            <h2 className="text-xl font-heading font-bold">Recent Consultations</h2>
                                        </div>
                                        <button
                                            onClick={() => setActiveTab('consultations')}
                                            className="text-primary text-sm font-semibold hover:underline"
                                        >
                                            View All
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {consultationHistory.slice(0, 2).map((consultation) => (
                                            <ConsultationCard key={consultation.id} consultation={consultation} />
                                        ))}
                                    </div>
                                </div>

                                <SecurityCard userData={userData} />
                            </div>
                        )}

                        {/* Consultations Tab */}
                        {activeTab === 'consultations' && (
                            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                                <div className="flex items-center gap-2 mb-6">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <h2 className="text-xl font-heading font-bold">All Consultations</h2>
                                </div>

                                <div className="space-y-4">
                                    {consultationHistory.map((consultation) => (
                                        <ConsultationCard
                                            key={consultation.id}
                                            consultation={consultation}
                                            showDate
                                            showFullRating
                                        />
                                    ))}
                                </div>

                                {consultationHistory.length === 0 && (
                                    <div className="text-center py-12">
                                        <Clock className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-foreground mb-2">No Consultations Yet</h3>
                                        <p className="text-muted-foreground text-sm">Start your first consultation with an astrologer</p>
                                        <button
                                            onClick={() => navigate('/all-astrologers')}
                                            className="mt-6 px-6 py-2.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                                        >
                                            Find Astrologers
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Transactions Tab */}
                        {activeTab === 'transactions' && (
                            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                                <div className="flex items-center gap-2 mb-6">
                                    <Wallet className="w-5 h-5 text-primary" />
                                    <h2 className="text-xl font-heading font-bold">Transaction History</h2>
                                </div>

                                <div className="space-y-4">
                                    {transactions.map((transaction, index) => (
                                        <TransactionCard key={index} transaction={transaction} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />

            {/* Dialogs & Drawers */}
            <LogoutDialog
                isOpen={isLogoutDialogOpen}
                onClose={cancelLogout}
                onConfirm={confirmLogout}
            />

            <HelpSupportDialog
                isOpen={isHelpDialogOpen}
                onClose={() => setIsHelpDialogOpen(false)}
            />

            <FavoriteAstrologersDrawer
                isOpen={isFavoritesDrawerOpen}
                onClose={() => setIsFavoritesDrawerOpen(false)}
            />

            <NotificationsDrawer
                isOpen={isNotificationsDrawerOpen}
                onClose={() => setIsNotificationsDrawerOpen(false)}
            />

            <EditProfileDialog
                isOpen={isEditProfileDialogOpen}
                onClose={() => setIsEditProfileDialogOpen(false)}
                userData={userData}
                onSave={handleSaveProfile}
            />
        </div>
    );
};

export default UserProfilePage;

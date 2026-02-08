import { X, Bell, Check, Trash2, Clock } from 'lucide-react';

/**
 * NotificationsDrawer - A slide-in drawer showing user notifications
 * 
 * @param {boolean} isOpen - Whether the drawer is open
 * @param {function} onClose - Function to close the drawer
 */
const NotificationsDrawer = ({ isOpen, onClose }) => {
    // Mock notifications data
    const notifications = [
        {
            id: 1,
            type: 'consultation',
            title: 'Consultation Reminder',
            message: 'Your consultation with Pandit Sharma is scheduled in 30 minutes.',
            time: '5 min ago',
            read: false
        },
        {
            id: 2,
            type: 'offer',
            title: 'Special Offer! 🎉',
            message: 'Get 50% off on your first chat consultation. Use code FIRST50.',
            time: '1 hour ago',
            read: false
        },
        {
            id: 3,
            type: 'wallet',
            title: 'Wallet Credited',
            message: '₹100 has been added to your wallet as a referral bonus.',
            time: '2 hours ago',
            read: true
        },
        {
            id: 4,
            type: 'horoscope',
            title: 'Daily Horoscope',
            message: 'Your daily horoscope is ready! Check what the stars have in store for you.',
            time: '5 hours ago',
            read: true
        },
        {
            id: 5,
            type: 'system',
            title: 'Profile Updated',
            message: 'Your profile information has been successfully updated.',
            time: 'Yesterday',
            read: true
        }
    ];

    const unreadCount = notifications.filter(n => !n.read).length;

    const getNotificationColor = (type) => {
        switch (type) {
            case 'consultation': return 'bg-blue-500';
            case 'offer': return 'bg-green-500';
            case 'wallet': return 'bg-yellow-500';
            case 'horoscope': return 'bg-purple-500';
            case 'system': return 'bg-gray-500';
            default: return 'bg-primary';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-background h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full relative">
                            <Bell className="w-5 h-5 text-primary" />
                            {unreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
                                    {unreadCount}
                                </span>
                            )}
                        </div>
                        <div>
                            <h2 className="text-lg font-heading font-bold text-foreground">
                                Notifications
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/50">
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                        <Check className="w-4 h-4" />
                        Mark all as read
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Clear all
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12 px-4">
                            <div className="p-4 bg-muted rounded-full mb-4">
                                <Bell className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                No Notifications
                            </h3>
                            <p className="text-muted-foreground max-w-xs">
                                You're all caught up! We'll notify you when there's something new.
                            </p>
                        </div>
                    ) : (
                        <div>
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`p-4 border-b border-border hover:bg-muted/50 transition-colors cursor-pointer ${!notification.read ? 'bg-primary/5' : ''
                                        }`}
                                >
                                    <div className="flex gap-3">
                                        {/* Indicator */}
                                        <div className="flex-shrink-0 mt-1">
                                            <div className={`w-2 h-2 rounded-full ${notification.read ? 'bg-transparent' : getNotificationColor(notification.type)
                                                }`} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className={`font-semibold text-sm ${notification.read ? 'text-muted-foreground' : 'text-foreground'
                                                    }`}>
                                                    {notification.title}
                                                </h4>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                                                    <Clock className="w-3 h-3" />
                                                    {notification.time}
                                                </span>
                                            </div>
                                            <p className={`text-sm mt-1 ${notification.read ? 'text-muted-foreground/70' : 'text-muted-foreground'
                                                }`}>
                                                {notification.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-border bg-card">
                    <button className="w-full text-center py-3 text-primary font-semibold hover:bg-primary/10 rounded-xl transition-colors">
                        View All Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationsDrawer;

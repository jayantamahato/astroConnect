import { ChevronRight, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * ProfileMenu - Displays menu items with navigation and actions
 */
const ProfileMenu = ({ menuItems, onLogout }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            {menuItems.map((item, index) => (
                <button
                    key={index}
                    onClick={() => item.onClick ? item.onClick() : navigate(item.path)}
                    className={`w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-border' : ''
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {item.badge && (
                            <span className="text-sm text-primary font-semibold">{item.badge}</span>
                        )}
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                </button>
            ))}

            {/* Logout Button */}
            <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-destructive/5 transition-colors text-destructive border-t border-border"
            >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    );
};

export default ProfileMenu;

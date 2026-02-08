import { AlertTriangle } from 'lucide-react';

/**
 * LogoutDialog - A reusable confirmation dialog for logout action
 * 
 * @param {boolean} isOpen - Whether the dialog is open
 * @param {function} onClose - Function to close the dialog
 * @param {function} onConfirm - Function to confirm logout
 */
const LogoutDialog = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="relative bg-card border border-border rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl animate-in zoom-in-95 fade-in duration-200">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-destructive/10 rounded-full">
                        <AlertTriangle className="w-8 h-8 text-destructive" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-center text-foreground mb-2">
                    Logout
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                    Are you sure you want to logout from your account?
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 px-4 py-3 bg-destructive text-white rounded-xl font-semibold hover:bg-destructive/90 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutDialog;

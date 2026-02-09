import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

const DeleteConfirmationDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Dialog */}
            <div className="relative w-full max-w-sm bg-[#1A1A1A] border border-white/10 rounded-[2rem] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-2 rounded-full hover:bg-white/5 text-muted-foreground transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>

                    {/* Text */}
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                            {title || "Delete Profile?"}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {message || "Are you sure you want to remove this profile? This action cannot be undone."}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3 mt-8">
                        <button
                            onClick={onClose}
                            className="w-full py-4 px-6 rounded-xl border border-white/10 text-foreground font-bold hover:bg-white/5 transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="w-full py-4 px-6 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 shadow-[0_10px_20px_rgba(239,68,68,0.2)] transition-all active:scale-95"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationDialog;

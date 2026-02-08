import React from 'react';
import { X, AlertTriangle, LogOut } from 'lucide-react';

/**
 * EndChatDialog - Confirmation dialog for ending a chat session
 */
const EndChatDialog = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card w-full max-w-sm rounded-[2rem] shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-foreground mb-3">End Session?</h2>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                        Are you sure you want to end this consultation? This action cannot be undone.
                    </p>

                    <div className="space-y-3">
                        <button
                            onClick={onConfirm}
                            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg shadow-red-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <LogOut className="w-5 h-5" />
                            Yes, End Chat
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-4 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-2xl transition-all"
                        >
                            No, Continue Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndChatDialog;

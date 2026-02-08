import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle, Wallet, MessageSquare } from 'lucide-react';

const ChatEstablishmentDialog = ({ isOpen, onClose, astrologer, userBalance, onConnect }) => {
    const [step, setStep] = useState('status'); // status, balance, establishing, ready, error
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            startFlow();
        } else {
            setStep('status');
            setError(null);
        }
    }, [isOpen]);

    const startFlow = async () => {
        // Step 1: Check Astrologer Status
        setStep('status');
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!astrologer.isOnline) {
            setStep('error');
            setError('Astrologer is currently offline or busy. Please try again later.');
            return;
        }

        // Step 2: Check User Balance
        setStep('balance');
        await new Promise(resolve => setTimeout(resolve, 1500));

        const minBalanceRequired = (astrologer.pricing?.chat?.discounted || 20) * 5; // Require 5 mins
        if (userBalance < minBalanceRequired) {
            setStep('error');
            setError(`Insufficient balance. You need at least ₹${minBalanceRequired} to start a 5-minute session.`);
            return;
        }

        // Step 3: Establishing Connection
        setStep('establishing');
        await new Promise(resolve => setTimeout(resolve, 2000));

        setStep('ready');
        await new Promise(resolve => setTimeout(resolve, 1000));
        onConnect();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card w-full max-w-md rounded-3xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            Establishing Connection
                        </h2>
                        {step === 'error' && (
                            <button onClick={onClose} className="p-1 hover:bg-muted rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Step 1: Astrologer Status */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'status' ? 'bg-primary/20 text-primary' :
                                        (step === 'error' && error.includes('offline') ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500')
                                    }`}>
                                    {step === 'status' ? <Loader2 className="w-4 h-4 animate-spin" /> :
                                        (step === 'error' && error.includes('offline') ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />)}
                                </div>
                                <span className={`text-sm font-medium ${step === 'status' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Checking astrologer availability...
                                </span>
                            </div>
                            {step !== 'status' && !error?.includes('offline') && <span className="text-xs font-bold text-green-500">Online</span>}
                        </div>

                        {/* Step 2: Wallet Balance */}
                        <div className={`flex items-center justify-between transition-opacity duration-300 ${['status'].includes(step) ? 'opacity-30' : 'opacity-100'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'balance' ? 'bg-primary/20 text-primary' :
                                        (step === 'error' && error.includes('balance') ? 'bg-red-500/10 text-red-500' :
                                            (['status'].includes(step) ? 'bg-muted text-muted-foreground' : 'bg-green-500/10 text-green-500'))
                                    }`}>
                                    {step === 'balance' ? <Loader2 className="w-4 h-4 animate-spin" /> :
                                        (step === 'error' && error.includes('balance') ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />)}
                                </div>
                                <span className={`text-sm font-medium ${step === 'balance' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Verifying wallet balance...
                                </span>
                            </div>
                            {['establishing', 'ready'].includes(step) && <span className="text-xs font-bold text-green-500">₹{userBalance} Available</span>}
                        </div>

                        {/* Step 3: Establish Protocol */}
                        <div className={`flex items-center justify-between transition-opacity duration-300 ${['status', 'balance', 'error'].includes(step) ? 'opacity-30' : 'opacity-100'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'establishing' ? 'bg-primary/20 text-primary' :
                                        (['status', 'balance', 'error'].includes(step) ? 'bg-muted text-muted-foreground' : 'bg-green-500/10 text-green-500')
                                    }`}>
                                    {step === 'establishing' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                </div>
                                <span className={`text-sm font-medium ${step === 'establishing' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Securing chat room...
                                </span>
                            </div>
                        </div>
                    </div>

                    {step === 'error' && (
                        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3 animate-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                                {error.includes('balance') && (
                                    <button
                                        onClick={() => { onClose(); /* Navigate to wallet recharge */ }}
                                        className="flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                                    >
                                        <Wallet className="w-3 h-3" />
                                        Recharge Wallet
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {step === 'ready' && (
                        <div className="mt-8 text-center animate-in fade-in duration-500">
                            <p className="text-lg font-bold text-foreground">Connection Established!</p>
                            <p className="text-sm text-muted-foreground">Redirecting to chat...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatEstablishmentDialog;

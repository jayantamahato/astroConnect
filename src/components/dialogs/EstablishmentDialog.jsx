import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, AlertCircle, Wallet, MessageSquare, Phone, Video, ShieldCheck } from 'lucide-react';

/**
 * EstablishmentDialog - Premium animated connection dialog for Chat, Voice, and Video
 * @param {string} type - 'chat', 'voice', or 'video'
 */
const EstablishmentDialog = ({ isOpen, onClose, astrologer, userBalance, onConnect, type = 'chat' }) => {
    const [step, setStep] = useState('status'); // status, balance, establishing, ready, error
    const [error, setError] = useState(null);

    const config = {
        chat: {
            title: 'Establishing Connection',
            icon: MessageSquare,
            step3: 'Securing chat room...',
            successMsg: 'Chat Redirecting...',
            color: 'text-primary'
        },
        voice: {
            title: 'Connecting Voice Call',
            icon: Phone,
            step3: 'Setting up secure line...',
            successMsg: 'Call Connecting...',
            color: 'text-green-500'
        },
        video: {
            title: 'Initializing Video Link',
            icon: Video,
            step3: 'Activating video stream...',
            successMsg: 'Starting Video Session...',
            color: 'text-purple-500'
        }
    }[type];

    const isMounted = React.useRef(true);

    useEffect(() => {
        isMounted.current = isOpen;
        if (isOpen) {
            startFlow();
        } else {
            setStep('status');
            setError(null);
        }
    }, [isOpen]);

    const startFlow = async () => {
        if (!isMounted.current) return;

        // Step 1: Check Astrologer Status
        setStep('status');
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (!isMounted.current) return;

        const isOffline = astrologer.status === 'offline' || astrologer.isOnline === false;

        if (isOffline) {
            setStep('error');
            setError('Astrologer is currently offline. Please try again later.');
            return;
        }

        // Step 2: Check User Balance
        setStep('balance');
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (!isMounted.current) return;

        let basePrice = astrologer.price;
        if (!basePrice && astrologer.pricing) {
            const pricingType = type === 'video' ? 'video' : (type === 'voice' ? 'call' : 'chat');
            const targetPricing = astrologer.pricing[pricingType] || astrologer.pricing.call || astrologer.pricing.chat;
            basePrice = targetPricing?.discounted || targetPricing?.original || targetPricing;
        }

        const pricePerMin = parseInt((basePrice || '30').toString().replace(/[^0-9]/g, ''));
        const multiplier = type === 'video' ? 1.5 : 1;
        const minBalanceRequired = pricePerMin * multiplier * 5; // Require 5 mins

        if (userBalance < minBalanceRequired) {
            setStep('error');
            setError(`Insufficient balance. You need at least ₹${minBalanceRequired.toFixed(0)} for a 5-minute ${type} session.`);
            return;
        }

        // Step 3: Establishing Connection
        setStep('establishing');
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!isMounted.current) return;

        setStep('ready');
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!isMounted.current) return;

        onConnect();
    };

    if (!isOpen) return null;

    const Icon = config.icon;

    return (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 pointer-events-auto" onClick={onClose} />

            <div className="relative bg-card w-full max-w-md rounded-[2.5rem] shadow-2xl border border-white/5 overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="p-10">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-heading font-bold flex items-center gap-3 text-foreground tracking-tight">
                            <div className={`p-2 rounded-xl bg-muted/50 ${config.color}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            {config.title}
                        </h2>
                        {step === 'error' && (
                            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        )}
                    </div>

                    <div className="space-y-8">
                        {/* Step 1: Astrologer Status */}
                        <div className="flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${step === 'status' ? 'bg-primary/20 text-primary ring-4 ring-primary/10' :
                                    (step === 'error' && error.includes('offline') ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500')
                                    }`}>
                                    {step === 'status' ? <Loader2 className="w-5 h-5 animate-spin" /> :
                                        (step === 'error' && error.includes('offline') ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />)}
                                </div>
                                <span className={`text-base font-medium ${step === 'status' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Checking availability...
                                </span>
                            </div>
                            {step !== 'status' && !error?.includes('offline') && (
                                <span className="text-xs font-black uppercase tracking-widest text-green-500 px-2 py-1 rounded bg-green-500/10">Online</span>
                            )}
                        </div>

                        {/* Step 2: Wallet Balance */}
                        <div className={`flex items-center justify-between transition-all duration-500 ${['status'].includes(step) ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${step === 'balance' ? 'bg-amber-500/20 text-amber-500 ring-4 ring-amber-500/10' :
                                    (step === 'error' && error.includes('balance') ? 'bg-red-500/10 text-red-500' :
                                        (['status'].includes(step) ? 'bg-muted text-muted-foreground' : 'bg-green-500/10 text-green-500'))
                                    }`}>
                                    {step === 'balance' ? <Loader2 className="w-5 h-5 animate-spin" /> :
                                        (step === 'error' && error.includes('balance') ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />)}
                                </div>
                                <span className={`text-base font-medium ${step === 'balance' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Verifying balance...
                                </span>
                            </div>
                            {['establishing', 'ready'].includes(step) && (
                                <span className="text-xs font-black uppercase tracking-widest text-green-500 px-2 py-1 rounded bg-green-500/10">₹{userBalance} Valid</span>
                            )}
                        </div>

                        {/* Step 3: Establish Protocol */}
                        <div className={`flex items-center justify-between transition-all duration-500 ${['status', 'balance', 'error'].includes(step) ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${step === 'establishing' ? 'bg-blue-500/20 text-blue-500 ring-4 ring-blue-500/10' :
                                    (['status', 'balance', 'error'].includes(step) ? 'bg-muted text-muted-foreground' : 'bg-green-500/10 text-green-500')
                                    }`}>
                                    {step === 'establishing' ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                                </div>
                                <span className={`text-base font-medium ${step === 'establishing' ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {config.step3}
                                </span>
                            </div>
                        </div>
                    </div>

                    {step === 'error' && (
                        <div className="mt-10 p-6 bg-red-500/10 border border-red-500/20 rounded-[2rem] space-y-4 animate-in slide-in-from-top-4 duration-300">
                            <div className="flex gap-3">
                                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                                <p className="text-sm font-bold text-red-600 dark:text-red-400 leading-relaxed">{error}</p>
                            </div>
                            {error.includes('balance') && (
                                <button
                                    onClick={() => { onClose(); /* Navigate to wallet recharge */ }}
                                    className="w-full py-3 rounded-xl bg-red-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                                >
                                    Recharge Wallet
                                </button>
                            )}
                        </div>
                    )}

                    {step === 'ready' && (
                        <div className="mt-10 text-center animate-in fade-in zoom-in-90 duration-500">
                            <div className="inline-flex items-center gap-2 text-green-500 font-black uppercase tracking-widest text-xs mb-2">
                                <ShieldCheck className="w-4 h-4" /> Secure Channel Up
                            </div>
                            <p className="text-2xl font-heading font-normal text-foreground">{config.successMsg}</p>
                        </div>
                    )}
                </div>

                {/* Visual Accent */}
                <div className={`h-1.5 w-full bg-muted overflow-hidden relative ${step === 'ready' ? 'bg-green-500/20' : ''}`}>
                    <div className={`absolute inset-y-0 left-0 transition-all duration-1000 ${step === 'status' ? 'w-[33%] bg-primary' :
                        step === 'balance' ? 'w-[66%] bg-amber-500' :
                            step === 'establishing' ? 'w-[90%] bg-blue-500' :
                                step === 'ready' ? 'w-full bg-green-500' : 'w-0'
                        }`} />
                </div>
            </div>
        </div>
    );
};

export default EstablishmentDialog;

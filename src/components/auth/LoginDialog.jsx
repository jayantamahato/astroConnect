import { useState, useEffect, useRef } from 'react';
import { X, Phone, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    closeLogin,
    setLoginStep,
    setPhoneNumber,
    loginStart,
    loginSuccess,
    loginFailure
} from '../../features/auth/authSlice';

const LoginDialog = () => {
    const dispatch = useAppDispatch();
    const { isLoginOpen, loginStep, phoneNumber, isLoading } = useAppSelector((state) => state.auth);
    const [localPhone, setLocalPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const otpInputRefs = useRef([]);

    // Reset local state when modal opens
    useEffect(() => {
        if (isLoginOpen) {
            setLocalPhone('');
            setOtp(['', '', '', '']);
            setTimer(30);
        }
    }, [isLoginOpen]);

    // Timer for OTP resend
    useEffect(() => {
        let interval;
        if (loginStep === 'otp' && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [loginStep, timer]);

    if (!isLoginOpen) return null;

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (localPhone.length < 10) return;

        dispatch(loginStart());
        // Simulate API call
        setTimeout(() => {
            dispatch(setPhoneNumber(localPhone));
            dispatch(setLoginStep('otp'));
            dispatch(loginFailure(null)); // Clear loading state
        }, 1500);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        if (enteredOtp.length < 4) return;

        dispatch(loginStart());
        // Simulate API verification
        setTimeout(() => {
            dispatch(loginSuccess({ name: 'User', phone: phoneNumber }));
        }, 1500);
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value !== '' && index < 3) {
            otpInputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpInputRefs.current[index - 1].focus();
        }
    };

    return (
        <AnimatePresence>
            {isLoginOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => dispatch(closeLogin())}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md overflow-hidden bg-background rounded-3xl shadow-2xl border border-border z-10"
                    >
                        {/* Decorative Header */}
                        <div className="h-2 w-full bg-gradient-to-r from-primary via-primary to-secondary" />

                        {/* Close Button */}
                        <button
                            onClick={() => dispatch(closeLogin())}
                            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 pt-6">
                            <AnimatePresence mode="wait">
                                {loginStep === 'phone' ? (
                                    <motion.div
                                        key="phone"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                                <Phone className="w-8 h-8" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                                            <p className="text-muted-foreground mt-2">
                                                Enter your mobile number to continue
                                            </p>
                                        </div>

                                        <form onSubmit={handleSendOtp} className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground ml-1">
                                                    Mobile Number
                                                </label>
                                                <div className="relative group">
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium pr-3 border-r border-border h-5 flex items-center">
                                                        🇮🇳 +91
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        value={localPhone}
                                                        onChange={(e) => {
                                                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                            setLocalPhone(val);
                                                        }}
                                                        className="w-full pl-20 pr-4 py-3 bg-muted/30 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium text-lg placeholder:text-muted-foreground/50"
                                                        placeholder="00000 00000"
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                disabled={localPhone.length < 10 || isLoading}
                                                className="w-full py-3.5 px-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 group"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <>
                                                        Get OTP
                                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        <p className="text-xs text-center text-muted-foreground mt-6">
                                            By continuing, you agree to our <span className="text-primary cursor-pointer hover:underline">Terms</span> & <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="otp"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-center mb-8">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                                                <ShieldCheck className="w-8 h-8" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-foreground">Verify OTP</h2>
                                            <p className="text-muted-foreground mt-2">
                                                We sent a code to <span className="text-foreground font-semibold">+91 {phoneNumber}</span>
                                            </p>
                                            <button
                                                onClick={() => dispatch(setLoginStep('phone'))}
                                                className="text-xs text-primary font-medium hover:underline mt-1"
                                            >
                                                Change Number
                                            </button>
                                        </div>

                                        <form onSubmit={handleVerifyOtp} className="space-y-8">
                                            <div className="flex justify-center gap-4">
                                                {otp.map((digit, idx) => (
                                                    <input
                                                        key={idx}
                                                        ref={(el) => (otpInputRefs.current[idx] = el)}
                                                        type="text"
                                                        maxLength={1}
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                        onKeyDown={(e) => handleKeyDown(idx, e)}
                                                        className="w-14 h-16 text-center text-3xl font-bold bg-muted/30 border border-input rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none caret-primary"
                                                    />
                                                ))}
                                            </div>

                                            <button
                                                disabled={otp.join('').length < 4 || isLoading}
                                                className="w-full py-3.5 px-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    "Verify & Login"
                                                )}
                                            </button>

                                            <div className="text-center">
                                                {timer > 0 ? (
                                                    <p className="text-sm text-muted-foreground">
                                                        Resend code in <span className="font-medium text-foreground">{timer}s</span>
                                                    </p>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => setTimer(30)}
                                                        className="text-sm font-medium text-primary hover:underline"
                                                    >
                                                        Resend Code
                                                    </button>
                                                )}
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoginDialog;

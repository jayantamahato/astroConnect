import { ShieldCheck } from 'lucide-react';

/**
 * WalletBalanceCard - Displays the wallet balance with gradient styling
 */
const WalletBalanceCard = ({ balance = 500 }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary via-orange-500 to-secondary shadow-lg text-white">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <p className="text-white/80 font-medium mb-1">Total Balance</p>
                    <h2 className="text-5xl font-bold tracking-tight">₹ {balance.toFixed(2)}</h2>
                </div>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-white" />
                        <span className="text-sm font-semibold">100% Secure</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletBalanceCard;

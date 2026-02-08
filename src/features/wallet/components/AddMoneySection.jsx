import { Plus, ArrowUpRight, Zap } from 'lucide-react';

/**
 * AddMoneySection - Form section to add money to wallet
 */
const AddMoneySection = ({ amount, setAmount }) => {
    const suggestedAmounts = [100, 200, 500, 1000, 2000, 5000];

    return (
        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Add Money to Wallet
            </h3>

            <div className="space-y-6">
                {/* Input Amount */}
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">₹</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                        className="w-full pl-10 pr-4 py-4 text-2xl font-bold bg-muted/30 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none no-spinner"
                    />
                </div>

                {/* Quick Add Buttons */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {suggestedAmounts.map((val) => (
                        <button
                            key={val}
                            onClick={() => setAmount(val.toString())}
                            className="py-2 px-1 rounded-lg border border-border hover:border-primary hover:bg-primary/5 text-sm font-medium transition-all"
                        >
                            + ₹{val}
                        </button>
                    ))}
                </div>

                {/* Offer Banner */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-sm font-bold text-green-700 dark:text-green-400">Get 10% Extra on first recharge!</p>
                        <p className="text-xs text-green-600/80 dark:text-green-500/80">Use code: FIRST10 | Min. recharge ₹200</p>
                    </div>
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-lg shadow-lg shadow-primary/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
                    Proceed to Add Money
                    <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default AddMoneySection;

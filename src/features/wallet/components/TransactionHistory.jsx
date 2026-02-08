import { History, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

/**
 * TransactionItem - Single transaction row
 */
const TransactionItem = ({ transaction }) => {
    const isCredit = transaction.type === 'credit';

    return (
        <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-xl transition-colors cursor-default border border-transparent hover:border-border">
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCredit
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    {isCredit ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                    <p className="font-semibold text-sm text-foreground line-clamp-1">{transaction.title}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
            </div>
            <div className={`font-bold text-sm ${isCredit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {isCredit ? '+' : '-'} ₹{transaction.amount}
            </div>
        </div>
    );
};

/**
 * TransactionHistory - Displays list of transactions
 */
const TransactionHistory = ({ transactions }) => {
    return (
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm h-full max-h-[600px] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-card z-10 pb-4 border-b border-border">
                <h3 className="text-xl font-heading font-bold flex items-center gap-2">
                    <History className="w-5 h-5 text-primary" />
                    History
                </h3>
                <button className="text-xs font-medium text-primary hover:underline">View All</button>
            </div>

            <div className="space-y-4">
                {transactions.map((txn) => (
                    <TransactionItem key={txn.id} transaction={txn} />
                ))}

                <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground">Showing last 10 transactions</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;

import { Wallet } from 'lucide-react';

/**
 * TransactionCard - Displays a single transaction item
 */
const TransactionCard = ({ transaction }) => {
    const isCredit = transaction.type === 'credit';

    return (
        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${isCredit ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    <Wallet className={`w-5 h-5 ${isCredit ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <div>
                    <p className="font-medium text-foreground">{transaction.label}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`font-semibold ${isCredit ? 'text-green-500' : 'text-foreground'}`}>
                    {isCredit ? '+' : '-'}₹{transaction.amount}
                </p>
                <span className="text-xs text-muted-foreground capitalize">{transaction.status}</span>
            </div>
        </div>
    );
};

export default TransactionCard;

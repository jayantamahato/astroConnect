import { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import SeoMeta from '../../../components/seo/SeoMeta';
import {
    WalletBalanceCard,
    AddMoneySection,
    TransactionHistory
} from '../components';

const WalletPage = () => {
    const [amount, setAmount] = useState('');
    const [transactions] = useState([
        { id: 1, type: 'credit', title: 'Added Money', date: 'Today, 2:30 PM', amount: 500, status: 'success' },
        { id: 2, type: 'debit', title: 'Consultation with Pandit Sharma', date: 'Yesterday, 10:15 AM', amount: 300, status: 'success' },
        { id: 3, type: 'credit', title: 'Welcome Bonus', date: '05 Feb, 9:00 AM', amount: 100, status: 'success' },
        { id: 4, type: 'debit', title: 'Tarot Reading', date: '01 Feb, 6:45 PM', amount: 250, status: 'success' },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <SeoMeta
                title="My Wallet | Add Money & View Transactions | AstroConnect"
                description="Manage your AstroConnect wallet. Add money securely, view transaction history, and pay for astrology consultations seamlessly."
                keywords="astrology wallet, recharge wallet, secure payment, transaction history"
            />
            <Navbar />

            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Wallet Balance & Add Money */}
                    <div className="lg:col-span-2 space-y-8">
                        <WalletBalanceCard balance={500} />
                        <AddMoneySection amount={amount} setAmount={setAmount} />
                    </div>

                    {/* Right Column: Transaction History */}
                    <div className="lg:col-span-1">
                        <TransactionHistory transactions={transactions} />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WalletPage;

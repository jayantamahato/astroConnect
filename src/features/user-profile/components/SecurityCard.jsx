import { Shield } from 'lucide-react';

/**
 * SecurityCard - Displays user's security/verification status
 */
const SecurityCard = ({ userData }) => {
    const securityItems = [
        { label: 'Phone Verified', value: userData.phone, verified: true },
        { label: 'Email Verified', value: userData.email, verified: true },
    ];

    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-heading font-bold">Security</h2>
            </div>

            <div className="space-y-4">
                {securityItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                        <div>
                            <p className="font-medium text-foreground">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                        <span className={`flex items-center gap-1 text-sm font-medium ${item.verified ? 'text-green-500' : 'text-yellow-500'
                            }`}>
                            <span className={`w-2 h-2 rounded-full ${item.verified ? 'bg-green-500' : 'bg-yellow-500'
                                }`}></span>
                            {item.verified ? 'Verified' : 'Pending'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityCard;

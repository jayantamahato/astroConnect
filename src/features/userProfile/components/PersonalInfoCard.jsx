import { User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

/**
 * PersonalInfoCard - Displays user's personal information
 */
const PersonalInfoCard = ({ userData }) => {
    const infoItems = [
        { icon: Mail, label: 'Email', value: userData.email },
        { icon: Phone, label: 'Phone', value: userData.phone },
        { icon: Calendar, label: 'Date of Birth', value: userData.dateOfBirth },
        { icon: MapPin, label: 'Location', value: userData.location },
    ];

    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-heading font-bold">Personal Information</h2>
                </div>
                <button className="text-primary text-sm font-semibold hover:underline">Edit</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-muted/50 rounded-lg">
                            <item.icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                            <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalInfoCard;

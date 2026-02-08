import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const PrivacyPolicyPage = () => {
    const lastUpdated = "February 1, 2026";

    const sections = [
        {
            title: "1. Information We Collect",
            content: `We collect information you provide directly to us, including:
            
• Personal information such as name, email address, phone number, and date of birth
• Profile information including your birth details for astrological services
• Payment information when you make purchases
• Communications you send to us or through our platform
• Usage data and preferences`
        },
        {
            title: "2. How We Use Your Information",
            content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Connect you with astrologers and facilitate consultations
• Send promotional communications (with your consent)
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions
• Personalize your experience and provide astrological insights`
        },
        {
            title: "3. Information Sharing",
            content: `We may share your information in the following circumstances:

• With astrologers you choose to consult with
• With service providers who assist in our operations
• In response to legal requirements or to protect our rights
• In connection with a merger, acquisition, or sale of assets
• With your consent or at your direction

We do not sell your personal information to third parties.`
        },
        {
            title: "4. Data Security",
            content: `We implement appropriate security measures to protect your personal information, including:

• Encryption of data in transit and at rest
• Regular security assessments and audits
• Access controls and authentication measures
• Secure payment processing through certified gateways
• Regular backup and disaster recovery procedures`
        },
        {
            title: "5. Your Rights and Choices",
            content: `You have the right to:

• Access, update, or delete your personal information
• Opt-out of marketing communications
• Request a copy of your data
• Withdraw consent for data processing
• Lodge a complaint with a supervisory authority

To exercise these rights, contact us at privacy@astroconnect.com`
        },
        {
            title: "6. Cookies and Tracking",
            content: `We use cookies and similar technologies to:

• Keep you logged in
• Remember your preferences
• Understand how you use our services
• Provide personalized content and ads
• Analyze our traffic and performance

You can manage cookie preferences through your browser settings.`
        },
        {
            title: "7. Children's Privacy",
            content: `Our services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
        },
        {
            title: "8. International Data Transfers",
            content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.`
        },
        {
            title: "9. Changes to This Policy",
            content: `We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.`
        },
        {
            title: "10. Contact Us",
            content: `If you have any questions about this Privacy Policy, please contact us:

Email: privacy@astroconnect.com
Phone: +91 98765 43210
Address: 123 Cosmic Tower, Sector 62, Noida, UP 201301, India`
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                        <p className="text-muted-foreground leading-relaxed">
                            At AstroConnect, we are committed to protecting your privacy and ensuring the security
                            of your personal information. This Privacy Policy explains how we collect, use, disclose,
                            and safeguard your information when you use our website and mobile applications.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-card border border-border rounded-2xl p-6">
                                <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                                    {section.title}
                                </h2>
                                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;

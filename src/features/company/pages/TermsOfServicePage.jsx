import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const TermsOfServicePage = () => {
    const lastUpdated = "February 1, 2026";

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: `By accessing or using AstroConnect's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users of our platform, including astrologers, consultants, and customers.`
        },
        {
            title: "2. Description of Services",
            content: `AstroConnect provides an online platform connecting users with professional astrologers for consultations through:

• Chat consultations
• Voice call consultations
• Video call consultations
• Written reports and horoscopes
• Live streaming sessions

We act as an intermediary platform and do not directly provide astrological services ourselves.`
        },
        {
            title: "3. User Accounts",
            content: `To access our services, you must:

• Be at least 18 years of age
• Provide accurate and complete registration information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorized use
• Accept responsibility for all activities under your account

We reserve the right to suspend or terminate accounts that violate these terms.`
        },
        {
            title: "4. Payments and Refunds",
            content: `• All prices are displayed in Indian Rupees (INR)
• Payment is required before consultation services
• You can add funds to your wallet for future use
• Refunds are processed within 5-7 business days
• Refund requests must be made within 24 hours of consultation
• Completed satisfactory consultations are non-refundable

We use secure payment gateways and do not store your payment information.`
        },
        {
            title: "5. User Conduct",
            content: `Users agree not to:

• Provide false or misleading information
• Harass, abuse, or harm other users or astrologers
• Use the platform for illegal purposes
• Attempt to circumvent payment systems
• Share account credentials with others
• Record consultations without consent
• Post inappropriate or offensive content
• Violate any applicable laws or regulations`
        },
        {
            title: "6. Astrologer Services",
            content: `• Astrologers are independent contractors, not employees
• We verify astrologer credentials but do not guarantee accuracy
• Astrological advice is for entertainment and guidance only
• Consultations should not replace professional medical, legal, or financial advice
• Users should exercise personal judgment in applying advice received`
        },
        {
            title: "7. Intellectual Property",
            content: `• All content on our platform is our intellectual property
• Users may not reproduce, distribute, or modify our content
• User-generated content remains the property of the user
• By posting content, you grant us a license to use it
• We respect intellectual property rights and expect users to do the same`
        },
        {
            title: "8. Disclaimer of Warranties",
            content: `Our services are provided "as is" without warranties of any kind. We do not guarantee:

• The accuracy of astrological predictions or advice
• Uninterrupted or error-free service
• The behavior or qualifications of astrologers
• Results from using our services
• Compatibility with all devices or browsers`
        },
        {
            title: "9. Limitation of Liability",
            content: `To the maximum extent permitted by law, AstroConnect shall not be liable for:

• Indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages arising from user reliance on astrological advice
• Technical issues or service interruptions
• Actions of third-party astrologers or users

Our total liability shall not exceed the amount paid by you in the last 12 months.`
        },
        {
            title: "10. Indemnification",
            content: `You agree to indemnify and hold harmless AstroConnect, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:

• Your use of our services
• Your violation of these terms
• Your violation of any third-party rights
• Any content you post or share on our platform`
        },
        {
            title: "11. Modifications to Terms",
            content: `We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.

We will notify users of material changes via email or in-app notification.`
        },
        {
            title: "12. Governing Law",
            content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.`
        },
        {
            title: "13. Contact Information",
            content: `For questions about these Terms of Service, please contact us:

Email: legal@astroconnect.com
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
                        Terms of <span className="text-primary">Service</span>
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
                            Welcome to AstroConnect. These Terms of Service ("Terms") govern your use of our
                            website, mobile applications, and services. Please read these terms carefully
                            before using our platform.
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

export default TermsOfServicePage;

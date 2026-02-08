import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Office",
            lines: ["123 Cosmic Tower, Sector 62", "Noida, Uttar Pradesh 201301", "India"]
        },
        {
            icon: Phone,
            title: "Phone",
            lines: ["+91 98765 43210", "+91 11 4567 8900"]
        },
        {
            icon: Mail,
            title: "Email",
            lines: ["support@astroconnect.com", "hello@astroconnect.com"]
        },
        {
            icon: Clock,
            title: "Working Hours",
            lines: ["Monday - Saturday", "9:00 AM - 9:00 PM IST"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions or need assistance? We're here to help!
                        Reach out to us through any of the channels below.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                                    <info.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading font-bold text-foreground mb-2">
                                    {info.title}
                                </h3>
                                {info.lines.map((line, i) => (
                                    <p key={i} className="text-sm text-muted-foreground">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-foreground">
                                    Send us a Message
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map */}
                        <div className="bg-card border border-border rounded-2xl overflow-hidden h-[500px] lg:h-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0534233498837!2d77.36499731508256!3d28.627981282422827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456!5e0!3m2!1sen!2sin!4v1635789541234!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="AstroConnect Office Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ CTA */}
            <section className="py-12 px-4 bg-card">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                        Have More Questions?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Check out our FAQ section for quick answers to common questions.
                    </p>
                    <button className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                        View FAQs
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUsPage;

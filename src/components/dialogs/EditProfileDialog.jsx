import React, { useState, useEffect } from 'react';
import { X, Camera, User, Mail, Phone, Calendar, MapPin, Save } from 'lucide-react';

/**
 * EditProfileDialog - A premium dialog for editing user profile information
 */
const EditProfileDialog = ({ isOpen, onClose, userData, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        location: '',
        avatar: null
    });

    useEffect(() => {
        if (userData && isOpen) {
            setFormData({
                name: userData.name || '',
                email: userData.email || '',
                phone: userData.phone || '',
                dateOfBirth: userData.dateOfBirth || '',
                location: userData.location || '',
                avatar: userData.avatar || null
            });
        }
    }, [userData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card w-full max-w-2xl rounded-3xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="relative h-32 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-card/50 hover:bg-card text-foreground rounded-full transition-colors z-20"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute -bottom-12 left-8 p-1 bg-card rounded-full shadow-lg border-4 border-card z-10">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted group">
                            {formData.avatar ? (
                                <img src={formData.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                                    <span className="text-2xl font-bold text-white">
                                        {formData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                    </span>
                                </div>
                            )}
                            <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 pt-16 space-y-6">
                    <div className="flex flex-col gap-2 mb-4">
                        <h2 className="text-2xl font-heading font-bold text-foreground">Edit Profile</h2>
                        <p className="text-muted-foreground text-sm">Update your personal information to get more accurate consultations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all opacity-70"
                                placeholder="Email address"
                                disabled
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="Phone number"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                Date of Birth
                            </label>
                            <input
                                type="text"
                                value={formData.dateOfBirth}
                                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="DD Month YYYY"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                Location
                            </label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="City, Country"
                            />
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-xl border border-border hover:bg-muted font-semibold transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 font-bold flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Save className="w-4 h-4" />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileDialog;

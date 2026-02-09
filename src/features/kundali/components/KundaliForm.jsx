import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import CitySearchDrawer from '../../../components/drawers/CitySearchDrawer';

const KundaliForm = () => {
    const navigate = useNavigate();
    const [isCityDrawerOpen, setIsCityDrawerOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        gender: 'Male',
        birthDate: '',
        birthHour: '',
        birthMin: '',
        birthPeriod: 'AM',
        birthPlace: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    const handleCitySelect = (city) => {
        handleInputChange('birthPlace', city);
        setIsCityDrawerOpen(false);
    };

    const handleDateChange = (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 8) val = val.slice(0, 8);

        let formatted = val;
        if (val.length > 2 && val.length <= 4) {
            formatted = `${val.slice(0, 2)}/${val.slice(2)}`;
        } else if (val.length > 4) {
            formatted = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
        }

        handleInputChange('birthDate', formatted);
    };

    const handleTimeInput = (field, value, max) => {
        const val = value.replace(/\D/g, '');
        if (val === '' || (parseInt(val) <= max && val.length <= 2)) {
            handleInputChange(field, val);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.birthDate)) newErrors.birthDate = 'Enter valid date (MM/DD/YYYY)';
        if (!formData.birthHour || parseInt(formData.birthHour) > 12 || parseInt(formData.birthHour) < 1) newErrors.birthTime = 'Invalid hour';
        if (!formData.birthMin || parseInt(formData.birthMin) > 59) newErrors.birthTime = 'Invalid minutes';
        if (!formData.birthPlace.trim()) newErrors.birthPlace = 'Birth place is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate('/services/kundali/result');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
                <div className="space-y-8">
                    {/* Full Name */}
                    <div className="space-y-2.5">
                        <label className={`text-[12px] font-bold uppercase tracking-widest ${errors.fullName ? 'text-red-500' : 'text-muted-foreground'}`}>
                            Full Name {errors.fullName && <span className="lowercase font-normal ml-2 opacity-70">({errors.fullName})</span>}
                        </label>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Enter your full name"
                            className={`w-full bg-muted/40 border rounded-xl px-5 py-4 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/30 font-medium ${errors.fullName ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-primary/50'}`}
                        />
                    </div>

                    {/* Gender */}
                    <div className="space-y-2.5">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Gender</label>
                        <div className="grid grid-cols-3 gap-4">
                            {['Male', 'Female', 'Other'].map((g) => (
                                <button
                                    type="button"
                                    key={g}
                                    onClick={() => handleInputChange('gender', g)}
                                    className={`py-4 rounded-xl border transition-all font-bold flex items-center justify-center gap-3 ${formData.gender === g
                                        ? "border-primary bg-primary/5 text-foreground"
                                        : "border-border bg-muted/40 text-muted-foreground"
                                        }`}
                                >
                                    <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${formData.gender === g ? "border-primary" : "border-white/20"
                                        }`}>
                                        {formData.gender === g && <div className="w-2 h-2 rounded-full bg-primary" />}
                                    </div>
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Birth Date */}
                    <div className="space-y-2.5">
                        <label className={`text-[12px] font-bold uppercase tracking-widest ${errors.birthDate ? 'text-red-500' : 'text-muted-foreground'}`}>
                            Birth Date {errors.birthDate && <span className="lowercase font-normal ml-2 opacity-70">({errors.birthDate})</span>}
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={formData.birthDate}
                                onChange={handleDateChange}
                                placeholder="MM/DD/YYYY"
                                className={`w-full bg-muted/40 border rounded-xl px-5 py-4 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/30 font-medium ${errors.birthDate ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-primary/50'}`}
                            />
                            <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 opacity-70" />
                        </div>
                    </div>

                    {/* Birth Time */}
                    <div className="space-y-2.5">
                        <label className={`text-[12px] font-bold uppercase tracking-widest ${errors.birthTime ? 'text-red-500' : 'text-muted-foreground'}`}>
                            Birth Time {errors.birthTime && <span className="lowercase font-normal ml-2 opacity-70">({errors.birthTime})</span>}
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                            <input
                                type="text"
                                inputMode="numeric"
                                value={formData.birthHour}
                                onChange={(e) => handleTimeInput('birthHour', e.target.value, 12)}
                                placeholder="Hour"
                                className={`w-full bg-muted/40 border rounded-xl px-5 py-4 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/40 text-center font-medium ${errors.birthTime ? 'border-red-500/50' : 'border-border focus:border-primary/50'}`}
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                value={formData.birthMin}
                                onChange={(e) => handleTimeInput('birthMin', e.target.value, 59)}
                                placeholder="Min"
                                className={`w-full bg-muted/40 border rounded-xl px-5 py-4 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/40 text-center font-medium ${errors.birthTime ? 'border-red-500/50' : 'border-border focus:border-primary/50'}`}
                            />
                            <select
                                value={formData.birthPeriod}
                                onChange={(e) => handleInputChange('birthPeriod', e.target.value)}
                                className="w-full bg-muted/40 border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all text-foreground appearance-none text-center cursor-pointer font-bold"
                            >
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>

                    {/* Birth Place */}
                    <div className="space-y-2.5">
                        <label className={`text-[12px] font-bold uppercase tracking-widest ${errors.birthPlace ? 'text-red-500' : 'text-muted-foreground'}`}>
                            Birth Place {errors.birthPlace && <span className="lowercase font-normal ml-2 opacity-70">({errors.birthPlace})</span>}
                        </label>
                        <div className="relative group cursor-pointer" onClick={() => setIsCityDrawerOpen(true)}>
                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 opacity-70 group-hover:text-primary transition-colors" />
                            <input
                                readOnly
                                type="text"
                                value={formData.birthPlace}
                                placeholder="Search city or town.."
                                className={`w-full bg-muted/40 border rounded-xl pl-12 pr-12 py-4 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/40 font-medium cursor-pointer group-hover:border-primary/30 ${errors.birthPlace ? 'border-red-500/50' : 'border-border'}`}
                            />
                            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 opacity-70 group-hover:text-primary transition-colors" />
                        </div>
                        {!errors.birthPlace && <p className="text-[11px] text-muted-foreground/50 italic ml-1">Click to select your birth location.</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-primary/90 active:scale-95 shadow-[0_15px_30px_rgba(255,140,0,0.2)] group mt-4 tracking-wide text-lg"
                    >
                        GENERATE HOROSCOPE
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>

            <CitySearchDrawer
                isOpen={isCityDrawerOpen}
                onClose={() => setIsCityDrawerOpen(false)}
                onSelect={handleCitySelect}
            />
        </>
    );
};

export default KundaliForm;

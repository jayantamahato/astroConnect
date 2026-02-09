export const ALL_ASTROLOGERS = [
    {
        id: 1,
        name: "Acharya Varma",
        experience: "12 Years",
        skills: "Vedic, Numerology",
        rating: "4.9",
        price: "₹25/min",
        image: "https://i.pravatar.cc/150?u=Acharya",
        status: "online",
        isOnline: true,
        isBusy: false,
        specialties: "Vedic, Numerology",
        pricing: {
            chat: { original: 30, discounted: 25 },
            call: { original: 40, discounted: 25 },
            video: { original: 60, discounted: 40 }
        }
    },
    {
        id: 2,
        name: "Dr. Sharma",
        experience: "20 Years",
        skills: "Vedic, KP System",
        rating: "4.8",
        price: "₹40/min",
        image: "https://i.pravatar.cc/150?u=Sharma",
        status: "online",
        isOnline: true,
        isBusy: false,
        specialties: "Vedic, KP System",
        pricing: {
            chat: { original: 50, discounted: 40 },
            call: { original: 60, discounted: 40 },
            video: { original: 90, discounted: 60 }
        }
    },
    {
        id: 3,
        name: "Tarot Priya",
        experience: "8 Years",
        skills: "Tarot, Psychic",
        rating: "5.0",
        price: "₹30/min",
        image: "https://i.pravatar.cc/150?u=Priya",
        status: "busy",
        isOnline: true,
        isBusy: true,
        specialties: "Tarot, Psychic",
        pricing: {
            chat: { original: 40, discounted: 30 },
            call: { original: 50, discounted: 30 },
            video: { original: 75, discounted: 50 }
        }
    },
    {
        id: 4,
        name: "Pandit Ravi",
        experience: "15 Years",
        skills: "Vedic, Face Reading",
        rating: "4.7",
        price: "₹20/min",
        image: "https://i.pravatar.cc/150?u=Ravi",
        status: "online",
        isOnline: true,
        isBusy: false,
        specialties: "Vedic, Face Reading",
        pricing: {
            chat: { original: 25, discounted: 20 },
            call: { original: 35, discounted: 20 },
            video: { original: 50, discounted: 35 }
        }
    },
    {
        id: 5,
        name: "Astro Megha",
        experience: "10 Years",
        skills: "Vedic, Palmistry",
        rating: "4.9",
        price: "₹35/min",
        image: "https://i.pravatar.cc/150?u=Megha",
        status: "online",
        isOnline: true,
        isBusy: false,
        specialties: "Vedic, Palmistry",
        pricing: {
            chat: { original: 45, discounted: 35 },
            call: { original: 55, discounted: 35 },
            video: { original: 80, discounted: 55 }
        }
    },
    {
        id: 6,
        name: "Guru Ji",
        experience: "25 Years",
        skills: "Vedic, Nadi",
        rating: "4.8",
        price: "₹50/min",
        image: "https://i.pravatar.cc/150?u=Guru",
        status: "busy",
        isOnline: true,
        isBusy: true,
        specialties: "Vedic, Nadi",
        pricing: {
            chat: { original: 60, discounted: 50 },
            call: { original: 75, discounted: 50 },
            video: { original: 110, discounted: 75 }
        }
    },
];

export const EXPERT_ASTROLOGERS = ALL_ASTROLOGERS.slice(0, 4);

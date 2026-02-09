import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinWaitlistDialog, CallTypeDialog, EstablishmentDialog } from './dialogs';

const ConnectionContext = createContext(null);

export const ConnectionProvider = ({ children }) => {
    const navigate = useNavigate();
    const [selectedAstro, setSelectedAstro] = useState(null);
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const [isCallTypeOpen, setIsCallTypeOpen] = useState(false);
    const [isEstablishmentOpen, setIsEstablishmentOpen] = useState(false);
    const [establishmentType, setEstablishmentType] = useState('chat');

    const startChat = (astro) => {
        setSelectedAstro(astro);
        setEstablishmentType('chat');
        if (astro.status === 'busy' || astro.isBusy) {
            setIsWaitlistOpen(true);
        } else {
            setIsEstablishmentOpen(true);
        }
    };

    const startCall = (astro) => {
        setSelectedAstro(astro);
        if (astro.status === 'busy' || astro.isBusy) {
            setEstablishmentType('voice');
            setIsWaitlistOpen(true);
        } else {
            setIsCallTypeOpen(true);
        }
    };

    const handleCallTypeSelect = (type) => {
        setEstablishmentType(type);
        setIsEstablishmentOpen(true);
    };

    const handleConnectSuccess = () => {
        setIsEstablishmentOpen(false);
        const astroId = selectedAstro?.id || 1;

        if (establishmentType === 'chat') {
            navigate(`/chat/${astroId}`);
        } else if (establishmentType === 'voice') {
            navigate(`/voice-call/${astroId}`);
        } else if (establishmentType === 'video') {
            navigate(`/video-call/${astroId}`);
        }
    };

    const handleJoinWaitlist = (data) => {
        console.log(`Joined waitlist for ${data.type} with ${selectedAstro?.name}`);
        setIsWaitlistOpen(false);
    };

    return (
        <ConnectionContext.Provider value={{ startChat, startCall }}>
            {children}

            <JoinWaitlistDialog
                isOpen={isWaitlistOpen}
                initialType={establishmentType}
                onClose={() => setIsWaitlistOpen(false)}
                astrologer={selectedAstro}
                onJoin={handleJoinWaitlist}
            />

            <CallTypeDialog
                isOpen={isCallTypeOpen}
                onClose={() => setIsCallTypeOpen(false)}
                astrologer={selectedAstro}
                onSelect={handleCallTypeSelect}
            />

            <EstablishmentDialog
                isOpen={isEstablishmentOpen}
                onClose={() => setIsEstablishmentOpen(false)}
                astrologer={selectedAstro}
                type={establishmentType}
                userBalance={500} // Mock balance
                onConnect={handleConnectSuccess}
            />
        </ConnectionContext.Provider>
    );
};

export const useConnection = () => {
    const context = useContext(ConnectionContext);
    if (!context) {
        throw new Error('useConnection must be used within a ConnectionProvider');
    }
    return context;
};

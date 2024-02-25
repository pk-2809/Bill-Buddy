import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OtpContextProps {
    verificationId: string | null;
    setVerificationId: React.Dispatch<React.SetStateAction<string | null>>;
    otherValue: string;
    setOtherValue: React.Dispatch<React.SetStateAction<string>>;
}

const OtpContext = createContext<OtpContextProps>({
    verificationId: null,
    setVerificationId: () => { },
    otherValue: '',
    setOtherValue: () => { },
});

interface OtpProviderProps {
    children: ReactNode;
}

export const OtpProvider: React.FC<OtpProviderProps> = ({ children }) => {
    const [verificationId, setVerificationId] = useState<string | null>(null);
    const [otherValue, setOtherValue] = useState<string>('');

    const contextValue: OtpContextProps = {
        verificationId,
        setVerificationId,
        otherValue,
        setOtherValue,
    };

    return (
        <OtpContext.Provider value={contextValue}>
            {children}
        </OtpContext.Provider>
    );
};

export const useOtp = (): OtpContextProps => {
    const context = useContext(OtpContext);
    if (!context) {
        throw new Error('useOtp must be used within an OtpProvider');
    }
    return context;
};

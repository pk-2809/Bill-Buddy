import { ReactNode, useState } from 'react';
import Context from './Context';
interface MyComponentProps {
    children: ReactNode | ReactNode[];
}

const ContextProvider = ({ children }: MyComponentProps) => {
    const [verify, setVerify] = useState<any | null>(null);
    const [accountData, setAcctData] = useState<any | null>(null);
    const updateVerify = (newVerify: any) => {
        setVerify(newVerify);
    };

    const updateAccount = (data: any) => {
        setAcctData(data);
    };

    return (
        <Context.Provider value={{ verify, updateVerify, accountData, updateAccount }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

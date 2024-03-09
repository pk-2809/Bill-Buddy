import { ReactNode, useState } from 'react';
import Context from './Context';
interface MyComponentProps {
    children: ReactNode | ReactNode[];
}

const ContextProvider = ({ children }: MyComponentProps) => {
    const [verify, setVerify] = useState<any | null>(null);
    const updateVerify = (newVerify: any) => {
        setVerify(newVerify);
    };

    return (
        <Context.Provider value={{ verify, updateVerify }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

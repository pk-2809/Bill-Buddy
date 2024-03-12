import { createContext } from 'react';
interface ContextValue {
    verify: any | null;
    updateVerify: (newVerify: any) => void;
    accountData: any | null;
    updateAccount: (data: any) => void;
}

const Context = createContext<ContextValue | null>(null);

export default Context;
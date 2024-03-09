import { createContext } from 'react';
interface ContextValue {
    verify: any | null;
    updateVerify: (newVerify: any) => void;
}

const Context = createContext<ContextValue | null>(null);

export default Context;
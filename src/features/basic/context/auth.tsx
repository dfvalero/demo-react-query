import { createContext, ReactNode, useContext, useState } from 'react';

type State = {
    isAuthenticated: boolean;
}

type Login = () => void;
type Logout = () => void;

const BasicAuthContext = createContext<
    { state: State; actions: { login: Login; logout: Logout } } | undefined
>(undefined);

function BasicAuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<State>({ isAuthenticated: false });

    const login = () => {
        setState({ isAuthenticated: true });
    };

    const logout = () => {
        setState({ isAuthenticated: false });
    };

    return (
        <BasicAuthContext.Provider value={{ state, actions: { login, logout } }}>
            {children}
        </BasicAuthContext.Provider>
    );
}

function useBasicAuth() {
    const context = useContext(BasicAuthContext);

    if (context === undefined) {
        throw new Error('useBasicAuth must be used within a BasicAuthProvider');
    }

    return { ...context.state, ...context.actions };
}

export { BasicAuthProvider, useBasicAuth };

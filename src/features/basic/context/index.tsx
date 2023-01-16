import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { PostUserRequest, User } from '../../../types';
import { getUsers, postUser } from '../../../api';

type IdleState = {
    status: 'idle';
    data: undefined;
    error: undefined;
};

type LoadingState = {
    status: 'loading';
    data: undefined;
    error: undefined;
};

type SuccessState = {
    status: 'success';
    data: { users: User[]; total: number };
    error: undefined;
};

type ErrorState = {
    status: 'error';
    data: undefined;
    error: Error;
};

type State = IdleState | LoadingState | SuccessState | ErrorState;

type FetchUsers = () => void;
type AddUser = (user: PostUserRequest) => void;

const UserContext = createContext<
    { state: State; actions: { fetchUsers: FetchUsers; addUser: AddUser } } | undefined
>(undefined);

function UsersProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<State>({
        status: 'idle',
        data: undefined,
        error: undefined,
    });

    const fetchUsers = () => {
        setState({ status: 'loading', data: undefined, error: undefined });
        getUsers()
            .then((data) => {
                setState({ data, status: 'success', error: undefined });
            })
            .catch((error) => {
                setState({ data: undefined, status: 'error', error });
            });
    };

    const addUser = (user: PostUserRequest) => {
        postUser(user).then((response) => {
            setState((prevState) => {
                if (prevState.status === 'success') {
                    const newUsers = [response.user, ...prevState.data.users];

                    return {
                        ...prevState,
                        data: {
                            users: newUsers,
                            total: newUsers.length,
                        },
                    };
                }

                return prevState;
            });
        });
    };

    return (
        <UserContext.Provider value={{ state, actions: { fetchUsers, addUser } }}>
            {children}
        </UserContext.Provider>
    );
}

function useUsers() {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUsers must be used within a UsersProvider');
    }
    
    return { ...context.state, ...context.actions };
}

export { UsersProvider, useUsers };

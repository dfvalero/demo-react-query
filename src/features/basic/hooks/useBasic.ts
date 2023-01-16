import { useEffect, useState } from 'react';
import { User } from '../../../types';
import { getUsers } from '../../../api';

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

export const useBasic = () => {
    const [state, setState] = useState<State>({
        status: 'idle',
        data: undefined,
        error: undefined,
    });

    useEffect(() => {
        setState({ status: 'loading', data: undefined, error: undefined });
        getUsers()
            .then((data) => {
                setState({ data, status: 'success', error: undefined });
            })
            .catch((error) => {
                setState({ data: undefined, status: 'error', error });
            });
    }, []);

    return state;
};

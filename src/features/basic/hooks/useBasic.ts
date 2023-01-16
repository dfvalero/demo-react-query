import { useEffect, useState } from 'react';
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

    const add = (user: PostUserRequest) => {
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

    return { ...state, add };
};

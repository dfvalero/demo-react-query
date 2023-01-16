import { GetUsersResponse, PostUserRequest, PostUserResponse } from '../types';

export const getUsers = async (): Promise<GetUsersResponse> => {
    const response = await fetch('http://localhost:3051/users');

    return await response.json();
};

export const postUser = async (user: PostUserRequest): Promise<PostUserResponse> => {
    const response = await fetch('http://localhost:3051/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });

    return await response.json();
};

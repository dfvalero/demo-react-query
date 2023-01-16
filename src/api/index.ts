import { GetUsersResponse } from '../types';

export const getUsers = async (): Promise<GetUsersResponse> => {
    const response = await fetch('https://dummyjson.com/users');

    return await response.json();
};

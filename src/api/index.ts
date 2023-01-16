import { GetUsersResponse } from '../types';

export const getUsers = async (): Promise<GetUsersResponse> => {
    const response = await fetch('http://localhost:3051/users');

    return await response.json();
};

export const postUser = async () => {
    return fetch('http://localhost:3051/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'tanyo',
            firstName: 'David',
            lastName: 'Fernandez',
            age: 37,
            jobTitle: 'Frontend Developer',
            address: { city: 'Barcelona '}
        })
    })
}

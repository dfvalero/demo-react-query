import { useEffect } from 'react';
import { useUsers } from '../context';

export const useBasic = () => {
    const context = useUsers();

    useEffect(() => {
        context.fetchUsers();
    }, []);

    return context;
};

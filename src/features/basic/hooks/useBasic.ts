import { useEffect, useState } from 'react';
import { User } from '../../../types';
import { getUsers } from '../../../api';

export const useBasic = () => {
    const [data, setData] = useState<{ users: User[]; total: number }>({
        users: [],
        total: 0,
    });

    useEffect(() => {
        getUsers().then((data) => {
            setData(data);
        });
    }, []);

    return data;
}

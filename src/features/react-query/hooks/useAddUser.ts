import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postUser } from '../../../api';

export const useAddUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

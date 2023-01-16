import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetUsersResponse, PostUserRequest } from '../../../types';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3051/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<GetUsersResponse, void>({
            query: () => ({ url: 'users' }),
            providesTags: [{ type: 'Users', id: 'LIST' }],
            forceRefetch() {
                return true;
            },
        }),
        addUser: builder.mutation<PostUserRequest, PostUserRequest>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    }),
    refetchOnMountOrArgChange: false,
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;

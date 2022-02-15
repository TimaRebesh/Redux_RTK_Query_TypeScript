import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../store/models/IUser';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8150' }),
    tagTypes: ['userList'],
    endpoints: (builer) => ({
        getUsers: builer.query<IUser[], void>({
            query: () => '/users',
            providesTags: result => ['userList']
        }),
        createNew: builer.mutation({
            query: (user) =>
            ({
                url: 'users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: result => ['userList']
        }),
        remove: builer.mutation({
            query: (id:number) =>
            ({
                url: 'users/' + id,
                method: 'DELETE',
            }),
            invalidatesTags: result => ['userList']
        }),
    })
})

export const { useGetUsersQuery, useCreateNewMutation, useRemoveMutation } = usersApi;  // auto generated hooks

export default usersApi;

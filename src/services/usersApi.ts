import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../store/models/IUser';

const  usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000'}),
    endpoints: (builer) => ({
        getUsers: builer.query<IUser[], any>({
            query:() => '/users'
        })

    })
})

export const { useGetUsersQuery } = usersApi;  // auto generated hooks

export default usersApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comment } from '../store/models/IComment';

const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8150/comments' }),
    tagTypes: ['Сomments'],
    endpoints: (builer) => ({
        getComments: builer.query<Comment[], number>({
            query: (page) => '/?_page=' + page,
            providesTags: (result, error, page) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Сomments' as const, id })),
                        { type: 'Сomments', id: 'PARTIAL-LIST' },
                    ]
                    : [{ type: 'Сomments', id: 'PARTIAL-LIST' }],
        }),
        createNew: builer.mutation<Comment, string>({
            query: (comment) =>
            ({
                url: '',
                method: 'POST',
                body: { text: comment }
            }),
            invalidatesTags: ['Сomments']
        }),
        remove: builer.mutation<{ success: boolean; id: number }, number>({
            query: (id) =>
            ({
                url: '/' + id,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Сomments', id },
                { type: 'Сomments', id: 'PARTIAL-LIST' },
            ],
        }),
    })
})

export const { useGetCommentsQuery, useCreateNewMutation, useRemoveMutation } = commentsApi;  // auto generated hooks

export default commentsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Note, Notes } from './types'
// import type { Pokemon } from './types'

export const notesApi = createApi({
    reducerPath: 'noteapi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes:['getNotes',`addNotes`, `getOne`],
    endpoints: (builder) => ({
      getNotes: builder.query<Array<Notes> , void>({
        query: () => `userNotes/getAll`,
        providesTags:['getNotes']
      }),
      getOneNote:builder.query<Notes, string>({
        query:(noteId)=> `userNotes/getOne/${noteId}`,
        providesTags:[`getOne`]
      })
      ,

      createNotes:builder.mutation<any, Note>({
          query:({userId, ...Note})=>({
            url: `userNotes/add/${userId}`,
            method:`POST`,
            body:Note           
          }),
          invalidatesTags:[ `getNotes`]  
      }),

      updateNotes:builder.mutation<any, any>({
        query:({userId,noteId, ...Note})=>({
          url: `userNotes/update/${userId}/${noteId}`,
          method:`PUT`,
          body:Note           
        }),
        invalidatesTags:[ `getNotes`,`getOne`]
    }),

    deleteNotes:builder.mutation<any, any>({
      query:({userId, noteId})=>({
        url:`userNotes/update/${userId}/${noteId}`,
        method:`DELET`,
      }),
      invalidatesTags:[`getNotes`]
    })
    }),
  })



  export const { useGetNotesQuery, useCreateNotesMutation, useGetOneNoteQuery, useUpdateNotesMutation } = notesApi
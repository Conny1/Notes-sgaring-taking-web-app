import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

export const notesApi = createApi({
    reducerPath: 'noteapi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes:['addNotes'],
    endpoints: (builder) => ({
      addNotes: builder.query<void, void>({
        query: (name) => `pokemon/${name}`,
        providesTags:['addNotes']
      }),
    }),
  })



  export const { useAddNotesQuery } = notesApi
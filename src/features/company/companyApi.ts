export const companyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<Company, string>({
      query: (id) => `companies/${id}`,
      providesTags: ['Company']
    }),
    updateCompany: builder.mutation<Company, Partial<Company>>({
      query: ({ id, ...patch }) => ({
        url: `companies/${id}`,
        method: 'PATCH',
        body: patch
      }),
      invalidatesTags: ['Company']
    }),
    deleteCompany: builder.mutation<void, string>({
      query: (id) => ({
        url: `companies/${id}`,
        method: 'DELETE'
      })
    }),
    uploadImage: builder.mutation<Photo, { id: string; file: FormData }>({
      query: ({ id, file }) => ({
        url: `companies/${id}/image`,
        method: 'POST',
        body: file
      }),
      invalidatesTags: ['Company']
    }),
    deleteImage: builder.mutation<void, { id: string; imageName: string }>({
      query: ({ id, imageName }) => ({
        url: `companies/${id}/image/${imageName}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Company']
    })
  })
});
import { api } from '../../app/api';
import { Company, Contact, Photo } from './companyTypes';

export const companyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCompany: builder.query<Company, string>({
      query: (id) => `companies/${id}`,
    }),
    updateCompany: builder.mutation<Company, Partial<Company>>({
      query: ({ id, ...patch }) => ({
        url: `companies/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteCompany: builder.mutation<void, string>({
      query: (id) => ({
        url: `companies/${id}`,
        method: 'DELETE',
      }),
    }),
    uploadImage: builder.mutation<Photo, { id: string; file: File }>({
      query: ({ id, file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `companies/${id}/image`,
          method: 'POST',
          body: formData,
        };
      },
    }),
    deleteImage: builder.mutation<void, { id: string; imageName: string }>({
      query: ({ id, imageName }) => ({
        url: `companies/${id}/image/${imageName}`,
        method: 'DELETE',
      }),
    }),
    getContact: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
    }),
    updateContact: builder.mutation<Contact, Partial<Contact>>({
      query: ({ id, ...patch }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetCompanyQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useUploadImageMutation,
  useDeleteImageMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} = companyApi;
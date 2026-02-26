import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }), // Example public API
  endpoints: (builder) => ({
    getApplicants: builder.query<any[], void>({
      query: () => "/users", 
    }),
  }),
});

export const { useGetApplicantsQuery } = apiSlice;

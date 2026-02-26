import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Applicant {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }), // Example public API
  endpoints: (builder) => ({
    // Replaced any[] with Applicant[] to fix linting errors
    getApplicants: builder.query<Applicant[], void>({
      query: () => "/users",
    }),
  }),
});

// Auto-generated hooks based on the defined endpoints
export const { useGetApplicantsQuery } = apiSlice;

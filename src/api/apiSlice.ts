import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getMountainsList: builder.query({
      query: () => "/mountains/cards",
    }),
  }),
});

export const { useGetMountainsListQuery } = apiSlice;

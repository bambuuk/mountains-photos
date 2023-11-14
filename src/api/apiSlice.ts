import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { IData } from "../types/IData";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Mountains"],
  endpoints: (builder) => ({
    getMountainsList: builder.query({
      query: () => "/mountains/cards",
      providesTags: ["Mountains"],
    }),
    updateMountain: builder.mutation<IData, Partial<IData>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `mountains/cards/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Mountains"],
    }),
  }),
});

export const { useGetMountainsListQuery, useUpdateMountainMutation } = apiSlice;

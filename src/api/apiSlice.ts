import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // куди отримуємо дані (reducer)
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boiling-refuge-66454.herokuapp.com",
  }), // по якій адресі отримуємо дані
  tagTypes: ["PhotoList"], // які мітки є в api
  endpoints: (builder) => ({
    // тут отримуємо дані
    getPhotoList: builder.query({
      query: () => "/images",
      providesTags: ["PhotoList"], // коли отримали дані, то показуємо до якої мітки відносяться дані
    }),
    // // мутація даних
    // createHero: builder.mutation({
    //   query: hero => ({
    //     url: '/heroes', // де буде відбуватись мутація
    //     method: 'POST',
    //     body: hero // тут автоматично дані перетворюються в json формат
    //   }),
    //   invalidatesTags: ['PhotoList'] // мутація відбувається по даним тега Heroes
    // }),
  }),
});

export const { useGetPhotoListQuery } = apiSlice;

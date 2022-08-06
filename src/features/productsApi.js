import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://loftywebtech.com/onibata/api"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products?page=1",
        })
    })
})

export const { useGetAllProductsQuery } = productApi
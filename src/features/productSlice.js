import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items: [],
    status: null,
    error: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async(page=1, {rejectWithValue}) => {
     try {
        const response =  await  axios.get("https://loftywebtech.com/onibata/api/products?page=1")
        return response?.data
     } catch (error) {
        return rejectWithValue("An error occured")
     }
    }
)
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            // immer to update state in immutable ways
            state.state = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            // immer to update state in immutable ways
            state.state = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            // immer to update state in immutable ways
            state.state = "rejected"
            state.error = action.payload
        }
    }
})

export default productSlice.reducer;
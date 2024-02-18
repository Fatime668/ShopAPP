import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface ProductState {
    datas:any[];
    loading:string;
    error:string;
    data:any[];
}

const initialState: ProductState = {
    datas: [],
    loading: 'pending' || 'fulfilled' || 'rejected',
    error: '',
    data: [],
}


export const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
    const response = await axios.get(
        'https://65d0e80dab7beba3d5e3e01e.mockapi.io/product/products/',
    );
    return response.data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.pending, (state,action)=>{
            state.loading = 'pending'
        });
        builder.addCase(getAllProducts.fulfilled, (state,action)=>{
            state.datas = action.payload;
            state.loading = 'fulfilled';
        });
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.error = action.error.message || '';
            state.loading = 'rejected';
        })
    }

})

export const productReducer = productSlice.reducer;

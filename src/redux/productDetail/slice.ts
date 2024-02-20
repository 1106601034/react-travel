import { PayloadAction, createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null,
}

export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async (detailID: string, thunkAPI) => {
        const { data } = await axios.get(
            `http://82.157.43.234:8080/api/touristRoutes/${detailID}`
        );
        return data;
    }
)

export const ProductDetailSlice = createSlice({
    name: 'product_detail',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    }
})
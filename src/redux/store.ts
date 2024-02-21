import { createStore, applyMiddleware, } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLogg";
import { ProductDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { productSearchSlice } from "./productSearch/slice";

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: ProductDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
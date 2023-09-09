import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFething: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFething = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFething = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFething = false;
      state.error = true;
    },

    deleteProductStart: (state) => {
      state.isFething = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFething = false;
      // state.products = state.products.filter(
      //   (product) => product._id !== action.payload._id
      // );
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFething = false;
      state.error = true;
    },

    updateProductStart: (state) => {
      state.isFething = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFething = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFething = false;
      state.error = true;
    },

    addProductStart: (state) => {
      state.isFething = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFething = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFething = false;
      state.error = true;
    },
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} = productSlice.actions;

export default productSlice.reducer;

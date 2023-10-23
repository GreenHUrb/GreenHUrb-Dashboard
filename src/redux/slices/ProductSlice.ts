/* eslint-disable no-param-reassign */
import {
  IProduct,
  IProductFullResponse,
  IProductVariant
} from "@/features/Products/interfaces/ProductApi";
import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    products: [] as IProductFullResponse[],
  },
  reducers: {
    initializeProducts: (
      state,
      action: {
        payload: IProductFullResponse[];
      }
    ) => {
      const { payload } = action;

      state.products = payload;
    },

    addProduct: (
      state,
      action: {
        payload: IProductFullResponse;
      }
    ) => {
      const { payload } = action;

      state.products = [...state.products, payload];
    },

    updateProduct: (
      state,
      action: {
        payload: {
          product: Partial<IProduct>;
          product_id: string;
        };
      }
    ) => {
      const { product, product_id } = action.payload;

      const productIndex = state.products.findIndex(product => product.product.id === product_id);

      if (productIndex === -1) return;

      let selectedProduct = state.products[productIndex];

      selectedProduct = { ...selectedProduct, product: { ...selectedProduct.product, ...product } };
    },

    deleteProduct: (
      state,
      action: {
        payload: {
          product_id: string;
        };
      }
    ) => {
      const { product_id } = action.payload;

      const filteredProducts = state.products.filter(product => product.product.id !== product_id);
      console.log(filteredProducts)

      state.products = [...filteredProducts];
    },

    addProductVariant: (
      state,
      action: {
        payload: {
          product_id: string;
          variant: IProductVariant;
        };
      }
    ) => {
      const { product_id, variant } = action.payload;

      const productIndex = state.products.findIndex(product => product.product.id === product_id);

      if (productIndex === -1) return;

      let selectedProduct = state.products[productIndex];

      selectedProduct = { ...selectedProduct, variant: [...selectedProduct.variant, variant] };
    },

    deleteProductVariant: (
      state,
      action: {
        payload: {
          variant_id: string;
          product_id: string;
        };
      }
    ) => {
      const { product_id, variant_id } = action.payload;

      const productIndex = state.products.findIndex(product => product.product.id === product_id);

      if (productIndex === -1) return;

      let selectedProduct = state.products[productIndex];

      const filteredVariants = selectedProduct.variant.filter(variant => variant.id === variant_id);

      selectedProduct.variant = [...filteredVariants];
    }
  }
});

export const productSliceActions = ProductSlice.actions;

export const ProductSliceReducer = ProductSlice.reducer;

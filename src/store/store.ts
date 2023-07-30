/**
 * @fileoverview This module defines a `STORE` object which contains several atoms representing different parts of the state in the application.
 * @module STORE
 * @see module:types/types
 */

import { atom } from "recoil";
import { ModelList, ProductList } from "../types/types";

/**
 * @typedef {Object} STORE
 * @property {RecoilState<ProductList[]>} products - Represents the list of products. Default value is an empty array.
 * @property {RecoilState<string|null>} activeModelCode - Represents the active model code. Default value is null.
 * @property {RecoilState<ModelList|null>} model - Represents a model. Default value is null.
 * @property {RecoilState<ProductList|null>} product - Represents a product. Default value is null.
 */
export const STORE = {
    /**
     * An atom that represents the list of products.
     * @type {RecoilState<ProductList[]>}
     */
    products: atom<ProductList[]>({
        default: [],
        key: 'product-list',
    }),

    /**
     * An atom that represents the active model code.
     * @type {RecoilState<string|null>}
     */
    activeModelCode: atom<string | null>({
        default: null,
        key: 'active-model',
    }),

    /**
     * An atom that represents a model.
     * @type {RecoilState<ModelList|null>}
     */
    model: atom<ModelList | null>({
        default: null,
        key: 'model',
    }),

    /**
     * An atom that represents a product.
     * @type {RecoilState<ProductList|null>}
     */
    product: atom<ProductList | null>({
        default: null,
        key: 'product',
    }),
}

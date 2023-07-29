import { atom } from "recoil";
import { ModelList, ProductList } from "../types/types";

export const STORE = {
    products: atom<ProductList[]>({
        default: [],
        key: 'product-list',
    }),
    activeModelCode: atom<string | null>({
        default: null,
        key: 'active-model',
    }),
    model: atom<ModelList | null>({
        default: null,
        key: 'model',
    }),
    product: atom<ProductList | null>({
        default: null,
        key: 'product',
    }),
}


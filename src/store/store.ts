import { atom } from "recoil";
import { ProductList } from "../types/types";

export const STORE = {
    products: atom<ProductList[] | null>({
        default: [],
        key: 'product-list',
    }),
}


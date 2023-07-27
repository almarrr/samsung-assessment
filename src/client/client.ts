import { SamsungResult, ProductList } from "../types/types";

export class SamsungClient {

    async fetchProducts(): Promise<ProductList[]> {
        try {
            const result = await fetch(import.meta.env.VITE_API_URL);

            const { response }: SamsungResult = await result.json();

            return response.resultData.productList;
        }
        catch (error: unknown) {
            console.log(error);
            throw error;
        }
    }
}
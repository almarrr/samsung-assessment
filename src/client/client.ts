import { SamsungResult, ProductList } from "../types/types";

export class SamsungClient {
    private static apiUrl = import.meta.env.VITE_API_URL;

    private static async fetchJson<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    static async fetchProducts(): Promise<ProductList[]> {
        try {
            const { response }: SamsungResult = await this.fetchJson(this.apiUrl);
            return response.resultData.productList;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
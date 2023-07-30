import { SamsungResult, ProductList } from "../types/types";

/**
 * SamsungClient class for interacting with the Samsung API.
 * @class
 */
export class SamsungClient {
    /**
     * Base URL for the Samsung API.
     * @private
     * @static
     */
    private static apiUrl = import.meta.env.VITE_API_URL;

    /**
     * Method to fetch JSON data from the given URL.
     * @private
     * @static
     * @template T
     * @param {string} url - The URL to fetch the data from.
     * @returns {Promise<T>} The data fetched from the URL.
     * @throws {Error} When the response is not OK.
     */
    private static async fetchJson<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    }

    /**
     * Method to fetch product list from the Samsung API.
     * @static
     * @returns {Promise<ProductList[]>} The list of products.
     * @throws {Error} When there is an error fetching the data.
     */
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

import { ModelList, ProductList } from "../types/types";

/**
 * This function finds a product and a model based on a given model code.
 * It returns an object containing the product and the model found.
 * If no product or model matches the model code, the respective value will be null.
 *
 * @function findProductAndModelByModelCode
 * @param {string} modelCode - The model code to be used for searching the product and model.
 * @param {ProductList[]} products - The list of products where the search should be performed.
 * @returns {{ product: ProductList | null, model: ModelList | null }} An object containing the found product and model. If no product or model is found, the respective value will be null.
 */
export const findProductAndModelByModelCode = (modelCode: string, products: ProductList[]): { product: ProductList | null, model: ModelList | null } => {


    let product: ProductList | null = null;
    let model: ModelList | null = null;

    const modelResult =
        products
            .map(({ modelList }) => {
                return modelList.find((x) => x.modelCode === modelCode);
            })
            .filter((x) => x !== undefined)[0] || null;


    const productResult = products.find((x) => {
        return x.modelList.find((x) => x.modelCode === modelCode);
    }) || null;

    if (productResult) {
        product = productResult;
    }

    if (modelResult) {
        model = modelResult;
    }


    return { product, model };
}
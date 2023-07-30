import { ModelList, ProductList } from "../types/types";

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
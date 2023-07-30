import { useRecoilState, useRecoilValue } from "recoil";
import { STORE } from "../store/store";
import { useCallback, useEffect } from "react";
import { findProductAndModelByModelCode } from "../helpers/find-model";

interface IParams {
  modelCode?: string;
}

export const useModel = (params: IParams) => {
  const { modelCode } = params;

  const products = useRecoilValue(STORE.products);

  const [model, setModel] = useRecoilState(STORE.model);

  const [product, setProduct] = useRecoilState(STORE.product);

  const findModel = useCallback(
    (modelCode: string) => {
      if (!modelCode || products.length === 0) {
        console.log("no model code or products");
        return;
      }

      const { model, product } = findProductAndModelByModelCode(
        modelCode,
        products
      );

      if (model) {
        setModel(model);
      }

      if (product) {
        setProduct(product);
      }
    },
    [products, setModel, setProduct]
  );

  useEffect(() => {
    if (!modelCode) return;

    findModel(modelCode);
  }, [findModel, modelCode]);

  return { model, product };
};

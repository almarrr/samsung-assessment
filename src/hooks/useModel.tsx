import { useRecoilState, useRecoilValue } from "recoil";
import { STORE } from "../store/store";
import { useCallback, useEffect } from "react";

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
      if (!modelCode || !products.length) return;

      const model =
        products
          .map(({ modelList }) => {
            return modelList.find((x) => x.modelCode === modelCode);
          })
          .filter((x) => x !== undefined)[0] || null;

      const product = products.find((x) => {
        return x.modelList.find((x) => x.modelCode === modelCode);
      });

      if (product) {
        setProduct(product);
      }

      if (model) {
        setModel(model);
        return;
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

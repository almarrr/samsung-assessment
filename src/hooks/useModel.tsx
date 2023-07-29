import { useRecoilState, useRecoilValue } from "recoil";
import { STORE } from "../store/store";
import { useCallback, useEffect } from "react";

export const useModel = (modelCode: string | null) => {
  const products = useRecoilValue(STORE.products);

  const [model, setModel] = useRecoilState(STORE.model);

  const findModel = useCallback(
    (modelCode: string | null) => {
      if (!modelCode) return;

      const model =
        products
          .map(({ modelList }) => {
            return modelList.find((x) => x.modelCode === modelCode);
          })
          .filter((x) => x !== undefined)[0] || null;

      if (model) {
        setModel(model);
        return;
      }

      console.log(`model ${modelCode} not found in products`);
    },
    [products, setModel]
  );

  useEffect(() => {
    findModel(modelCode);
  }, [findModel, modelCode]);

  return { model, setModel };
};

import React, { useCallback, useEffect, useState } from "react";
import { ModelList, ProductList } from "../../types/types";
import ChipOptions from "../ChipOptions/ChipOptions";
import Button from "../shared/Button/Button";

import { useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating/ProductRating";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRecoilValue } from "recoil";
import { STORE } from "../../store/store";
import { findProductAndModelByModelCode } from "../../helpers/find-model";

/**
 * Prop types for the Product component.
 * @interface
 * @property {string} modelCode - The model code of the product.
 */
interface IProps {
  modelCode: string;
}

/**
 * A React functional component that displays product information.
 * This component fetches product information based on the provided model code,
 * and presents it in a visually appealing format.
 * This component also has a 'handleNavigate' function that allows users to navigate to the product details.
 *
 * @component
 * @param {IProps} props - Props that get passed to the component
 * @returns {React.ReactElement} The rendered Product component
 */
const Product: React.FC<IProps> = ({ modelCode }) => {
  const products = useRecoilValue(STORE.products);

  const navigate = useNavigate();

  const [model, setModel] = useState<null | ModelList>(null);
  const [product, setProduct] = useState<null | ProductList>(null);

  const handleNavigate = useCallback(() => {
    navigate(`/model/${modelCode}`);
  }, [modelCode, navigate]);

  const getModelAndProduct = useCallback(() => {
    const { model: result, product } = findProductAndModelByModelCode(
      modelCode,
      products
    );

    if (!result || !product) {
      return;
    }

    setProduct(product);

    setModel(result);
  }, [modelCode, products]);

  useEffect(() => {
    getModelAndProduct();
  }, [getModelAndProduct]);

  if (!model || !product) {
    return <></>;
  }

  return (
    <div className="bg-white rounded-2xl min-[550px] relative flex flex-col justify-between">
      <div>
        <button
          className="p-8 hover:opacity-75 transition-opacity duration-150"
          onClick={handleNavigate}
        >
          <LazyLoadImage
            threshold={100}
            className="aspect-[16/10] object-contain w-full"
            src={model.thumbUrl}
            alt={model.displayName}
          />
        </button>
        <div className="p-4 text-center">
          <button className="hover:underline" onClick={handleNavigate}>
            <h3 className="text-[16px] font-bold">{model.displayName}</h3>
          </button>
          {product.chipOptions?.map((chip) => (
            <ChipOptions key={chip.fmyChipType} {...chip} />
          ))}
        </div>
      </div>
      <div className="text-center font-bold text-[18px]">
        {model.price ? `${model.price},-` : "Prijs nog onbekend"}
      </div>
      <ProductRating
        rating={parseInt(model.ratings)}
        numberOfReviews={parseInt(model.reviewCount)}
      />
      <div className="px-4 pb-8 pt-2 flex justify-center">
        <Button label="Ontdek" onClick={handleNavigate} />
      </div>
    </div>
  );
};

export default Product;

import React, { useCallback, useEffect, useState } from "react";
import { ModelList, ProductList } from "../../types/types";
import ChipOptions from "../ChipOptions/ChipOptions";
import Button from "../shared/Button/Button";

import { useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating/ProductRating";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Product: React.FC<ProductList> = (props) => {
  const [modelCode] = useState<string | null>(
    props.modelList[0].modelCode || null
  );

  const navigate = useNavigate();

  const [model, setModel] = useState<null | ModelList>(null);

  const handleNavigate = useCallback(() => {
    navigate(`/model/${modelCode}`);
  }, [modelCode, navigate]);

  useEffect(() => {
    const result = props.modelList.find((model) => {
      return model.modelCode === modelCode;
    });

    if (!result) {
      return;
    }

    setModel(result);
  }, [modelCode, props.modelList]);

  if (!model) {
    return <></>;
  }

  return (
    <div className="bg-white rounded-2xl min-[550px] relative flex flex-col justify-between">
      <div>
        <button
          className="p-8 hover:opacity-75 transition-opacity duration-150"
          onClick={handleNavigate}
        >
          {model.galleryImage.length}
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
          {props.chipOptions?.map((chip) => (
            <ChipOptions key={chip.fmyChipType} {...chip} />
          ))}
        </div>
      </div>
      {}
      <div className="text-center font-bold text-[18px]">
        {model.price ? `${model.price},-` : "Prijs op aanvraag"}
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

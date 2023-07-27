import React, { useEffect, useState } from "react";
import { ModelList, ProductList } from "../../types/types";
import ChipOptions from "../ChipOptions/ChipOptions";

const Product: React.FC<ProductList> = (props) => {
  const [modelCode, setModelCode] = useState(props.modelList[0].modelCode);

  const [model, setModel] = useState<null | ModelList>(null);

  useEffect(() => {
    const result = props.modelList.find((model) => {
      return model.modelCode === modelCode;
    });

    if (!result) {
      return;
    }

    setModel(result);

    console.log(result);
  }, [modelCode, props.modelList]);

  if (!model) {
    return <></>;
  }

  return (
    <div className="bg-white rounded-lg relative">
      <div className="absolute top-[1rem] text-[.8rem] right-[1rem] bg-[#2189ff] rounded-md py-[.1.75rem] text-white font-bold px-1 z-[3]">
        {props.modelList.length} models
      </div>
      <div className="p-8">
        <img
          className="aspect-square object-cover w-full"
          src={model.thumbUrl}
          alt={model.displayName}
        />
      </div>
      <div className="p-4">
        <h3 className="text-[16px] font-bold">{model.displayName}</h3>
        {props.chipOptions?.map((chip) => (
          <ChipOptions key={chip.fmyChipType} {...chip} />
        ))}
      </div>
    </div>
  );
};

export default Product;

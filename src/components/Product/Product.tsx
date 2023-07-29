import React, { useEffect, useState } from "react";
import { ModelList, ProductList } from "../../types/types";
import ChipOptions from "../ChipOptions/ChipOptions";
import Button from "../Button";
import { useSetRecoilState } from "recoil";
import { STORE } from "../../store/store";

const Product: React.FC<ProductList> = (props) => {
  const [modelCode] = useState<string | null>(
    props.modelList[0].modelCode || null
  );

  const setActiveModel = useSetRecoilState(STORE.activeModelCode);

  const [model, setModel] = useState<null | ModelList>(null);

  const toggleActiveModel = () => {
    setActiveModel(modelCode);
  };

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
    <div className="bg-white rounded-2xl relative flex flex-col justify-between">
      <div>
        <button className="p-8" onClick={toggleActiveModel}>
          <img
            className="aspect-[16/10] object-contain w-full"
            src={model.thumbUrl}
            alt={model.displayName}
          />
        </button>
        <div className="p-4">
          <h3 className="text-[16px] font-bold">{model.displayName}</h3>
          {props.chipOptions?.map((chip) => (
            <ChipOptions key={chip.fmyChipType} {...chip} />
          ))}
        </div>
        <ul className="px-8 pb-4 list-disc text-[14px] grid grid-cols-1 gap-2">
          {model.usp.slice(0, 2).map((usp) => (
            <li key={usp}>{usp}</li>
          ))}
        </ul>
      </div>
      <div className="px-4 pb-8 pt-2 flex justify-center">
        <Button label="Ontdek" onClick={toggleActiveModel} />
      </div>
    </div>
  );
};

export default Product;

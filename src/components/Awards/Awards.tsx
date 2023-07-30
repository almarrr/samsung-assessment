import React from "react";
import { useModel } from "../../hooks/useModel";

interface IProps {
  modelCode: string;
}

const Awards: React.FC<IProps> = ({ modelCode }) => {
  const { product } = useModel({ modelCode });

  if (!product) return <></>;

  return (
    <div className="flex justify-center items-center space-x-4 pt-60">
      {product.awardList.map(
        ({ awardTitle, awardDesc, awardLink, awardImg }) => (
          <a
            href={awardLink}
            target="_blank"
            className="block relative bg-samsung-light/10 hover:bg-samsung-light/20 transition-all duration-150 w-1/3 px-10 py-12 rounded-lg"
            rel="noreferrer"
          >
            <h3>{awardTitle}</h3>
            <p className="text-[16px] pt-3 text-center">{awardDesc}</p>

            {awardImg && (
              <img
                src={awardImg}
                alt={awardTitle}
                className="block mx-auto pt-8 object-contain max-w-[100px]"
              />
            )}
          </a>
        )
      )}
    </div>
  );
};

export default Awards;

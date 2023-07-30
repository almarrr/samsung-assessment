import React from "react";
import { ModelList } from "../../types/types";

const Topbar: React.FC<ModelList> = ({
  modelName,
  displayName,
  priceDisplay,
  originPdpUrl,
  ctaLocalText,
}) => {
  const handleBuyNow = () => {
    window.open(`${import.meta.env.VITE_URL_PREFIX}/${originPdpUrl}`, "_blank");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white/5 backdrop-blur z-10 border-b border-white/10 py-3  transition-all duration-300 ease-in-out`}
    >
      <div className="container flex justify-between items-center text-white">
        <div>
          <h1 className="text-[18px] lg:text-[24px]">{displayName}</h1>

          <div className="text-[14px] lg:text-[18px] opacity-50 font-bold">
            {modelName}
          </div>
        </div>

        <div className="flex justify-end items-center space-x-4">
          {priceDisplay && (
            <div className="font-bold">Adviesprijs {priceDisplay}</div>
          )}
          <button
            className="btn bg-samsung-blue text-white"
            onClick={handleBuyNow}
          >
            {ctaLocalText || "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

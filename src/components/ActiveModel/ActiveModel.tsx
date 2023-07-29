import { createPortal } from "react-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { STORE } from "../../store/store";
import { useEffect, useState } from "react";
import { Icons } from "../Icons/_Icons";
import { useModel } from "../../hooks/useModel";

const ActiveModel = () => {
  const activeModelCode = useRecoilValue(STORE.activeModelCode);
  const setActiveModel = useSetRecoilState(STORE.activeModelCode);

  const toggleScroll = (state: boolean) => {
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  const { model } = useModel(activeModelCode);

  useEffect(() => {
    if (!model) {
      return;
    }

    setHeroImageLoaded(true);
  }, [model]);

  useEffect(() => {
    if (model) {
      toggleScroll(true);
    }

    if (!model) {
      toggleScroll(false);
    }
  }, [model]);

  const toggleActiveModel = () => {
    setActiveModel(null);
    setHeroImageLoaded(false);
    toggleScroll(false);
  };

  if (activeModelCode === null) {
    return <></>;
  }

  if (!model) {
    return <></>;
  }

  return createPortal(
    <div className="fixed top-0 left-0 bg-black text-white z-[100] w-screen h-screen py-[20vh] overflow-y-scroll">
      <div
        className={`fixed top-0 left-0 w-full bg-white/5 backdrop-blur z-10 border-b border-white/10 py-3  transition-all duration-300 ease-in-out`}
      >
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-[24px]">{model.displayName}</h1>

            <div className="opacity-50 font-bold">{model.modelName}h2</div>
          </div>

          <button className="btn bg-samsung-blue text-white">
            {model.ctaLocalText || "Buy Now"}
          </button>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      <div className="fixed bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <button
        className="fixed top-0 right-0 p-4 z-[101]"
        onClick={toggleActiveModel}
      >
        <Icons.Close />
      </button>

      <div className="container">
        <div className="min-h-screen">
          <h1
            className="text-[58px] text-center delay-700 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: heroImageLoaded ? 1 : 0 }}
          >
            {model.displayName}
          </h1>
          <h2
            className="text-[32px] text-center delay-[800ms] transition-opacity duration-1000 ease-in-out pb-8"
            style={{ opacity: heroImageLoaded ? 1 : 0 }}
          >
            {model.usp[0]}.
          </h2>
          <div>
            {model.galleryImageLarge[0] && (
              <img
                src={model.galleryImageLarge[0]}
                alt={model.displayName}
                style={{
                  opacity: heroImageLoaded ? 1 : 0,
                  transform: heroImageLoaded
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
                className={`w-full mx-auto object-fill transition-all duration-1000 ease-in-out delay-1000`}
              />
            )}
          </div>
        </div>

        {model.galleryImageLarge.slice(1).map((image, index) => {
          if (model.usp.length === 0) {
            return <></>;
          }

          if (model.usp.length > 0 && model.usp.length === index + 1) {
            return (
              <div
                key={image}
                className={`flex justify-between items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="w-4/12">
                  <h2 className="mx-auto text-[36px]">{model.usp[index]}</h2>
                </div>
                <img
                  src={image}
                  alt={image}
                  className="w-8/12 mx-auto object-fill"
                />
              </div>
            );
          }
        })}

        {JSON.stringify(model)}
      </div>
    </div>,
    document.body
  );
};

export default ActiveModel;
import { ChipOption } from "../../types/types";

const ChipOptions: React.FC<ChipOption> = ({ fmyChipType, optionList }) => {
  if (fmyChipType === "COLOR") {
    return (
      <div className="flex justify-start leading-none space-x-2 items-center pt-2">
        <div className="text-[14px] pr-2">beschikbaar in</div>
        {optionList.map((option) => {
          return (
            <div
              className="rounded-full w-[18px] h-[18px]"
              key={option.optionCode}
              style={{ backgroundColor: option.optionCode }}
            />
          );
        })}
      </div>
    );
  }

  if (fmyChipType === "MOBILE MEMORY" && optionList.length > 0) {
    return (
      <div className="pt-2">
        <div className="flex justify-start items-center space-x-2">
          {optionList.map((option) => {
            return (
              <div className="text-[14px]" key={option.optionLocalName}>
                {option.optionLocalName}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <></>;
};

export default ChipOptions;

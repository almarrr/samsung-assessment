import { ChipOption } from "../../types/types";

const ChipOptions: React.FC<ChipOption> = ({ fmyChipType, optionList }) => {
  if (fmyChipType === "COLOR") {
    return (
      <div>
        kleuren
        <div className="flex justify-start items-center space-x-1">
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
      </div>
    );
  }

  if (fmyChipType === "MOBILE MEMORY") {
    return <div>geheugen</div>;
  }

  return <></>;
};

export default ChipOptions;

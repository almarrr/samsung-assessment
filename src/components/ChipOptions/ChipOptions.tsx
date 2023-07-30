import { useEffect, useState } from "react";
import { ChipOption, OptionList } from "../../types/types";

const ChipOptions: React.FC<ChipOption> = ({ fmyChipType, optionList }) => {
  const [selectedColorCode, setSelectedColorCode] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<OptionList | null>(null);

  const [memory, setMemory] = useState<OptionList | null>(null);

  useEffect(() => {
    if (fmyChipType === "COLOR") {
      setSelectedColorCode(optionList[0].optionCode);
    }

    if (fmyChipType === "MOBILE MEMORY") {
      setMemory(optionList[0]);
    }
  }, [fmyChipType, optionList]);

  useEffect(() => {
    if (fmyChipType === "COLOR") {
      setSelectedColor(
        optionList.find((x) => x.optionCode === selectedColorCode) || null
      );
    }
  }, [fmyChipType, optionList, selectedColorCode]);

  if (fmyChipType === "COLOR") {
    return (
      <>
        {selectedColor !== null && (
          <div className="text-[12px] pt-4">
            <b>Kleur:</b> {selectedColor.optionLocalName}
          </div>
        )}
        <div className="flex flex-wrap justify-center leading-none space-x-5 items-center pt-2">
          {optionList.map(({ optionCode }) => (
            <button
              key={optionCode}
              onClick={() => setSelectedColorCode(optionCode)}
              className={`rounded-full w-[18px] h-[18px] border border-black/50 ${
                selectedColorCode === optionCode
                  ? "outline outline-black/80 outline-offset-2"
                  : ""
              }`}
              style={{ backgroundColor: optionCode }}
            />
          ))}
        </div>
      </>
    );
  }

  if (fmyChipType === "MOBILE MEMORY" && optionList.length > 0) {
    return (
      <div className="pt-4">
        <div className="flex justify-center items-center space-x-2">
          {optionList.map((option) => {
            const { optionLocalName } = option;
            return (
              <button
                onClick={() => setMemory(option)}
                className={`text-[12px] font-bold rounded-full px-2 py-1 border ${
                  memory !== null && memory.optionCode === option.optionCode
                    ? "border-black"
                    : "border-transparent"
                }`}
                key={optionLocalName}
              >
                {optionLocalName}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return <></>;
};

export default ChipOptions;

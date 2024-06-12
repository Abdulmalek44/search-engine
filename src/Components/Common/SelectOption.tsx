import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { memo } from "react";

const SelsecStyle =
  "p-2 bg-main-bg text-black w-[169px] outline-none hover:bg-gray-200 cursor-pointer border w-full";

// Mapping of numerical values to display labels
const valueLabelMapping: { [key: number]: string } = {
  0: "Boolean Model",
  1: "Extended Boolean ",
  2: "Vector Model",
};
type SelectOptionProps = {
  model: number;
  setModel: (option: number) => void;
};

const SelectOption = memo(({ model, setModel }: SelectOptionProps) => {
  return (
    <Select
      value={model.toString()}
      onValueChange={(value) => setModel(Number(value))}
    >
      <SelectTrigger className="w-[168px] outline-none border rounded-sm p-2  hover:bg-gray-50">
        <SelectValue>{valueLabelMapping[model]}</SelectValue>
      </SelectTrigger>
      <SelectContent className="text-black rounded-sm cursor-pointer border-0">
        <SelectGroup className=" bg-white">
          <SelectItem value="0" className={SelsecStyle}>
            {valueLabelMapping[0]}
          </SelectItem>
          <SelectItem value="1" className={SelsecStyle}>
            {valueLabelMapping[1]}
          </SelectItem>
          <SelectItem value="2" className={SelsecStyle}>
            {valueLabelMapping[2]}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});

export default SelectOption;

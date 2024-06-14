import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { memo } from "react";

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
    <div className="">
      <Select
        value={model.toString()}
        onValueChange={(value) => setModel(Number(value))}
      >
        <SelectTrigger className="w-[170px] outline-none border rounded-sm p-2  hover:bg-gray-50">
          <SelectValue>{valueLabelMapping[model]}</SelectValue>
        </SelectTrigger>
        <SelectContent className="text-black rounded-sm cursor-pointer border-0">
          <SelectGroup className=" bg-white  ">
            <SelectItem value="0">{valueLabelMapping[0]}</SelectItem>
            <SelectItem value="1">{valueLabelMapping[1]}</SelectItem>
            <SelectItem value="2">{valueLabelMapping[2]}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
});

export default SelectOption;

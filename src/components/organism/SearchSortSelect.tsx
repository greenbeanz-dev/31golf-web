import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  type Selection,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

type SortType = "추천순" | "가나다순";

type SearchSortSelectProps = {
  value: SortType;
  onChange: (value: SortType) => void;
};

const SearchSortSelect = ({ value, onChange }: SearchSortSelectProps) => {
  const key = value === "가나다순" ? "option2" : "option1";
  const [selectedKeys, setSelectedKeys] = useState(new Set([key]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const selectMap = {
    option1: "추천순",
    option2: "가나다순",
  } as const;

  return (
    <div className="flex w-full justify-end">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" className="capitalize" size="sm">
            <BiSort /> {selectMap[selectedValue as keyof typeof selectMap]}{" "}
            <IoIosArrowDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="정렬"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys: Selection) => {
            setSelectedKeys(keys as Set<string>);
            const selected = Array.from(keys)[0];
            if (selected === "option2") onChange("가나다순");
            else onChange("추천순");
          }}
        >
          <DropdownItem key="option1">추천순</DropdownItem>
          <DropdownItem key="option2">가나다순</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SearchSortSelect;

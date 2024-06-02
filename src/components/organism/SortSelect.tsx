import { useProductInfiniteQueryBody } from "@/gql/query/product/useProductInfiniteQuery";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { BiSort } from "react-icons/bi";

const SortSelect = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["option1"]));

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
            <BiSort /> {selectMap[selectedValue]}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys: any) => {
            setSelectedKeys(keys);
            useProductInfiniteQueryBody
              .getState()
              .changeSortType(selectMap[selectedValue]);
          }}
        >
          <DropdownItem key="option1">추천순</DropdownItem>
          <DropdownItem key="option2">가나다순</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SortSelect;

import { useProductInfiniteQueryBody } from "@/gql/query/product/useProductInfiniteQuery";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
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
            <BiSort /> {selectMap[selectedValue]} <IoIosArrowDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelect={(key: any) => {
            console.log("list", key);
          }}
          onSelectionChange={(keys: Selection) => {
            setSelectedKeys(keys as any);
          }}
        >
          <DropdownItem
            key="option1"
            onClick={() => {
              useProductInfiniteQueryBody.getState().changeSortType("추천순");
            }}
          >
            추천순
          </DropdownItem>
          <DropdownItem
            key="option2"
            onClick={() => {
              useProductInfiniteQueryBody.getState().changeSortType("가나다순");
            }}
          >
            가나다순
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SortSelect;

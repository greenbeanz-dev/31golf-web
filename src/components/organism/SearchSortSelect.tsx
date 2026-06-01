import type { ProductSortType } from "@/types/productSort";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	type Selection,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const SORT_OPTIONS = [
	{ key: "option1", label: "추천순" },
	{ key: "option2", label: "가나다순" },
	{ key: "option3", label: "최저가순" },
] as const satisfies ReadonlyArray<{ key: string; label: ProductSortType }>;

const SORT_KEY_BY_TYPE = Object.fromEntries(
	SORT_OPTIONS.map((option) => [option.label, option.key]),
) as Record<ProductSortType, string>;

const SORT_TYPE_BY_KEY = Object.fromEntries(
	SORT_OPTIONS.map((option) => [option.key, option.label]),
) as Record<string, ProductSortType>;

type SearchSortSelectProps = {
	value: ProductSortType;
	onChange: (value: ProductSortType) => void;
};

const SearchSortSelect = ({ value, onChange }: SearchSortSelectProps) => {
	const [selectedKeys, setSelectedKeys] = useState(
		() => new Set([SORT_KEY_BY_TYPE[value]]),
	);

	useEffect(() => {
		setSelectedKeys(new Set([SORT_KEY_BY_TYPE[value]]));
	}, [value]);

	const selectedValue = useMemo(
		() => Array.from(selectedKeys)[0] ?? "option1",
		[selectedKeys],
	);

	const displayLabel = SORT_TYPE_BY_KEY[selectedValue] ?? SORT_OPTIONS[0].label;

	return (
		<div className="flex w-full justify-end">
			<Dropdown>
				<DropdownTrigger>
					<Button variant="light" className="capitalize" size="sm">
						<BiSort /> {displayLabel} <IoIosArrowDown />
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
						const sortType = SORT_TYPE_BY_KEY[selected];
						if (sortType) onChange(sortType);
					}}
				>
					{SORT_OPTIONS.map((option) => (
						<DropdownItem key={option.key}>{option.label}</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default SearchSortSelect;

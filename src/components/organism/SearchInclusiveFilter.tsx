import { InclusiveBadge } from "@component/molecule/InclusiveBadge";

type SearchInclusiveFilterProps = {
  options: string[];
  selected: string[];
  onToggle: (label: string) => void;
  onClear: () => void;
};

export default function SearchInclusiveFilter({
  options,
  selected,
  onToggle,
  onClear,
}: SearchInclusiveFilterProps) {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto overflow-y-hidden scrollbar-hide pb-1">
      {options.map((label) => (
        <InclusiveBadge
          key={label}
          label={label}
          selected={selected.includes(label)}
          onClick={() => onToggle(label)}
        />
      ))}
      {selected.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="shrink-0 text-[14px] text-[#666] underline underline-offset-2 hover:text-[#004964]"
        >
          초기화
        </button>
      )}
    </div>
  );
}

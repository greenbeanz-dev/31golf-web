import { cn } from "@nextui-org/react";

const badgeBaseClassName =
  "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[14px] font-normal leading-5 transition-colors";

/** 상품 카드에 표시되는 포함 항목 뱃지 */
export const inclusiveBadgeClassName = cn(
  badgeBaseClassName,
  "border border-[#17C964]/25 bg-[#17C964]/8 text-[#17C964]"
);

type InclusiveBadgeProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export function InclusiveBadge({
  label,
  selected = false,
  onClick,
  className,
}: InclusiveBadgeProps) {
  const isFilter = Boolean(onClick);

  const classes = cn(
    badgeBaseClassName,
    isFilter
      ? selected
        ? "border border-[#17C964] bg-[#17C964]/10 text-[#17C964] font-medium"
        : "border border-[#d9d9d9] bg-white text-[#666] hover:border-[#999999]"
      : inclusiveBadgeClassName,
    isFilter && "cursor-pointer",
    className
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {label}
      </button>
    );
  }

  return <span className={classes}>{label}</span>;
}

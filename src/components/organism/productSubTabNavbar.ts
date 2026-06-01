import type { NavbarProps } from "@nextui-org/react";

/** 상단 헤더(MobileTopBar / TopBar) 바로 아래에 고정 */
export const productSubTabStickyClassName =
  "sticky top-[var(--app-header-height)] z-40 bg-white border-b border-[#e0e0e0]";

export const productSubTabNavbarProps: Pick<
  NavbarProps,
  "style" | "classNames" | "className"
> = {
  className: productSubTabStickyClassName,
  style: {
    width: "100%",
    justifyContent: "flex-start",
    overflowX: "auto",
  },
  classNames: {
    wrapper: ["px-0", "cursor-pointer", "w-full"],
    item: [
      "flex",
      "relative",
      "h-[30px]",
      "cursor-pointer",
      "items-center",
      "justify-center",
      "data-[active=true]:after:content-['']",
      "data-[active=true]:after:absolute",
      "data-[active=true]:after:bottom-0",
      "data-[active=true]:after:left-0",
      "data-[active=true]:after:right-0",
      "data-[active=true]:after:h-[2px]",
      "data-[active=true]:after:rounded-[2px]",
      "data-[active=true]:after:bg-[#004964]",
    ],
    menu: ["px-0"],
  },
};

export function getProductSubTabItemClassName(isActive: boolean) {
  return `px-4 whitespace-nowrap ${isActive ? "text-[#004964] font-bold" : ""}`;
}

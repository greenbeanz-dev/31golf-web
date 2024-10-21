import { useRouter, useSearchParams } from "next/navigation";
import ProductListDetail from "./ProductListDetail";
import SortSelect from "./SortSelect";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

const navItem = [
  {
    label: "1박 2일(36홀)",
  },
  {
    label: "당일(18홀)",
  },
];

const ProductTabBarJeju = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("type") || navItem[0].label;
  const router = useRouter();

  return (
    <>
      <Navbar
        style={{
          width: "100%",
          justifyContent: "flex-start", // 탭 왼쪽 정렬
          overflowX: "auto",
        }}
        classNames={{
          wrapper: ["px-0", "cursor-pointer", "w-full"],
          item: [
            "flex",
            "relative",
            "h-[30px]",
            "w-[120px]",
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
        }}
      >
        <NavbarContent>
          {navItem.map((item) => {
            return (
              <NavbarItem
                className={`px-4 ${category === item.label ? "text-[#004964] font-bold" : ""}`}
                key={item.label}
                isActive={category === item.label}
                onClick={() => {
                  router.push("/jeju?type=" + item.label);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <SortSelect />
      <ProductListDetail category1="국내" category2="제주도" />
    </>
  );
};

export default ProductTabBarJeju;

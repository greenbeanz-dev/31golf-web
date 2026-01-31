import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import ProductListDetail from "./ProductListDetail";
import SortSelect from "./SortSelect";

const navItem = [
  {
    label: "강원도",
  },
  {
    label: "충청도",
  },
  {
    label: "전라도",
  },
  {
    label: "경상도",
  },
  {
    label: "경기도",
  },
  {
    label: "2인골프",
  },
  // {
  //   label: "제주도",
  // },
];

const ProductTabBarDomestic = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || navItem[0].label;
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
            "w-[60px]",
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
                  router.push("/domestic?category=" + item.label);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <SortSelect />
      <ProductListDetail category1="국내" category2={category} />
    </>
  );
};

export default ProductTabBarDomestic;

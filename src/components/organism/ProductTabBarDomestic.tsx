import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import {
  getProductSubTabItemClassName,
  productSubTabNavbarProps,
} from "./productSubTabNavbar";
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
      <Navbar {...productSubTabNavbarProps}>
        <NavbarContent>
          {navItem.map((item) => {
            const isActive = category === item.label;
            return (
              <NavbarItem
                className={getProductSubTabItemClassName(isActive)}
                key={item.label}
                isActive={isActive}
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

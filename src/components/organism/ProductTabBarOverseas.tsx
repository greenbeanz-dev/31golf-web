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
    label: "동남아",
  },
  {
    label: "일본",
  },
  {
    label: "중국/대만",
  },
  {
    label: "괌/사이판",
  },
];

const ProductTabBarOverseas = () => {
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
                  router.push(`/overseas?category=${item.label}`);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <SortSelect />
      <ProductListDetail category1="해외" category2={category} />
    </>
  );
};

export default ProductTabBarOverseas;

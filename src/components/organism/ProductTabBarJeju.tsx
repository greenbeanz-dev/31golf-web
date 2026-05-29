import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getProductSubTabItemClassName,
  productSubTabNavbarProps,
} from "./productSubTabNavbar";
import ProductListDetail from "./ProductListDetail";
import SortSelect from "./SortSelect";

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

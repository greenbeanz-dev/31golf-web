import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductTabBarDomestic = () => {
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
      label: "제주도",
    },
  ];
  const [tab, setTab] = useState("강원도");
  useEffect(() => {
    console.log(tab);
  }, [tab]);
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
            "h-full",
            "cursor-pointer",
            "items-center",
            "justify-start",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-sky-900",
          ],
          menu: ["px-0"],
        }}
      >
        <NavbarContent>
          {navItem.map((item) => {
            return (
              <NavbarItem
                className="px-4"
                key={item.label}
                isActive={tab === item.label}
                onClick={() => {
                  setTab(item.label);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <div style={{ minHeight: 24 }} />
      <ProductList type="detail" category1="국내" category2={tab} />
    </>
  );
};

export default ProductTabBarDomestic;

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ProductListDetail from "./ProductListDetail";

const ProductTabBarOverseas = () => {
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
  const [tab, setTab] = useState("동남아");
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
            "h-[30px]",
            "w-[75px]",
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
                className={`px-4 ${tab === item.label ? "text-[#004964] font-bold" : ""}`}
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
      <ProductListDetail category1="해외" category2={tab} />
    </>
  );
};

export default ProductTabBarOverseas;

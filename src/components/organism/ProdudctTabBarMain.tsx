import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Suspense, useState } from "react";
import ProductListMain from "./ProductListMain";

const navItem = [
  {
    label: "국내골프",
    name: "domestic",
  },
  {
    label: "제주골프",
    name: "jeju",
  },
  {
    label: "해외골프",
    name: "overseas",
  },
];

const ProdudctTabBarMain = () => {
  const [tab, setTab] = useState("domestic");

  return (
    <>
      <Navbar
        // isBordered
        classNames={{
          wrapper: ["px-0", "cursor-pointer", "max-w-[1200px]"],
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
        <NavbarContent className="flex px-0">
          {navItem.map((item) => {
            return (
              <NavbarItem
                className={`px-4 ${tab === item.label ? "text-[#004964] font-bold" : ""}`}
                key={item.label}
                isActive={tab === item.name}
                onClick={() => {
                  setTab(item.name);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <div className="min-h-[12px]" />
      <Suspense fallback={<div>loading...</div>}>
        <div>
          {tab == "domestic" && <ProductListMain category1="국내" />}
          {tab == "jeju" && (
            <ProductListMain category1="국내" category2="제주도" />
          )}
          {tab == "overseas" && <ProductListMain category1="해외" />}
        </div>
      </Suspense>
    </>
  );
};

export default ProdudctTabBarMain;

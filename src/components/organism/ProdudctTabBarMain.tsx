import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useState } from "react";
import ProductList from "./ProductList";

const ProdudctTabBarMain = () => {
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
            "cursor-pointer",
            "items-end",
            "justify-end",
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
        <NavbarContent className="flex px-0">
          {navItem.map((item) => {
            return (
              <NavbarItem
                className="px-4"
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
      {tab == "domestic" && (
        <div>
          <ProductList category1="국내" />
        </div>
      )}
      {tab == "jeju" && (
        <div>
          <ProductList category1="국내" category2="제주도" />
        </div>
      )}
      {tab == "overseas" && (
        <div>
          <ProductList category1="해외" />
        </div>
      )}
    </>
  );
};

export default ProdudctTabBarMain;

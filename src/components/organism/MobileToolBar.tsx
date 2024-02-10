import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export function MobileToolBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { label: "국내골프", href: "/domestic" },
    { label: "제주골프", href: "/jeju" },
    { label: "해외골프", href: "/overseas" },
    { label: "버스출발", href: "/bus" },
    { label: "차량", href: "/car" },
    { label: "질문/후기", href: "/question" },
    { label: "질문/후기", href: "" },
  ];
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={"/images/logo/31Logo_mobile.png"} width={120} height={54} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div style={{ width: 24, height: 24 }}>
            <AiOutlineSearch style={{ width: "100%", height: "100%" }} />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/*  가려서 안보여서 마진줌  */}
      <NavbarMenu className="mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

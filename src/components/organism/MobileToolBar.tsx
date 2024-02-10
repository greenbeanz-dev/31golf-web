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
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export function MobileToolBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { label: "로그인", href: "" },
    { label: "회원가입", href: "" },
    { label: "아이디/비밀번호 찾기", href: "" },
  ];
  const router = useRouter();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{
        backgroundColor: "white",
        zIndex: 1000, // 가장 상위로올림 (다른 탭과 겹칠 경우를 피하기 위함 )
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            style={{
              cursor: "pointer",
            }}
            src={"/images/logo/31Logo_mobile.png"}
            width={120}
            height={54}
            onClick={() => {
              router.push("/");
            }}
          />
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

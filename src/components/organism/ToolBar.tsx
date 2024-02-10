import {
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import useLogin from "../../utils/login/useLogin";

const navItem = [
  {
    label: "국내골프",
    href: "/domestic",
  },
  {
    label: "제주골프",
    href: "/jeju",
  },
  {
    label: "해외골프",
    href: "/overseas",
  },
  {
    label: "추가메뉴",
    href: "/addmenu",
  },
];

export default function Topbar() {
  const { pathname } = useRouter();
  const { login, isLogin, logOut, userProfile } = useLogin();

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          zIndex: 1000, // 가장 상위로올림 (다른 탭과 겹칠 경우를 피하기 위함 )
        }}
        // isBordered
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarBrand>
          <img src={"/images/logo/31Logo.png"} height={65} width={160} />
          {/* <Image
            src="/images/logo/31Logo.png"
            width={160}
            height={70}
            alt="logo"
          ></Image> */}
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {navItem.map((item) => {
            return (
              <NavbarItem
                className="px-4"
                key={item.label}
                isActive={pathname === item.href}
              >
                <Link color="foreground" href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarItem>{/* <ThemeSwitcher /> */}</NavbarItem>
      </Navbar>
      <div style={{ height: 24 }} />
      <Divider />
    </>
  );
}

import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
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
    href: "/addMenu",
  },
];

export default function Topbar() {
  const { pathname } = useRouter();
  const { login, isLogin, logOut, userProfile } = useLogin();
  const router = useRouter();

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          zIndex: 1000, // 가장 상위로올림 (다른 탭과 겹칠 경우를 피하기 위함 )
          borderBottom: "1px solid #e0e0e0",
          padding: "10px 0 20px",
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
            "data-[active=true]:after:bg-sky-900",
          ],
        }}
      >
        {/* <NavbarBrand>
          <img
            style={{
              cursor: "pointer",
            }}
            src={"/images/logo/31Logo.png"}
            height={65}
            width={160}
            onClick={() => {
              router.push("/");
            }}
          />
        </NavbarBrand> */}
        <NavbarContent justify="center" className="gap-20">
          <>
            <img
              style={{
                cursor: "pointer",
              }}
              src={"/images/logo/31Logo.png"}
              height={65}
              width={160}
              onClick={() => {
                router.push("/");
              }}
            />
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
          </>
        </NavbarContent>
      </Navbar>
      {/* <div style={{ height: 24 }} />
      <Divider /> */}
    </>
  );
}

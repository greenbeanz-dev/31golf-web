import HeaderSearchBar from "@component/organism/HeaderSearchBar";
import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const navItem = [
  {
    label: "국내골프",
    href: "domestic",
  },
  {
    label: "제주골프",
    href: "jeju",
  },
  {
    label: "해외골프",
    href: "overseas",
  },
];

export default function Topbar() {
  const { pathname } = useRouter();
  const router = useRouter();

  return (
    <Navbar
      className="flex justify-start z-50 border-b-1 border-[#e0e0e0] bg-white pb-5"
      classNames={{
        wrapper: ["px-0", "max-w-full", "items-end", "gap-4"],
        item: ["flex", "h-full", "justify-start", "items-end"],
      }}
    >
      <NavbarContent
        justify="start"
        className="w-full shrink-0 gap-0 items-end"
      >
        <Image
          style={{
            cursor: "pointer",
          }}
          alt="logo"
          src="/images/logo/31Logo.png"
          height={65}
          width={160}
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="pl-7" />
        {navItem.map((item) => (
          <NavbarItem
            className="w-[140px]"
            key={item.label}
            isActive={pathname === `/${item.href}`}
          >
            <Link color="foreground" href={`/${item.href}`}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className="ml-auto flex items-end self-end">
          <HeaderSearchBar variant="desktop" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

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
  {
    label: "반려동물 사랑🐶🐱",
    href: "foreigner",
  },
];

export default function Topbar() {
  const { pathname } = useRouter();
  const router = useRouter();

  return (
    <Navbar
      className="flex justify-start z-50 border-b-1 border-[#e0e0e0] bg-white pb-5"
      classNames={{
        wrapper: ["px-0"],
        item: [
          "flex",
          "relative",
          "h-full",
          "justify-start",
          "items-end",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-[#004964]",
        ],
      }}
    >
      <NavbarContent justify="center">
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
        {navItem.map((item) => {
          const isPetLabel = item.label === "반려동물 사랑🐶🐱";

          const renderLabel = () => {
            if (isPetLabel) {
              const text = item.label.replace(/🐶🐱/, "");
              return (
                <>
                  {text}
                  <span className="text-xl">🐶🐱</span>
                </>
              );
            }
            return item.label;
          };

          return (
            <NavbarItem
              className="w-[140px]"
              key={item.label}
              isActive={pathname === item.href}
            >
              <Link color="foreground" href={`/${item.href}`}>
                {renderLabel()}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </Navbar>
  );
}

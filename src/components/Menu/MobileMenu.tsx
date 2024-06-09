import { useRouter } from "next/router";
import { TbHome } from "react-icons/tb";
import { TbGolf } from "react-icons/tb";
import { TbBeach } from "react-icons/tb";
import { TbPlaneDeparture } from "react-icons/tb";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";

export function MobileMenu() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const firstRow = [
    {
      label: "처음으로",
      icon: <TbHome size={32} color={theme.colors.primary} />,
      href: "",
    },
    {
      label: "국내골프",
      icon: <TbGolf size={32} color={theme.colors.primary} />,
      href: "domestic",
    },
    {
      label: "제주골프",
      icon: <TbBeach size={32} color={theme.colors.primary} />,
      href: "jeju",
    },
    {
      label: "해외골프",
      icon: <TbPlaneDeparture size={32} color={theme.colors.primary} />,
      href: "overseas",
    },
  ];

  if (!isMobile) return null;
  return (
    <div>
      <div className="flex justify-start items-center gap-1">
        {firstRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 py-4 w-20  rounded-xl border-2"
            onClick={() => {
              router.push(`/${item.href}`);
            }}
          >
            {item.icon}
            <div className="text-sm text-[#004964]">{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 16 }} />
    </div>
  );
}

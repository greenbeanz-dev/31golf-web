import { useRouter } from "next/router";
import { FaMapMarkedAlt, FaTree } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";

export function MobileMenu() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const firstRow = [
    {
      label: "처음으로",
      icon: <MdHome size={32} color={theme.colors.primary} />,
      href: "",
    },
    {
      label: "국내골프",
      icon: <FaMapMarkedAlt size={32} color={theme.colors.primary} />,
      href: "domestic",
    },
    {
      label: "제주골프",
      icon: <FaTree size={32} color={theme.colors.primary} />,
      href: "jeju",
    },
    {
      label: "해외골프",
      icon: <PiAirplaneTakeoffFill size={32} color={theme.colors.primary} />,
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
            <div className="text-sm">{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 16 }} />
    </div>
  );
}

import { useRouter } from "next/router";
import { FaMapMarkedAlt, FaTree } from "react-icons/fa";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";

export function MobileMenu() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const firstRow = [
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
      <div className="flex justify-start items-center">
        {firstRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
            style={{ width: 72 }}
            onClick={() => {
              router.push(`/${item.href}`);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 16 }} />
    </div>
  );
}

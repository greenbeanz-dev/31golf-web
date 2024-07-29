import { useRouter } from "next/router";
import { TiHome } from "react-icons/ti";
import { IoGolf } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { TbPlaneDeparture } from "react-icons/tb";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FaPlaneDeparture } from "react-icons/fa";

export function MobileMenu() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const firstRow = [
    {
      label: "처음으로",
      icon: <TiHome size={32} color="#EC992A" />,
      color: "#EC992A",
      href: "",
    },
    {
      label: "국내골프",
      icon: <IoGolf size={32} color="#3EBC8A" />,
      color: "#3EBC8A",
      href: "domestic",
    },
    {
      label: "제주골프",
      icon: <FaUmbrellaBeach size={32} color="#984E5F" />,
      color: "#984E5F",
      href: "jeju",
    },
    {
      label: "해외골프",
      icon: <FaPlaneDeparture size={32} color="#9FD3F4" />,
      color: "#9FD3F4",
      href: "overseas",
    },
  ];

  if (!isMobile) return null;
  return (
    <div>
      <div className="flex justify-between items-center gap-1">
        {/* {firstRow.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 py-4 w-20 rounded-xl border-2 border-[${item.color}] cursor-pointer`}
            onClick={() => {
              router.push(`/${item.href}`);
            }}
          >
            {item.icon}
            <div className={`text-sm text-[${item.color}]`}>{item.label}</div>
          </div>
        ))} */}
        <div
          className={`flex flex-col items-center gap-2 py-4 w-20 rounded-xl border-2 border-[#EC992A] cursor-pointer`}
          onClick={() => {
            router.push(`/`);
          }}
        >
          <TiHome size={32} color="#EC992A" />
          <div className={`text-sm`}>처음으로</div>
        </div>
        <div
          className={`flex flex-col items-center gap-2 py-4 w-20 rounded-xl border-2 border-[#3EBC8A] cursor-pointer`}
          onClick={() => {
            router.push(`/domestic`);
          }}
        >
          <IoGolf size={32} color="#3EBC8A" />
          <div className={`text-sm`}>국내골프</div>
        </div>
        <div
          className={`flex flex-col items-center gap-2 py-4 w-20 rounded-xl border-2 border-[#984E5F] cursor-pointer`}
          onClick={() => {
            router.push(`/jeju`);
          }}
        >
          <FaUmbrellaBeach size={32} color="#984E5F" />
          <div className={`text-sm`}>제주골프</div>
        </div>
        <div
          className={`flex flex-col items-center gap-2 py-4 w-20 rounded-xl border-2 border-[#9FD3F4] cursor-pointer`}
          onClick={() => {
            router.push(`/overseas`);
          }}
        >
          <FaPlaneDeparture size={32} color="#9FD3F4" />
          <div className={`text-sm`}>해외골프</div>
        </div>
      </div>
      <div className="min-h-8" />
    </div>
  );
}

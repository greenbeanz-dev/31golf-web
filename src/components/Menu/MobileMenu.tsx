import { useRouter } from "next/router";
import {
  FaBusAlt,
  FaCarSide,
  FaMapMarkedAlt,
  FaStore,
  FaTree,
} from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { PiAirplaneTakeoffFill } from "react-icons/pi";

export function MobileMenu() {
  const router = useRouter();
  const firstRow = [
    {
      label: "국내골프",
      icon: <FaMapMarkedAlt size={32} color="#004964" />,
      herf: "domestic",
    },
    {
      label: "제주골프",
      icon: <FaTree size={32} color="#004964" />,
      href: "jeju",
    },
    {
      label: "해외골프",
      icon: <PiAirplaneTakeoffFill size={32} color="#004964" />,
      href: "overseas",
    },
    {
      label: "버스출발",
      icon: <FaBusAlt size={32} color="#004964" />,
      herf: "bus",
    },
  ];

  const secondRow = [
    {
      label: "차량",
      icon: <FaCarSide size={32} color="#004964" />,
      herf: "/bus",
    },
    {
      label: "질문/후기",
      icon: <FaCircleQuestion size={32} color="#004964" />,
      herf: "/question",
    },
    {
      label: "질문/후기",
      icon: <FaStore size={32} color="#004964" />,
      herf: "/question",
    },
    {
      label: "",
      icon: <></>,
      herf: "/question",
    },
  ];
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="flex justify-between items-center">
        {firstRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
            style={{ width: 72 }}
            onClick={() => {
              router.push(item.herf as string);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 16 }} />
      <div className="flex justify-between items-center">
        {secondRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
            style={{ width: 72 }}
            onClick={() => {
              router.push(item.herf as string);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

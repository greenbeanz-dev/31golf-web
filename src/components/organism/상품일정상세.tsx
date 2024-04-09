import { FaBed, FaCarSide } from "react-icons/fa";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FaGolfBallTee } from "react-icons/fa6";
import { TbFlag3Filled } from "react-icons/tb";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import {
  PiForkKnifeFill,
  PiMinusSquareFill,
  PiPlusSquareFill,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHotMeal } from "react-icons/gi";

interface 상품일정상세Props {
  inclusiveList: string[];
  exclusiveList: string[];
}

const 상품일정상세 = ({ inclusiveList, exclusiveList }: 상품일정상세Props) => {
  const planList = [
    {
      day: 1,
      item: [
        {
          title: "개인출발",
          time: 9,
          icon: <FaCarSide size={24} color={theme.colors.primary} />,
        },
        {
          title: "골프장 도착",
          time: 11,
          icon: <TbFlag3Filled size={24} color={theme.colors.primary} />,
        },
        {
          title: "오후-남해사우스케이프오너스 C.C",
          time: 13,
          icon: <FaGolfBallTee size={24} color={theme.colors.primary} />,
        },
      ],
      hotel: "가든스위트 리조트(2인 1실)",
      meal: "조식/중식/석식",
    },
    {
      day: 2,
      item: [
        {
          title: "체크아웃/골프장이동",
          time: 0,
          icon: <TbFlag3Filled size={24} color={theme.colors.primary} />,
        },
        {
          title: "조식",
          time: 11,
          icon: <PiForkKnifeFill size={24} color={theme.colors.primary} />,
        },
        {
          title: "골프장 출발",
          time: 13,
          icon: <TbFlag3Filled size={24} color={theme.colors.primary} />,
        },
      ],
      hotel: "가든스위트 리조트(2인 1실)",
      meal: "조식/중식/석식",
    },
  ];
  const isMobile = useIsMobile();
  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
      <div
        className="flex"
        // style={{ flex: 2 }}
        style={{
          flex: 2,
          alignItems: "flex-start",
        }}
      >
        <div className="w-full">
          <div className="text-xl font-bold">일정 상세</div>
          {isMobile && <div style={{ minHeight: 24 }} />}
          <Accordion variant="light" selectionMode="multiple">
            {planList.map((data, index) => (
              <AccordionItem
                key={index}
                title={`${data.day}일차`}
                indicator={
                  <IoIosArrowDown size={24} color={theme.colors.primary} />
                }
              >
                <>
                  {data.item.map((item, idx) => (
                    <div key={idx}>
                      <PlanItem
                        icon={item.icon}
                        title={item.title}
                        time={item.time}
                      />
                      {idx !== data.item.length - 1 && (
                        <div style={{ minHeight: 8 }} />
                      )}
                    </div>
                  ))}
                  <div style={{ minHeight: 16 }} />
                  <div className="w-96 h-9 justify-start items-center gap-4 inline-flex">
                    <GuideInfo
                      icon={<FaBed size={16} color={theme.colors.primary} />}
                      label="호텔"
                      value={data.hotel}
                    />
                  </div>
                  <div style={{ minHeight: 8 }} />
                  <div className="w-96 h-9 justify-start items-center gap-4 inline-flex">
                    <GuideInfo
                      icon={
                        <GiHotMeal size={16} color={theme.colors.primary} />
                      }
                      label="식사"
                      value={data.meal}
                    />
                  </div>
                </>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div style={{ minWidth: 32 }} />
      <div className="flex" style={{ flex: 1 }}>
        <div className="w-full">
          {isMobile && <div style={{ minHeight: 24 }} />}
          <div className="text-[20px] font-bold">포함 사항</div>
          <div className="pt-6" />
          <div className="flex flex-col gap-1">
            {inclusiveList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <PiPlusSquareFill size={18} color={theme.colors.primary} />
                <div className="text-[14px] opacity-70 leading-none">
                  {item}
                </div>
              </div>
            ))}
          </div>
          {isMobile && <Divider />}
          <div className="pt-10" />
          <div className="text-xl font-bold">불포함 사항</div>
          <div className="pt-6" />
          <div className="flex flex-col gap-1">
            {exclusiveList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <PiMinusSquareFill size={16} color={theme.colors.secondary} />
                <div className="text-[14px] opacity-70 leading-none">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GuideInfo = ({ icon, label, value }) => (
  <>
    <div className="h-9 px-4 py-2 bg-[#004964] bg-opacity-10 rounded-xl justify-center items-center gap-2 flex">
      <div className="w-4 h-3 relative">{icon}</div>
      <div className="text-black text-opacity-70 text-sm font-normal">
        {label}
      </div>
    </div>
    <div className="grow shrink basis-0 text-black text-opacity-70 text-sm font-normal">
      {value}
    </div>
  </>
);

const PlanItem = ({ icon, title, time }) => (
  <div className="h-14 p-2 bg-black bg-opacity-5 rounded-xl justify-between items-center inline-flex w-full">
    <div className="h-10 justify-start items-center gap-2 flex">
      <div className="w-10 h-10 bg-white rounded-xl justify-center items-center gap-2.5 flex">
        <div className="w-6 h-5 relative">{icon}</div>
      </div>
      <div className="text-black text-base">{title}</div>
    </div>
    {/* <div className="h-5 pr-2 justify-between items-center flex">
      <div className="w-12 text-right text-black text-opacity-70 text-sm font-normal">
        {time}:00
      </div>
    </div> */}
  </div>
);

export default 상품일정상세;

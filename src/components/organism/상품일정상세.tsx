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
  scheduleList: {
    title: string;
    detailedSchedule: {
      icon: string;
      description: string;
    }[];
    basicItems: {
      icon: string;
      description: string;
    }[];
  }[];
  inclusiveList: string[];
  exclusiveList: string[];
}

const 상품일정상세 = ({
  scheduleList,
  inclusiveList,
  exclusiveList,
}: 상품일정상세Props) => {
  const isMobile = useIsMobile();
  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
      <div
        className="flex flex-2 items-start"
        style={{
          flex: 2,
          alignItems: "flex-start",
        }}
      >
        <div className="w-full">
          <div className="text-xl font-bold">일정 상세</div>
          {isMobile && <div className="pt-6" />}
          <Accordion variant="light" selectionMode="multiple">
            {scheduleList.map((data, index) => (
              <AccordionItem
                key={index}
                title={`${data.title}일차`}
                indicator={
                  <IoIosArrowDown size={24} color={theme.colors.primary} />
                }
              >
                <div className="flex flex-col gap-2">
                  {data.detailedSchedule.map((item, idx) => (
                    <div key={idx}>
                      <PlanItem
                        key={idx}
                        icon={item.icon}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
                <div className="pt-4" />
                <div className="flex flex-col gap-2">
                  {data.basicItems.map((item, idx) => (
                    <div key={idx}>
                      <GuideInfo
                        icon={item.icon}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="pl-8" />
      <div className="flex flex-1">
        <div className="w-full">
          {isMobile && <div className="pt-6" />}
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

const GuideInfo = ({ icon, description }) => {
  return (
    <div className="w-96 h-9 justify-start items-center gap-4 inline-flex">
      <div className="h-9 px-4 py-2 bg-[#004964] bg-opacity-10 rounded-xl justify-center items-center gap-2 flex">
        {icon === "hotel" ? (
          <FaBed size={16} color={theme.colors.primary} />
        ) : (
          <GiHotMeal size={16} color={theme.colors.primary} />
        )}
        <div className="flex items-center text-black text-opacity-70 text-sm font-normal">
          {icon === "hotel" ? "숙소" : "식사"}
        </div>
      </div>
      <div className="flex items-center grow shrink basis-0 text-black text-opacity-70 text-sm font-normal">
        {description}
      </div>
    </div>
  );
};

const PlanItem = ({ icon, description }) => (
  <div className="h-14 p-2 bg-black bg-opacity-5 rounded-xl justify-between items-center inline-flex w-full">
    <div className="h-10 justify-start items-center gap-2 flex">
      <div className="w-10 h-10 bg-white rounded-xl justify-center items-center gap-2.5 flex">
        {icon === "car" ? (
          <FaCarSide size={24} color={theme.colors.primary} />
        ) : icon === "golf" ? (
          <FaGolfBallTee size={24} color={theme.colors.primary} />
        ) : icon === "flag" ? (
          <TbFlag3Filled size={24} color={theme.colors.primary} />
        ) : (
          <PiForkKnifeFill size={24} color={theme.colors.primary} />
        )}
      </div>
      <div className="text-black text-base">{description}</div>
    </div>
    {/* <div className="h-5 pr-2 justify-between items-center flex">
      <div className="w-12 text-right text-black text-opacity-70 text-sm font-normal">
        {time}:00
      </div>
    </div> */}
  </div>
);

export default 상품일정상세;

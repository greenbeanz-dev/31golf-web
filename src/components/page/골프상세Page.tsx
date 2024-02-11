import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
} from "@nextui-org/react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiSolidMinusSquare } from "react-icons/bi";
import { BsBuildingFillCheck } from "react-icons/bs";
import {
  FaBed,
  FaCarSide,
  FaCheckToSlot,
  FaGolfBallTee,
  FaRegCalendarPlus,
} from "react-icons/fa6";
import { GiHotMeal } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";
import { TbFlag3Filled } from "react-icons/tb";

export function 골프상세Page() {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="flex-1">
          <img src={"/images/logo/detail_image.png"} width={640} height={492} />
        </div>
        <div style={{ minWidth: 24 }} />
        <div className="flex-1">
          <Breadcrumbs size="lg">
            <BreadcrumbItem>국내골프</BreadcrumbItem>
            <BreadcrumbItem>남해</BreadcrumbItem>
          </Breadcrumbs>
          <div style={{ minHeight: 8 }} />
          <div className="font-bold text-4xl">
            남해 사우스케이프 C.C 1박 2일 (36홀)
          </div>
          <div style={{ minHeight: 8 }} />
          <div className="text-base font-normal">
            크고 작은 섬들로 장식되어 있는 바다를 계속 조망하면서 라운딩을
            해보세요!
          </div>
        </div>
      </div>

      <div style={{ minHeight: 32 }} />
      {/* 예약 가이드  */}
      <div className="flex">
        <div className="flex" style={{ flex: 2.5 }}>
          <div>
            <예약가이드 />
            <div style={{ minHeight: 40 }} />
            <일정상세 />
            <이용특정및참고사항 />
            <유의사항 />
          </div>
        </div>
        <div className="flex" style={{ flex: 1 }}>
          여기 2
        </div>
      </div>
    </div>
  );
}

const 예약가이드 = () => {
  return (
    <div>
      <div className="text-xl font-bold">예약 가이드</div>
      <div style={{ minHeight: 16 }} />
      <div className="w-full flex flex-grow justify-start items-center gap-1 inline-flex">
        <Step
          number="1단계"
          description1="예약 신청"
          description2=" 및 비용 결제"
          icon={<FaRegCalendarPlus size={32} color="#004964" />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="2단계"
          description1="골프장 및 숙박시설"
          description2="예약 가능 여부 확인"
          icon={<BsBuildingFillCheck size={32} color="#004964" />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="3단계"
          description1="예약 가능 (예약 완료)"
          description2="예약 불가 (자동 취소 및 환불)"
          icon={<FaCheckToSlot size={32} color="#004964" />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="4단계"
          description1="골프 투어 "
          description2="GO GO~"
          icon={<FaGolfBallTee size={32} color="#004964" />}
        />
      </div>
    </div>
  );
};

const 일정상세 = () => {
  const planList = [
    {
      day: 1,
      item: [
        {
          title: "개인출발",
          time: 9,
          icon: <FaCarSide size={24} color="#004964" />,
        },
        {
          title: "골프장 도착",
          time: 11,
          icon: <TbFlag3Filled size={24} color="#004964" />,
        },
        {
          title: "오후-남해사우스케이프오너스 C.C",
          time: 13,
          icon: <FaGolfBallTee size={24} color="#004964" />,
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
          icon: <TbFlag3Filled size={24} color="#004964" />,
        },
        {
          title: "조식",
          time: 11,
          icon: <PiForkKnifeFill size={24} color="#004964" />,
        },
        {
          title: "골프장 출발",
          time: 13,
          icon: <TbFlag3Filled size={24} color="#004964" />,
        },
      ],
      hotel: "가든스위트 리조트(2인 1실)",
      meal: "조식/중식/석식",
    },
  ];
  const includeList = [
    "가든스위트리조트(2인실)",
    "조식 1회 / 석식 1회",
    "그린피 36홀",
    "와인바크레딧 5만 원(2인 기준)",
  ];
  const excludeList = [
    "중식",
    "캐디피",
    "전동카",
    "교통편",
    "개별소비세(19홀 당 21,120원)",
  ];
  return (
    <div className="flex">
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
          <Accordion variant="light" selectionMode="multiple">
            {planList.map((data, index) => (
              <AccordionItem
                key={index}
                title={`${data.day}일차`}
                indicator={<IoIosArrowDown size={24} color="#004964" />}
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
                      icon={<FaBed size={16} color="#004964" />}
                      label="호텔"
                      value={data.hotel}
                    />
                  </div>
                  <div style={{ minHeight: 8 }} />
                  <div className="w-96 h-9 justify-start items-center gap-4 inline-flex">
                    <GuideInfo
                      icon={<GiHotMeal size={16} color="#004964" />}
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
          <div className="text-xl font-bold">포함 사항</div>
          <div style={{ minHeight: 24 }} />
          {includeList.map((item) => (
            <div className="flex items-center gap-2">
              <AiFillPlusSquare size={16} color="#004964" />
              {item}
            </div>
          ))}
          <div style={{ minHeight: 40 }} />
          <div className="text-xl font-bold">불포함 사항</div>
          <div style={{ minHeight: 24 }} />
          {excludeList.map((item) => (
            <div className="flex items-center">
              <BiSolidMinusSquare size={16} color="#FF502A" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GuideInfo = ({ icon, label, value }) => (
  <>
    <div className="h-9 px-4 py-2 bg-sky-900 bg-opacity-10 rounded-xl justify-center items-center gap-2 flex">
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
    <div className="h-5 pr-2 justify-between items-center flex">
      <div className="w-12 text-right text-black text-opacity-70 text-sm font-normal">
        {time}:00
      </div>
    </div>
  </div>
);

const 이용특정및참고사항 = () => {
  return <div>이용특정및참고사항</div>;
};

const 유의사항 = () => {
  return (
    <div className="flex">
      <div className="flex" style={{ flex: 2.5 }}>
        <div>일정 상세</div>
      </div>
      <div className="flex" style={{ flex: 1 }}>
        dfdfdf
      </div>
    </div>
  );
};
const Step = ({ number, description1, description2, icon }) => (
  <div
    className="flex-grow py-8 bg-white rounded-2xl shadow border border-black border-opacity-10 flex-col justify-start items-center gap-4 inline-flex"
    style={{
      minWidth: 180,
    }}
  >
    <div className="w-8 h-8 relative">{icon}</div>
    <div className="flex-col justify-start items-center gap-1 flex">
      <div className="text-center text-black text-sm font-bold font-['Noto Sans'] leading-tight">
        {number}
      </div>
      <div className="text-center text-black text-opacity-70 text-sm font-normal font-['Noto Sans'] leading-tight">
        {description1}
      </div>
      <div className="text-center text-black text-opacity-70 text-sm font-normal font-['Noto Sans'] leading-tight">
        {description2}
      </div>
    </div>
  </div>
);

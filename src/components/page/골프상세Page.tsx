import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Divider,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiSolidMinusSquare } from "react-icons/bi";
import { BsBuildingFillCheck } from "react-icons/bs";
import {
  FaBed,
  FaCarSide,
  FaCheckToSlot,
  FaCircleMinus,
  FaCirclePlus,
  FaGolfBallTee,
  FaRegCalendarPlus,
} from "react-icons/fa6";
import { GiHotMeal } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import { PiForkKnifeFill } from "react-icons/pi";
import { TbFlag3Filled } from "react-icons/tb";

export function 골프상세Page() {
  const productRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (productRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 280) {
          //  @ts-ignore
          productRef.current.style.marginTop = `${scrollTop - 280}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="flex" style={{ flex: 2 }}>
          <div>
            <예약가이드 />
            <div style={{ minHeight: 40 }} />
            <일정상세 />
            <div style={{ minHeight: 24 }} />
            <Divider />
            <div style={{ minHeight: 40 }} />
            <이용특정및참고사항 />
            <div style={{ minHeight: 40 }} />
            <Divider />
            <div style={{ minHeight: 40 }} />
            <유의사항 />
            <div style={{ minHeight: 40 }} />
            <ButtonList />
            <div style={{ minHeight: 24 }} />
            <GolfDetail />
          </div>
        </div>
        <div className="flex" ref={productRef} style={{ flex: 1 }}>
          <div>
            <GolfProductPayment />
          </div>
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

const 이용특정및참고사항 = () => {
  const 참고사항 = [
    "진행 시 패키지 2인 요금 입금 확인 후 진행 확정입니다.",
    "객실 업그레이드 / 타입 변경 시 요금이 추가됩니다.",
    "팀수 변동이나 취소는 1팀 ~ 2팀의 경우 15일 전 / 3팀 이상은 22일 전 / 5팀 이상은 31일 전까지만 가능합니다. (이후 변경 시 위약금 발생)",
    "기상 악화로 인하여 골프장이 크로스되어도, 숙소 요금은 환불이 불가능합니다.",
    "석식 메뉴 : 남해 심해 통발 장어구이, 남해 자연산 활어회, 남해우 한식스테이크 중 1개 메뉴 선택",
    "9홀 라운딩 후 최소 20분, 최대 50분의 휴식시간이 있습니다.",
    "게스트하우스(골프스테이) 이용 시 골프매니아 PKG 적용, 별도 요금 할인됩니다.",
    "모든 삼일골프 회원님들이 VIP 입니다. 사우스케이프로 초대합니다.",
    "남해를 골프투어하는 2박 3일, 3박 4일 맞춤 패키지 진행 가능합니다.",
  ];
  return (
    <>
      <div className="text-xl font-bold">이용특전 및 참조사항</div>
      <div style={{ minHeight: 16 }} />
      {참고사항.map((data, idx) => (
        <>
          <li>{data}</li>
          {idx === 4 && (
            <div style={{ marginLeft: "1rem" }}>
              (남해우 한식스테이크 주문 시 1인당 20,000원 별도 추가, 현장결제
              또는 선결제 가능)
            </div>
          )}
        </>
      ))}
    </>
  );
};

const 유의사항 = () => {
  const 계약안내 = [
    "예약금 입금 후에 행사 진행됩니다. (잔금은 출발 15일 전까지)",
    "예약자명이 아닌 다른 이름으로 입금 시 꼭 확인 전화 부탁드립니다.",
  ];
  const 환불규정 = [
    {
      title: "패키지 티업시간 확정 후 취소 시 1인 2만 원 위약금이 적용됩니다.",
    },
    {
      title:
        "다만, 골프장 룰 기준에 따라 위약금과 환불 기간이 달라질 수 있습니다.",
    },
    {
      title:
        "1~2팀 : 행사 30~22일 전 취소 - 계약금 및 입금액 전액 환불 (단, 예약 확정 시 1인 2만 원 취소 수수료 부과)",
      subTitle: [
        "행사 21~15일 전 취소 : 상품가의 30%를 취소료로 부과",
        "행사 14~8일 전 취소 : 상품가의 40%를 취소료로 부과",
        "행사 7~14일 전 취소 : 상품가의 100%를 취소료로 부과 (환불 불가)",
      ],
    },
    {
      title:
        "단, 주말(금/토) 출발 상품 또는 3팀 이상의 단체는 추가로 별도의 취소 수수료 부과",
    },
    {
      title: "패키지 티업 시간 확정 후 취소 시 1인 2만 원 위약금 적용됩니다.",
      subTitle: [
        "행사 20~8일 전 취소 : 예약금 환불 불가",
        "행사 7일 전 ~ 당일 취소 : 패키지 상품 가격 기준 총 경비 전액 환불 불가",
      ],
    },
  ];
  return (
    <>
      <div className="text-xl font-bold">유의사항</div>
      <div style={{ minHeight: 16 }} />
      <div
        style={{
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        [계약 및 입금 안내]
      </div>
      {계약안내.map((data) => (
        <li>{data}</li>
      ))}
      <div
        style={{
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        [여행자의 계약해지 요청 시 환불 규정]
      </div>
      {환불규정.map((data) => (
        <>
          <li>{data.title}</li>
          {data.subTitle &&
            data.subTitle.map((item) => (
              <li
                style={{
                  marginLeft: "1rem",
                }}
              >
                {item}
              </li>
            ))}
        </>
      ))}
    </>
  );
};

const ButtonList = () => {
  const labelList = [
    "일정표",
    "친구에게 상품 공유",
    "골프장 정보",
    "숙박 정보",
    "골프장 가는길",
    "숙소 가는길",
    "취소 및 위약 규정",
    "우천 취소 안내",
    "이용 후기",
    "이 상품 찜하기",
  ];
  return (
    <div
      className="flex gap-2 w-full"
      style={{
        flexWrap: "wrap",
      }}
    >
      {labelList.map((data) => (
        <Button
          style={{ minWidth: 417, height: 56, borderColor: "gray" }}
          variant="bordered"
        >
          {data}
        </Button>
      ))}
    </div>
  );
};

const GolfDetail = () => {
  const detailList = [
    { label: "골프장명", value: "영광CC" },
    { label: "흡수/파", value: "18홀/72파" },
    { label: "주소", value: "전남 영광군 백수읍 해안로 1362-70번지" },
    { label: "홈페이지", value: "https://www.westoceancc.co.kr/" },
  ];
  return (
    <div>
      <img src={"/images/logo/detail_image.png"} height={492} width={822} />
      <div style={{ minHeight: 24 }}></div>
      {detailList.map((data) => (
        <>
          <div
            style={{
              minHeight: 70,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="flex h-full items-center">
              <div className="flex" style={{ flex: 1 }}>
                {data.label}
              </div>
              <div className="flex" style={{ flex: 2 }}>
                {data.value}
              </div>
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

const GolfProductPayment = () => {
  const title = "남해 사우스케이프오너스 C.C 1박 2일 (36홀)";
  const startDate = "2024.05.08(수)";
  const endDate = "2024.05.09(목)";
  const desc = "( 2~3인 진행 시 별도 문의 부탁드립니다)";
  const days = 1;
  const night = 2;
  const price = 243000;
  const [count, setCount] = useState<number>(4);
  return (
    <div>
      <div className="font-bold text-xl">{title}</div>
      <div className="flex">
        <div style={{ marginRight: "1rem" }}>기간</div>
        <div>{startDate}</div>
        <div>~</div>
        <div style={{ marginRight: "0.5rem" }}>{endDate}</div>
        <div>{days}박</div>
        <div>{night}일</div>
      </div>
      <div className="text-red-500 text-sm font-normal">{desc}</div>
      <div style={{ minHeight: 8 }} />

      {/* 박스 */}
      <div className="w-full h-20 px-4 py-6 rounded-2xl border border-black border-opacity-10 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <div className="flex items-center">
            성인
            <div className="text-xl font-bold" style={{ minWidth: "7rem" }}>
              {" "}
              {(count * price).toLocaleString()} 원
            </div>
          </div>
          <div style={{ minWidth: "2rem" }} />
          <div className="flex">
            <FaCircleMinus
              size={24}
              color="#004964"
              onClick={() => {
                if (count > 4) setCount(count - 1);
              }}
            />
            <div className="text-xl font-bold" style={{ minWidth: "1rem" }} />
            {count}명
            <div style={{ minWidth: "1rem" }} />
            <FaCirclePlus
              size={24}
              color="004964"
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ minHeight: 8 }} />
      {/* 총 금액  */}
      <div className="w-full h-9 px-1 justify-end items-center gap-4 inline-flex">
        <div className="text-black text-sm font-normal">총 금액</div>
        <div className="text-red-500 text-2xl font-bold">
          {(count * price).toLocaleString()} 원
        </div>
      </div>

      <div style={{ minHeight: 8 }} />
      <Button
        size="lg"
        style={{
          width: "100%",
          height: 48,
          backgroundColor: "#004964",
          color: "white",
          fontWeight: "bold",
        }}
      >
        투어 예약하기
      </Button>
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

const Step = ({ number, description1, description2, icon }) => (
  <div
    className="flex-grow py-8 bg-white rounded-2xl shadow border border-black border-opacity-10 flex-col justify-start items-center gap-4 inline-flex"
    style={{
      minWidth: 180,
      maxWidth: 180,
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

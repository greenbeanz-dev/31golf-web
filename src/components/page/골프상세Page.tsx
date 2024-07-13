import { 상품캘린더 } from "@component/calendar";
import LoginModal from "@component/login/LoginModal";
import 예약추가Modal from "@component/molecule/modal/예약추가Modal";
import 상품결제정보 from "@component/organism/상품결제정보";
import 상품예약버튼 from "@component/organism/상품예약버튼";
import 상품유의사항 from "@component/organism/상품유의사항";
import 상품이용특전 from "@component/organism/상품이용특전";
import 상품일정상세 from "@component/organism/상품일정상세";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Divider,
  useDisclosure,
} from "@nextui-org/react";
import dayjs from "dayjs";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import { BsBuildingFillCheck } from "react-icons/bs";
import {
  FaCheckToSlot,
  FaGolfBallTee,
  FaRegCalendarPlus,
} from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";
import useProductBy from "../../service/product/useProductBy";
import useLogin from "../../utils/login/useLogin";

const HEADER_HEIGHT = 95;

interface 골프상세PageProps {
  productId: number;
  productImageList: {
    id: number;
    productId: number;
    name: string;
    url: string;
  }[];
}

export function 골프상세Page({
  productId,
  productImageList,
}: 골프상세PageProps) {
  const { userProfile } = useLogin();
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: loginOpen,
    onClose: loginClose,
  } = useDisclosure();

  const productRef = useRef(null);
  const 예약가이드Ref = useRef(null);

  const scrollYRef = useRef(0);
  const [fixed, setFixed] = useState(false);

  const { data } = useProductBy({
    id: productId,
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;

      if (예약가이드Ref.current) {
        const 예약가이드Top = (예약가이드Ref.current as any).offsetTop;

        // 헤더높이만큼 더해줘야함
        if (scrollYRef.current + HEADER_HEIGHT > 예약가이드Top) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const PC_MESSAGE = data?.name || "" + " " + data?.type;
  const MOBILE_MESSAGE = data?.name || "";
  // make list from a list except for the last element
  // const MOBILE_CONTENT_NIGHTS = data?.type?.split(" ").slice(0, -1).join(" ");
  // const MOBILE_CONTENT_ROUNDS =
  //   data?.type?.split(" ").pop()?.replace("(", "").replace(")", "") || "";
  const MOBILE_CONTENT = [data?.type];
  const DAYS_NIGHT =
    data?.type === data?.type?.includes("당일")
      ? 1
      : Number(data?.type?.split("박")[0]);
  const DAYS_DAY = data?.type?.includes("당일")
    ? 1
    : Number(data?.type?.split("박")[1][0]);

  const [showDetail, setShowDetail] = useState(false);
  const [numPeople, setNumPeople] = useState<number>(4);

  const [판매가, set판매가] = useState<number>(0);
  const [출발일, set출발일] = useState<Date>(new Date());
  const [schedule, setSchedule] = useState<string>("당일");

  const reservationInfo = {
    status: "QUOTATION",
    dateDeparture: new Date(출발일),
    numPeople: numPeople,
    numTeam: Math.floor(numPeople / 4),
    productId: productId,
    productName: data?.name + " " + data?.type,
    customerId: Number(userProfile.id),
    customerName: userProfile.name || "",
    priceCustom: Number(판매가),
    daysDay: DAYS_DAY,
    daysNight: DAYS_NIGHT,
  };

  useEffect(() => {
    const endDate = new Date(출발일);
    if (!isNaN(DAYS_DAY)) {
      endDate.setDate(endDate.getDate() + DAYS_DAY - 1);
    }

    const formatted출발일 = dayjs(출발일).format("YY.MM.DD(ddd)");
    const formatted도착일 = dayjs(endDate).format("YY.MM.DD(ddd)");

    setSchedule(
      `${formatted출발일} ~ ${formatted도착일} (${isNaN(DAYS_NIGHT) ? "당일" : `${DAYS_NIGHT}박 ${DAYS_DAY}일`})`
    );
  }, [출발일]);

  const inclusiveList = data?.inclusives
    ? data.inclusives
        .split(",")
        .map((item) =>
          item.split("_@_").length === 2
            ? item.split("_@_").length > 0
              ? `${item.split("_@_")[0]} (${item.split("_@_")[1]})`.replaceAll(
                  "()",
                  ""
                )
              : item.split("_@_")[0]
            : item.split("_@_")[0]
        )
    : [];
  const exclusiveList = data?.exclusives
    ? data.exclusives
        .split(",")
        .map((item) =>
          item.split("_@_").length === 2
            ? item.split("_@_").length > 0
              ? `${item.split("_@_")[0]} (${item.split("_@_")[1]})`.replaceAll(
                  "()",
                  ""
                )
              : item.split("_@_")[0]
            : item.split("_@_")[0]
        )
    : [];

  const scheduleList = data?.schedulePc ? JSON.parse(data.schedulePc) : [];

  return (
    <>
      <div className="w-full h-full">
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
          <div className="flex-1">
            <div className="md:min-w-[640px] max-h-[492px] w-full h-full rounded-[24px] overflow-hidden">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
              >
                {/*  썸네일을 가장 앞으로 넣어줌  */}
                {productImageList &&
                  [
                    ...(data?.thumbnailImage
                      ? // 썸네일과 이미지 중복 제거
                        Array.from(
                          new Map(
                            [
                              { url: data.thumbnailImage },
                              ...productImageList,
                            ].map((item) => [item["url"], item])
                          ).values()
                        )
                      : [...productImageList]),
                  ].map((image, idx) => {
                    return (
                      <Image
                        alt="detail_image"
                        key={idx}
                        src={image.url}
                        width={640}
                        height={492}
                        className="rounded-[24px] max-h-[492px]"
                        layout="fixed"
                      />
                    );
                  })}
              </Carousel>
            </div>
          </div>
          <div style={{ minWidth: 24 }} />
          <div style={{ minHeight: isMobile ? 16 : 0 }} />
          <div className="flex-1">
            <Breadcrumbs size="lg">
              {data?.category1 && (
                <BreadcrumbItem className="text-black text-opacity-70">{`${data?.category1}골프`}</BreadcrumbItem>
              )}
              {data?.category2 && (
                <BreadcrumbItem className="text-black text-opacity-70">
                  {data?.category2}
                </BreadcrumbItem>
              )}
              {data?.category3 && (
                <BreadcrumbItem className="text-black text-opacity-70">
                  {data?.category3}
                </BreadcrumbItem>
              )}
            </Breadcrumbs>
            <div className="pt-2" />
            <div
              className={`font-bold ${isMobile ? "text-[20px]" : "text-[28px]"}`}
            >
              {isMobile ? `${MOBILE_MESSAGE}` : `${PC_MESSAGE}`}
            </div>
            {isMobile && (
              <>
                <div className="pt-2" />
                <div className="flex gap-1">
                  {MOBILE_CONTENT.map((content, idx) => (
                    <div key={idx} className="relative inline-block">
                      <div className="h-6 px-2 rounded-xl border border-green-500 justify-center items-center inline-flex">
                        <div className="text-green-500 text-sm">{content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="pt-2" />
            <div className="text-[16px] opacity-70">{data?.summary}</div>
            <div className="pt-[10px]" />
            <Suspense fallback={<div></div>}>
              <상품캘린더
                판매가={판매가}
                set판매가={set판매가}
                출발일={출발일}
                set출발일={set출발일}
                onClick={(date) => {
                  if (data) {
                    setShowDetail(true);
                  }
                }}
              />
            </Suspense>
          </div>
        </div>
        <div className="pt-8" />
        {/* 예약 가이드  */}
        <div className="flex ">
          <div className="flex flex-2 ">
            <div className="">
              {!isMobile && <예약가이드 예약가이드Ref={예약가이드Ref} />}
              <div className="pt-10" />
              <상품일정상세
                scheduleList={scheduleList}
                inclusiveList={inclusiveList}
                exclusiveList={exclusiveList}
              />
              <div className="pt-6" />
              <Divider />
              <div className="pt-10" />
              <상품이용특전 benefit={data?.benefit || ""} />
              <div className="pt-10" />
              <Divider />
              <div className="pt-10" />
              <상품유의사항 notice={data?.notice || ""} />
              {/* <div style={{ minHeight: 40 }} />
            <ButtonList /> */}
              <div className="pt-6" />
              {/* <GolfDetail /> */}
            </div>
          </div>
          {!isMobile && (
            <>
              <div style={{ minWidth: 16 }} />
              <div className="flex h-full" ref={productRef} style={{ flex: 1 }}>
                <div
                  style={{
                    position: fixed ? "fixed" : "absolute",
                    top: fixed ? `${HEADER_HEIGHT}px` : `700px`, // header height만큼 넣어줘야 이쁘게 스크롤 됨
                    width: "354px",
                  }}
                >
                  <상품예약버튼
                    product={{
                      name: data?.name + " " + data?.type,
                      schedule: schedule,
                    }}
                    reservation={reservationInfo}
                    setNumPeople={setNumPeople}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        {isOpen && (
          <예약추가Modal
            reservation={reservationInfo}
            setNumPeople={setNumPeople}
            일정={schedule}
            판매가={판매가}
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setShowDetail(false);
            }}
          />
        )}
        {isMobile && (
          <div
            className="fixed bottom-0 left-0 w-full rounded-tr-2xl"
            style={{
              display: "block",
              zIndex: isOpen ? 0 : 999,
              borderTop: "1px solid #E5E5E5",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              backgroundColor: "white",
            }}
          >
            {showDetail && (
              <div className="w-full p-4 flex-col justify-start inline-flex">
                <div
                  className="flex justify-center"
                  onClick={(e) => {
                    setShowDetail(!showDetail);
                  }}
                >
                  <MdKeyboardArrowDown size={24} />
                </div>
                <상품결제정보
                  count={numPeople}
                  setCount={setNumPeople}
                  name={data?.name + " " + data?.type}
                  price={판매가}
                  schedule={schedule}
                  note="(2~3인 진행 시 별도 문의 부탁드립니다)"
                />
              </div>
            )}
            <div className="w-full h-28 p-4 flex-col justify-start items-center gap-4 inline-flex">
              {!showDetail && (
                <div
                  className="w-full flex justify-center"
                  onClick={(e) => {
                    setShowDetail(!showDetail);
                  }}
                >
                  <MdKeyboardArrowUp size={24} />
                </div>
              )}
              <Button
                size="lg"
                style={{
                  width: "100%",
                  height: 48,
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  const telNumber = "02-561-8008";
                  판매가
                    ? !userProfile.id
                      ? loginOpen()
                      : onOpen()
                    : (window.location.href = `tel:${telNumber}`);
                }}
              >
                {판매가 ? "투어 예약하기" : "전화 문의"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <LoginModal
        isOpen={isLoginOpen}
        onOpen={loginOpen}
        onClose={loginClose}
      />
    </>
  );
}

const 예약가이드 = ({ 예약가이드Ref }: any) => {
  return (
    <div>
      <div className="text-xl font-bold" ref={예약가이드Ref}>
        예약 가이드
      </div>
      <div style={{ minHeight: 16 }} />
      <div className="w-full flex flex-grow justify-start items-center gap-1 inline-flex">
        <Step
          number="1단계"
          description1="예약 신청 및 접수"
          description2=""
          icon={<FaRegCalendarPlus size={32} color={theme.colors.primary} />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="2단계"
          description1="담당자 골프장 및 숙박시설"
          description2="예약 가능 여부 확인"
          icon={<BsBuildingFillCheck size={32} color={theme.colors.primary} />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="3단계"
          description1="담당자가 유선 상담진행"
          description2="예약 가능 (결제 진행)"
          description3="예약 불가 (취소 및 환불)"
          icon={<FaCheckToSlot size={32} color={theme.colors.primary} />}
        />
        <IoIosArrowRoundForward size={24} />
        <Step
          number="4단계"
          description1="골프 투어"
          description2="GO GO~"
          icon={<FaGolfBallTee size={32} color={theme.colors.primary} />}
        />
      </div>
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
  const isMobile = useIsMobile();
  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-col"} items-center`}>
      <img
        src={"/images/logo/detail_image.png"}
        height={492}
        width={isMobile ? 328 : 822}
      />
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
              width: "100%",
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

const Step = ({
  number,
  description1,
  description2,
  description3 = "",
  icon,
}) => (
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
      {description3.length > 0 && (
        <div className="text-center text-black text-opacity-70 text-sm font-normal font-['Noto Sans'] leading-tight">
          {description3}
        </div>
      )}
    </div>
  </div>
);

// const ButtonList = () => {
//   const labelList = [
//     "일정표",
//     "친구에게 상품 공유",
//     "골프장 정보",
//     "숙박 정보",
//     "골프장 가는길",
//     "숙소 가는길",
//     "취소 및 위약 규정",
//     "우천 취소 안내",
//     "이용 후기",
//     "이 상품 찜하기",
//   ];
//   const isMobile = useIsMobile();
//   return (
//     <div
//       className="flex gap-2 w-full"
//       style={{
//         flexWrap: "wrap",
//         justifyContent: "center",
//       }}
//     >
//       {labelList.map((data, idx) => (
//         <Button
//           key={idx}
//           style={{
//             minWidth: isMobile ? 328 : 350,
//             height: 56,
//             borderColor: "gray",
//           }}
//           variant="bordered"
//         >
//           {data}
//         </Button>
//       ))}
//     </div>
//   );
// };

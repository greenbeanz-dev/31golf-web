import { 베스트상품Component } from "@component/Product/베스트상품Component";
import Login from "@component/login/LoginComponent";
import ProdudctTabBarMain from "@component/organism/ProdudctTabBarMain";
import Image from "next/image";
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";
import { FaBusAlt, FaCarSide, FaMapMarkedAlt, FaStore } from "react-icons/fa";
import { FaCircleQuestion, FaTree } from "react-icons/fa6";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";

const 메인Page = () => {
  const isMobile = useIsMobile();
  const mainImageList = [
    {
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)",
      description:
        "바다름 품은 골프장! 다도해의 아름다움과 탁트인 바다의 상쾌감을 느껴보세요.",
      price: 246000,
    },
    {
      url: "https://greenbeanz-reservation-bucket.s3.ap-northeast-2.amazonaws.com/286e7e88-2e2a-4e21-b9de-688d9b3e011f",
      title: "그린필드CC 당일 18홀",
      description: "새로운 이름 새로운 느낌",
      price: 500000,
    },
    {
      url: "/images/logo/golf_img3.png",
      title: "강릉 메이플비치 C.C 1박 2일 (36홀)",
      description: "바람이 설계하고 사람이 감동하는 정통 링크스 코스!",
      price: 305000,
    },
  ];
  return (
    <ErrorBoundary fallback={<div>메인</div>}>
      {/* <Suspense fallback={<Spinner />}>  suspense 오류뜸  */}
      {isMobile ? (
        <></>
      ) : (
        <>
          <ImageCarousel />
          <div style={{ minHeight: 32 }}></div>
        </>
      )}
      <div className="flex w-full">
        {isMobile ? (
          <></>
        ) : (
          <>
            <Login />
          </>
        )}

        <div style={{ minWidth: isMobile ? 0 : 40 }}></div>

        {/* 베스트 상품  */}
        <div style={{ flex: isMobile ? 0 : 4, width: "100%" }}>
          {isMobile && <MobileMenu />}
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">삼일골프 베스트</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 베스트 투어 상품을 만나보세요!
            </div>
          </div>
          <div style={{ minHeight: 24 }} />
          <베스트상품Component />
          {/* <div
            className={`flex justify-between overflow-x-auto ${isMobile ? "gap-4" : ""}`}
          >
            {mainImageList.map((item) => {
              return (
                <div
                  style={{
                    width: isMobile ? 256 : 290,
                    minWidth: isMobile ? 256 : 290,
                  }}
                >
                  <img
                    className={"rounded-2xl"}
                    src={item.url}
                    height={isMobile ? 343 : 223}
                  />
                  <div style={{ minHeight: 16 }} />
                  <div className="text-base font-bold">{item.title}</div>
                  <div
                    className="text-base font-normal"
                    style={{
                      width: "100%",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.description}
                  </div>
                  <div className="text-sky-600 text-xl font-bold">
                    {item.price.toLocaleString()}원 ~
                  </div>
                </div>
              );
            })}
          </div> */}
          <div className={isMobile ? "min-h-[48px]" : "min-h-[36px]"} />
          {/* 투어 전체보기 */}
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">투어 전체보기</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 다양한 투어 상품을 만나보세요!
            </div>
          </div>
          <ProdudctTabBarMain />
        </div>
      </div>
      {/* </Suspense> */}
    </ErrorBoundary>
  );
};

const ImageCarousel = () => {
  const imageList = [
    "/images/logo/golf_main.png",
    "/images/logo/golf_main2.png",
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {imageList.map((image, idx) => {
        return (
          <Image
            alt={"mainImage"}
            key={idx}
            src={image}
            height={1200}
            width={400}
            className={"rounded-3xl"}
          />
        );
      })}
    </Carousel>
  );
};

const MobileMenu = () => {
  const router = useRouter();
  const firstRow = [
    {
      label: "국내골프",
      icon: <FaMapMarkedAlt size={32} color={theme.colors.primary} />,
      herf: "domestic",
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
    {
      label: "버스출발",
      icon: <FaBusAlt size={32} color={theme.colors.primary} />,
      herf: "bus",
    },
  ];

  const secondRow = [
    {
      label: "차량",
      icon: <FaCarSide size={32} color={theme.colors.primary} />,
      herf: "/bus",
    },
    {
      label: "질문/후기",
      icon: <FaCircleQuestion size={32} color={theme.colors.primary} />,
      herf: "/question",
    },
    {
      label: "질문/후기",
      icon: <FaStore size={32} color={theme.colors.primary} />,
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
              router.push(`/${item.herf as string}`);
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
              router.push(`/${item.herf as string}`);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default 메인Page;

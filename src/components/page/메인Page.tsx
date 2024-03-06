import { 상품이미지Component } from "@component/Image/상품이미지Component";
import { 베스트상품Component } from "@component/Product/베스트상품Component";
import {
  Button,
  Divider,
  Input,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FaBusAlt, FaCarSide, FaMapMarkedAlt, FaStore } from "react-icons/fa";
import { FaCircleQuestion, FaTree } from "react-icons/fa6";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";

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
      url: "/images/logo/golf_img2.png",
      title: "남해 사우스케이프 C.C 1박 2일 (36홀)",
      description:
        "크고 작은 섬들로 장식되어 있는 바다를 계속 조망하면서 라운딩을 해보세요.",
      price: 775000,
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
            {/*  회원 로그인  */}
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
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">투어 전체보기</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 다양한 투어 상품을 만나보세요!
            </div>
          </div>
          <TabBar />
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

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex-1 flex-col">
      <div className="text-xl font-bold">
        회원 로그인
        <div className="h-6" />
        <div className="flex flex-col gap-2">
          {/* <Input
            classNames={{
              mainWrapper: ["w-full"],
              input: ["!ring-transparent", "bg-transparent"],
            }}
            placeholder="아이디"
            size={"sm"}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Input
            classNames={{
              input: ["!ring-transparent"],
              mainWrapper: ["w-full"],
            }}
            placeholder="비밀번호"
            size={"sm"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> */}
          <div
            className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#ffe500]"
            // onClick={loginNaver}
          >
            <Image
              src="/icons/client/kakao_logo.svg"
              alt="naver"
              width={24}
              height={24}
            />
            <div className="pl-1.5" />
            {/* TODO: 텍스트 아래 공백 제거 */}
            <div className="text-[16px] font-medium text-black opacity-85 leading-none">
              카카오 로그인
            </div>
          </div>
          <div
            className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#03C75A]"
            // onClick={loginNaver}
          >
            <Image
              src="/icons/client/naver_logo.png"
              alt="naver"
              width={32}
              height={32}
            />
            <div className="pl-1" />
            <div className="text-[16px] font-medium text-white leading-none">
              네이버 로그인
            </div>
          </div>
          {/* <div
            className="h-8 items-center inline-flex"
            style={{
              fontSize: 14,
              fontWeight: "normal",
              justifyContent: "space-around",
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                alignItems: "center",
              }}
            >
              회원가입
            </div>
            <Divider orientation="vertical" style={{ height: 16 }} />
            <div
              className="flex"
              style={{
                alignItems: "center",
              }}
            >
              아이디·비밀번호
            </div>
          </div> */}
        </div>
      </div>
    </div>
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
};

const TabBar = () => {
  const navItem = [
    {
      label: "국내골프",
      name: "domestic",
    },
    {
      label: "제주골프",
      name: "jeju",
    },
    {
      label: "해외골프",
      name: "overseas",
    },
  ];
  const [tab, setTab] = useState("domestic");
  return (
    <>
      <Navbar
        // isBordered
        classNames={{
          wrapper: ["px-0", "cursor-pointer", "max-w-[1200px]"],
          item: [
            "flex",
            "relative",
            "h-[30px]",
            "cursor-pointer",
            "items-end",
            "justify-end",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-sky-900",
          ],
          menu: ["px-0"],
        }}
      >
        <NavbarContent className="flex px-0">
          {navItem.map((item) => {
            return (
              <NavbarItem
                className="px-4"
                key={item.label}
                isActive={tab === item.name}
                onClick={() => {
                  setTab(item.name);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <div className="min-h-[12px]" />
      {tab == "domestic" && (
        <div>
          <DomesticTab />
        </div>
      )}
      {tab == "jeju" && (
        <div>
          <DomesticTab />
        </div>
      )}
      {tab == "overseas" && (
        <div>
          <DomesticTab />
        </div>
      )}
    </>
  );
};

const DomesticTab = () => {
  const isMobile = useIsMobile();

  const ImageList = [
    {
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)1",
      description: "바다를 품은 골프장1!",
      price: 246000,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
    },
    {
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)2",
      description: "바다를 품은 골프장2!",
      price: 246001,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
    },
    {
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)3",
      description: "바다를 품은 골프장3!",
      price: 246003,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
    },
    {
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)4",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
    },
  ];
  return (
    <div className="w-full">
      {/* 반응형 여기 수정  */}
      <div className="w-full flex flex-wrap justify-between">
        {ImageList.map((item, idx) => {
          return (
            <상품이미지Component
              key={idx}
              item={item}
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={448}
              pcHeight={345}
            />
          );
        })}
      </div>
      <Button className="w-full h-12 bg-[#004964] text-white font-bold leading-6">
        <Image
          alt="circle"
          src={"/images/logo/add-circle.png"}
          width={24}
          height={24}
        />
        투어 상품 더보기
      </Button>
    </div>
  );
};
export default 메인Page;

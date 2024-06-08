import { MobileMenu } from "@component/Menu/MobileMenu";
import { 베스트상품Component } from "@component/Product/베스트상품Component";
import Login from "@component/login/LoginComponent";
import ProdudctTabBarMain from "@component/organism/ProdudctTabBarMain";
import Image from "next/image";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";

const 메인Page = () => {
  const isMobile = useIsMobile();

  return (
    <ErrorBoundary fallback={<div>메인</div>}>
      {isMobile ? (
        <></>
      ) : (
        <>
          <ImageCarousel />
          <div className="min-h-[32px]"></div>
        </>
      )}
      <div className="flex">
        {isMobile ? (
          <></>
        ) : (
          <>
            <Login />
          </>
        )}
        <div className={isMobile ? "min-w-0" : "min-w-[40px]"}></div>
        {/* 베스트 상품  */}
        <div
          style={{
            flex: isMobile ? 0 : 4,
            width: "100%",
            maxWidth: isMobile ? "100%" : 920,
          }}
        >
          <MobileMenu />
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">삼일골프 베스트</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 베스트 투어 상품을 만나보세요!
            </div>
          </div>
          <div className="min-h-[24px]" />
          <베스트상품Component />
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
          <Suspense fallback={<div>투어 전체보기</div>}>
            <ProdudctTabBarMain />
          </Suspense>
        </div>
      </div>
      {/* </Suspense> */}
    </ErrorBoundary>
  );
};

const ImageCarousel = () => {
  const image = "/images/logo/golf_main.png";

  // Next Image instead of Carousel
  return (
    <div className="w-full h-[400px]">
      <Image
        priority={true}
        quality={100}
        alt={"mainImage"}
        src={image}
        height={400}
        width={1200}
        className={"rounded-3xl"}
      />
    </div>
  );

  // return (
  //   <Carousel
  //     showArrows={true}
  //     showThumbs={false}
  //     showStatus={false}
  //     autoPlay={true}
  //     infiniteLoop={true}
  //   >
  //     {imageList.map((image, idx) => {
  //       return (
  //         <Image
  //           priority={true}
  //           quality={100}
  //           alt={"mainImage"}
  //           key={idx}
  //           src={image}
  //           height={1200}
  //           width={400}
  //           className={"rounded-3xl"}
  //         />
  //       );
  //     })}
  //   </Carousel>
  // );
};

export default 메인Page;

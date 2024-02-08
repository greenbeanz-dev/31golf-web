import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const 메인Page = () => {
  return (
    <ErrorBoundary fallback={<div>메인</div>}>
      <Suspense fallback={<Spinner />}>
        <ImageCarousel />
        <div style={{ height: 32 }}></div>
        <div className="flex w-full">
          <div
            style={{
              flex: 1,
              gap: 3,
            }}
          >
            <div className="text-xl font-bold">회원로그인</div>
          </div>
          <div style={{ flex: 4 }}>
            <div className="flex gap-2 items-end">
              <div className="text-xl font-bold">베스트 이미지</div>
              <div style={{ fontSize: 16, fontWeight: "normal" }}>
                삼일골프의 베스트 투어 상품을 만나보세요!
              </div>
            </div>
          </div>
        </div>
      </Suspense>
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
      {imageList.map((image) => {
        return (
          <div style={{ borderRadius: "2%", overflow: "hidden" }}>
            <img src={image} height={1200} width={400} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default 메인Page;

import { SkeletonBoundary } from "@component/error/SkeletonBoundary";
import {
  BestProductListSample,
  베스트상품Component,
} from "@component/Product/베스트상품Component";
import Login from "@component/login/LoginComponent";
import ProdudctTabBarMain from "@component/organism/ProdudctTabBarMain";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";
import usePopupList from "../../service/webSetting/usePopupList";

const MAIN_BANNER_SAMPLE_URL = "/images/logo/golf_main.png";

const 메인Page = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? null : (
        <>
          <SkeletonBoundary
            label="메인 배너를 불러오는 중"
            id="main-banner"
            skeleton={<MainBannerView imageUrl={MAIN_BANNER_SAMPLE_URL} />}
          >
            <MainBanner />
          </SkeletonBoundary>
          <div className="min-h-[32px]"></div>
        </>
      )}
      <div className="flex">
        {isMobile ? null : (
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
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">삼일골프 베스트</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 베스트 투어 상품을 만나보세요!
            </div>
          </div>
          <div className="min-h-[24px]" />
          <SkeletonBoundary
            label="베스트 상품을 불러오는 중"
            id="best-products"
            skeleton={<BestProductListSample />}
          >
            <베스트상품Component />
          </SkeletonBoundary>
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
    </>
  );
};

function MainBannerView({
  imageUrl,
  href = "",
}: {
  imageUrl: string;
  href?: string;
}) {
  return (
    <div className="w-full h-[400px]">
      {href ? (
        <Link href={href}>
          <Image
            priority={true}
            quality={100}
            alt={"mainImage"}
            src={imageUrl}
            height={400}
            width={1200}
            className={"rounded-3xl object-fill"}
          />
        </Link>
      ) : (
        <Image
          priority={true}
          quality={100}
          alt={"mainImage"}
          src={imageUrl}
          height={400}
          width={1200}
          className={"rounded-3xl object-fill"}
        />
      )}
    </div>
  );
}

const MainBanner = () => {
  const { data } = usePopupList();
  const banner = data?.find((item) => item.type === "BANNER_MAIN");
  const bannerUrl = banner?.image || MAIN_BANNER_SAMPLE_URL;

  return <MainBannerView imageUrl={bannerUrl} href={banner?.url || ""} />;
};

export default 메인Page;

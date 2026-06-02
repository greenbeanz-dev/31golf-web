import ErrorMessage from "@component/Layout/ErrorMessage";
import {
	베스트상품Component,
	베스트상품ComponentSkleleton,
} from "@component/Product/베스트상품Component";
import Login from "@component/login/LoginComponent";
import ProdudctTabBarMain from "@component/organism/ProdudctTabBarMain";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";
import usePopupList from "../../service/webSetting/usePopupList";

const 메인Page = () => {
	const isMobile = useIsMobile();

	return (
		<ErrorBoundary fallback={<ErrorMessage />}>
			<Suspense>
				{isMobile ? (
					<></>
				) : (
					<ErrorBoundary fallback={<></>}>
						<Suspense fallback={<MainBannerSkeleton />}>
							<MainBanner />
						</Suspense>
						<div className="min-h-[32px]"></div>
					</ErrorBoundary>
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
						<div
							className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
						>
							<div className="text-xl font-bold">삼일골프 베스트</div>
							<div className="text-[16px] leading-6 opacity-70">
								삼일골프의 베스트 투어 상품을 만나보세요!
							</div>
						</div>
						<div className="min-h-[24px]" />
						<Suspense fallback={<베스트상품ComponentSkleleton />}>
							<베스트상품Component />
						</Suspense>
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
			</Suspense>
		</ErrorBoundary>
	);
};

const MainBanner = () => {
	const { data } = usePopupList();
	const banner = data?.find((item) => item.type === "BANNER_MAIN");

	const bannerUrl = banner?.image || "/images/logo/golf_main.png";
	return (
		<div className="w-full h-[400px]">
			<Link href={banner?.url || ""}>
				<Image
					priority={true}
					quality={100}
					alt={"mainImage"}
					src={bannerUrl}
					height={400}
					width={1200}
					className={"rounded-3xl object-fill"}
				/>
			</Link>
		</div>
	);
};

export default 메인Page;

const MainBannerSkeleton = () => {
	return (
		<div className="w-full h-[400px]">
			<Skeleton
				className="rounded-3xl"
				style={{
					width: 1200,
					height: 400,
				}}
			/>
			{/* <Image
        priority={true}
        quality={100}
        alt={"mainImage"}
        src={"/images/logo/golf_main.png"}
        height={400}
        width={1200}
        className={"rounded-3xl object-fill"}
      /> */}
		</div>
	);
};

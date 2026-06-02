import ProductTabBarDomestic from "@component/organism/ProductTabBarDomestic";
import { CircularProgress } from "@nextui-org/react";
import { Suspense } from "react";

export function 국내골프Page() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-col w-full gap-2">
				<div className="text-xl font-bold">국내골프 전체보기</div>
				<div className="text-[16px] font-normal">
					삼일골프의 다양한 투어 상품을 만나보세요!
				</div>
				<Suspense fallback={<CircularProgress isIndeterminate />}>
					<ProductTabBarDomestic />
				</Suspense>
			</div>
		</div>
	);
}

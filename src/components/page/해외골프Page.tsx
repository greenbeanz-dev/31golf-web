import ProductTabBarOverseas from "@component/organism/ProductTabBarOverseas";

export function 해외골프Page() {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="text-xl font-bold">해외골프 전체보기</div>
      <div className="text-[16px] font-normal">
        삼일골프의 다양한 투어 상품을 만나보세요!
      </div>
      <ProductTabBarOverseas />
    </div>
  );
}

import ProductTabBarJeju from "@component/organism/ProductTabBarJeju";

export function 제주골프Page() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-bold">제주골프 전체보기</div>
      <div className="text-[16px] font-normal">
        삼일골프의 다양한 투어 상품을 만나보세요!
      </div>
      <ProductTabBarJeju />
    </div>
  );
}

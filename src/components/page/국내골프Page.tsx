import ProductTabBarDomestic from "@component/organism/ProductTabBarDomestic";

export function 국내골프Page() {
  return (
    <div>
      <div className="text-xl font-bold">국내골프 전체보기</div>
      <div style={{ fontSize: 16, fontWeight: "normal" }}>
        삼일골프의 다양한 투어 상품을 만나보세요!
      </div>
      <div style={{ minHeight: 24 }} />
      <ProductTabBarDomestic />
    </div>
  );
}

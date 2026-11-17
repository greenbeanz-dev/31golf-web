import Image from "next/image";
import { useIsMobile } from "../../hooks/useIsMobile";

const SAMPLE_IMAGE = "/images/logo/golf_img1.png";

const DEFAULT_SAMPLES = [
  {
    id: 1,
    name: "샘플 투어 상품 1",
    summary: "삼일골프 투어 상품 요약",
    price: 890000,
  },
  {
    id: 2,
    name: "샘플 투어 상품 2",
    summary: "삼일골프 투어 상품 요약",
    price: 990000,
  },
  {
    id: 3,
    name: "샘플 투어 상품 3",
    summary: "삼일골프 투어 상품 요약",
    price: 1090000,
  },
  {
    id: 4,
    name: "샘플 투어 상품 4",
    summary: "삼일골프 투어 상품 요약",
    price: 1190000,
  },
  {
    id: 5,
    name: "샘플 투어 상품 5",
    summary: "삼일골프 투어 상품 요약",
    price: 1290000,
  },
  {
    id: 6,
    name: "샘플 투어 상품 6",
    summary: "삼일골프 투어 상품 요약",
    price: 1390000,
  },
  {
    id: 7,
    name: "샘플 투어 상품 7",
    summary: "삼일골프 투어 상품 요약",
    price: 1490000,
  },
  {
    id: 8,
    name: "샘플 투어 상품 8",
    summary: "삼일골프 투어 상품 요약",
    price: 1590000,
  },
] as const;

/** skullet 측정용 — 조회 훅 없이 상품 카드 그리드 모양만 그린다 */
export function ProductCardGridSample({
  count = 4,
  showMoreButton = false,
  compact = false,
}: {
  count?: number;
  showMoreButton?: boolean;
  /** 상세 목록(국내/제주/해외)용 그리드 간격 */
  compact?: boolean;
}) {
  const isMobile = useIsMobile();
  const items = DEFAULT_SAMPLES.slice(0, count);

  return (
    <>
      <div
        className={`w-full grid ${isMobile ? "gap-2" : "gap-4"} grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]`}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex h-full w-full flex-col text-left"
            style={{
              marginBottom: isMobile ? "16px" : compact ? "24px" : "48px",
            }}
          >
            <div className="relative aspect-[4/3] w-full max-w-[50vw] md:max-w-[446px]">
              <Image
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="rounded-[24px] object-cover"
                alt={`product_sample_${item.id}`}
                src={SAMPLE_IMAGE}
                fill
              />
            </div>
            <div className="flex flex-1 flex-col pt-4">
              <div className="text-[14px] font-normal truncate leading-6 opacity-70">
                {item.summary}
              </div>
              <div className="pt-1" />
              <div className="text-[16px] font-bold truncate leading-6">
                {item.name}
              </div>
              <div className="min-h-2" />
              <div className="text-sky-600 text-xl font-bold">
                {item.price.toLocaleString()}원 ~
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMoreButton ? (
        <div className="w-full h-12 rounded-xl bg-[#004964]" />
      ) : null}
    </>
  );
}

import Image from "next/image";

const SAMPLE_IMAGE = "/images/logo/golf_img1.png";

/** skullet 측정용 — 상세 페이지 상단(이미지·제목·캘린더 자리) 모양 */
export function GolfDetailSample() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 md:min-w-[640px] max-h-[492px] w-full rounded-[24px] overflow-hidden relative aspect-[4/3]">
          <Image
            alt="detail_sample"
            src={SAMPLE_IMAGE}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <div className="text-sm opacity-70">국내골프 / 강원도</div>
          <div className="text-2xl font-bold leading-8">
            샘플 골프 투어 상품명
          </div>
          <div className="text-[16px] opacity-70 leading-6">
            삼일골프 상세 상품 요약 문구가 여기에 표시됩니다.
          </div>
          <div className="text-sky-600 text-2xl font-bold">890,000원 ~</div>
          <div className="mt-2 w-full h-[360px] rounded-lg border border-black border-opacity-10 bg-white" />
        </div>
      </div>
    </div>
  );
}

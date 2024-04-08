import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";

const mainImageList = [
  {
    id: 10,
    url: "/images/logo/golf_img1.png",
    title: "여수 디오션 C.C 1박 2일 (36홀)",
    description:
      "바다름 품은 골프장! 다도해의 아름다움과 탁트인 바다의 상쾌감을 느껴보세요.",
    price: 246000,
  },
  {
    url: "https://greenbeanz-reservation-bucket.s3.ap-northeast-2.amazonaws.com/286e7e88-2e2a-4e21-b9de-688d9b3e011f",
    title: "그린필드CC 당일 18홀",
    description: "새로운 이름 새로운 느낌",
    price: 500000,
  },
  {
    id: 12,
    url: "/images/logo/golf_img3.png",
    title: "강릉 메이플비치 C.C 1박 2일 (36홀)",
    description: "바람이 설계하고 사람이 감동하는 정통 링크스 코스!",
    price: 305000,
  },
];

export function 베스트상품Component() {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`flex justify-between overflow-x-auto ${isMobile ? "gap-4" : ""}`}
    >
      {mainImageList.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: isMobile ? 256 : 292,
              minWidth: isMobile ? 256 : 292,
              cursor: "pointer",
            }}
            onClick={() => {
              router.push(`/detail/${item.id}`);
            }}
          >
            <Image
              alt={item.title}
              className="rounded-[20px]"
              src={item.url}
              height={isMobile ? 343 : 223}
              width={isMobile ? 256 : 292}
            />
            <div style={{ minHeight: 16 }} />
            <div className="text-[16px] font-bold leading-6">{item.title}</div>
            <div className="pt-1" />
            <div className="text-[16px] font-normal w-full overflow-ellipsis overflow-hidden leading-normal tracking-tight opacity-70">
              {item.description}
            </div>
            <div className="pt-1" />
            <div className="text-[20px] font-bold text-[#0A7BE4] leading-6 tracking-tight">
              {item.price.toLocaleString()}원 ~
            </div>
          </div>
        );
      })}
    </div>
  );
}

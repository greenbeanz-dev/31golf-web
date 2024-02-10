import { useIsMobile } from "../../hooks/useIsMobile";

const mainImageList = [
  {
    url: "/images/logo/golf_img1.png",
    title: "여수 디오션 C.C 1박 2일 (36홀)",
    description:
      "바다름 품은 골프장! 다도해의 아름다움과 탁트인 바다의 상쾌감을 느껴보세요.",
    price: 246000,
  },
  {
    url: "/images/logo/golf_img2.png",
    title: "남해 사우스케이프 C.C 1박 2일 (36홀)",
    description:
      "크고 작은 섬들로 장식되어 있는 바다를 계속 조망하면서 라운딩을 해보세요.",
    price: 775000,
  },
  {
    url: "/images/logo/golf_img3.png",
    title: "강릉 메이플비치 C.C 1박 2일 (36홀)",
    description: "바람이 설계하고 사람이 감동하는 정통 링크스 코스!",
    price: 305000,
  },
];

export function 베스트상품Component() {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className={`flex justify-between overflow-x-auto ${isMobile ? "gap-4" : ""}`}
      >
        {mainImageList.map((item) => {
          return (
            <div
              style={{
                width: isMobile ? 256 : 290,
                minWidth: isMobile ? 256 : 290,
              }}
            >
              <img
                className={"rounded-2xl"}
                src={item.url}
                height={isMobile ? 343 : 223}
              />
              <div style={{ minHeight: 16 }} />
              <div className="text-base font-bold">{item.title}</div>
              <div
                className="text-base font-normal"
                style={{
                  width: "100%",
                  overflowWrap: "break-word",
                }}
              >
                {item.description}
              </div>
              <div className="text-sky-600 text-xl font-bold">
                {item.price.toLocaleString()}원 ~
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

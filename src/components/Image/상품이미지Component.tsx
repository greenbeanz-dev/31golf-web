import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";

export function 상품이미지Component({
  item,
  mobileWidth,
  mobileHeight,
  pcWidth,
  pcHeight,
  discount,
}: {
  item: any;
  mobileWidth?: number;
  mobileHeight?: number;
  pcWidth?: number;
  pcHeight?: number;
  discount?: number;
}) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      style={{
        width: isMobile ? mobileWidth : pcWidth,
        marginBottom: isMobile ? "16px" : "48px",
      }}
      onClick={() => {
        router.push(`/detail/${item.id}`);
      }}
    >
      <img
        className={"rounded-3xl"}
        src={item.url}
        height={isMobile ? mobileHeight : pcHeight}
        width={"100%"}
      />
      <div style={{ minHeight: 16 }} />
      <div
        className="text-base font-normal"
        style={{
          width: "100%",
          overflowWrap: "break-word",
        }}
      >
        {item.description}
      </div>
      <div style={{ minHeight: 8 }} />
      <div className="text-base font-bold">{item.title}</div>
      <div style={{ minHeight: 8 }} />
      {!isMobile && (
        <div className="flex gap-1">
          {item.contents.map((content) => (
            <div className="relative inline-block">
              <div className="h-6 px-2 rounded-xl border border-green-500 justify-center items-center inline-flex">
                <div className="text-green-500 text-sm font-normal">
                  {content}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ minHeight: 8 }} />
      <div className="flex">
        {!isMobile && discount && (
          <>
            <div className={`text-red-500 text-xl font-bold`}>
              {discount}% 할인
            </div>
            <div style={{ minWidth: 16 }} />
          </>
        )}
        <div className={`text-sky-600 text-xl font-bold`}>
          {item.price.toLocaleString()}원 ~
        </div>
      </div>
    </div>
  );
}

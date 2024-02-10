import { useIsMobile } from "../../hooks/useIsMobile";

export function 상품이미지Component({
  item,
  mobileWidth,
  mobileHeight,
  pcWidth,
  pcHeight,
  discountPrice,
}: {
  item: any;
  mobileWidth?: number;
  mobileHeight?: number;
  pcWidth?: number;
  pcHeight?: number;
  discountPrice?: number;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        width: isMobile ? mobileWidth : pcWidth,
        marginBottom: isMobile ? "16px" : "48px",
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
      <div className="text-base font-bold">{item.title}</div>
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
      <div className={`text-sky-600 text-xl font-bold`}>
        {item.price.toLocaleString()}원 ~
      </div>
    </div>
  );
}

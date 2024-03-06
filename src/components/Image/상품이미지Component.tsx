import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";

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
      <Image
        alt={item.title}
        className="rounded-[24px]"
        src={item.url}
        height={isMobile ? mobileHeight : pcHeight}
        width={isMobile ? mobileWidth : pcWidth}
      />
      <div className="min-h-[16px]" />
      <div className="text-[14px] font-normal overflow-ellipsis overflow-hidden leading-6 opacity-70">
        {item.description}
      </div>
      <div className="min-h-1" />
      <div className="text-[16px] font-bold leading-6">{item.title}</div>
      <div className="min-h-2" />
      {!isMobile && (
        <div className="flex gap-1">
          {item.contents.map((content, idx) => (
            <div key={idx} className="relative inline-block">
              <div className="h-6 px-2 rounded-[12px] border border-[#17C964] justify-center items-center inline-flex">
                <div className="text-[14px] font-normal text-[#17C964] leading-5">
                  {content}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="min-h-2" />
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

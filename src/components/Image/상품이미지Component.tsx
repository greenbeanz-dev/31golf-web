import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from "next/image";
import { Product } from "@/gql/__generated__/graphql";

export function 상품이미지Component({
  item,
  mobileWidth,
  mobileHeight,
  pcWidth,
  pcHeight,
  discount,
}: {
  item: Product;
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
        alt={"product_image_" + item.id}
        className="rounded-[24px]"
        src={
          item.thumbnailImage
            ? item.thumbnailImage
            : "https://greenbeanz-reservation-bucket.s3.ap-northeast-2.amazonaws.com/286e7e88-2e2a-4e21-b9de-688d9b3e011f"
        }
        height={isMobile ? mobileHeight : pcHeight}
        width={isMobile ? mobileWidth : pcWidth}
      />
      <div className="pt-4" />
      <div className="text-[14px] font-normal overflow-ellipsis overflow-hidden leading-6 opacity-70">
        {item.summary}
      </div>
      <div className="pt-1" />
      <div className="text-[16px] font-bold leading-6">{`${item.name} ${item.type}`}</div>
      <div className="min-h-2" />
      {!isMobile && (
        <div className="flex gap-1">
          {item.inclusives &&
            item.inclusives.split(",").map((content, idx) => (
              <div key={idx} className="relative inline-block">
                <div className="h-6 px-2 rounded-[12px] border border-[#17C964] justify-center items-center inline-flex">
                  <div className="text-[14px] font-normal text-[#17C964] leading-5">
                    {content.split("_@_")[0]}
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
          {item.price ? item.price.toLocaleString() : "0"}원 ~
        </div>
      </div>
    </div>
  );
}

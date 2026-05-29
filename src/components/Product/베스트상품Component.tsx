import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import { getProductDisplayName } from "../../utils/format/getProductDisplayName";
import { Skeleton, cn } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
const defaultImage = "/images/logo/golf_img1.png";

export function 베스트상품Component() {
  const data = useQuery({
    queryKey: ["productListInfinity"],
    queryFn: async () => {
      const response = await gqlClient.request(ProductListInfinityQuery, {
        isBest: true,
      });
      return response;
    },
  });

  const list = data.data?.productList.edges.map((item) => {
    return {
      id: item?.node.id,
      type: item?.node.type || "",
      name: item?.node.name,
      price: item?.node.price,
      thumbnailImage: item?.node.thumbnailImage,
      summary: item?.node.summary,
      course: item?.node.course,
    };
  });

  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`flex w-full max-w-[95vw] justify-between overflow-x-auto gap-4 overflow-y-hidden`}
    >
      {list?.map((item) => {
        return (
          <button
            type="button"
            className="cursor-pointer h-[320px] text-left"
            key={item.id ?? item.name}
            style={{
              width: isMobile ? 256 : 292,
              minWidth: isMobile ? 256 : 292,
              cursor: "pointer",
            }}
            onClick={() => {
              if (item.id) router.push(`/detail/${item.id}`);
            }}
          >
            <Image
              alt={item.name || ""}
              className="rounded-[20px]"
              src={item.thumbnailImage || defaultImage}
              height={isMobile ? 343 : 223}
              width={isMobile ? 256 : 292}
            />
            <div className="min-h-4" />
            <div className="text-[16px] font-bold leading-6">
              {getProductDisplayName(item.name, item.type)}
            </div>
            <div className="pt-1" />
            <div className="text-[16px] font-normal w-full overflow-ellipsis truncate overflow-hidden leading-normal tracking-tight opacity-70">
              {item.summary}
            </div>
            <div className="pt-1" />
            <div className="text-[20px] font-bold text-[#0A7BE4] leading-6 tracking-tight">
              {item.price ? `${item.price.toLocaleString()}원 ~` : "별도 문의"}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export const 베스트상품ComponentSkleleton = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`flex w-full max-w-[95vw] justify-between overflow-x-auto gap-4 overflow-y-hidden`}
      >
        {(
          ["best-skeleton-1", "best-skeleton-2", "best-skeleton-3"] as const
        ).map((skeletonKey) => {
          return (
            <div
              key={skeletonKey}
              className="cursor-pointer h-[320px]"
              style={{
                width: isMobile ? 256 : 292,
                minWidth: isMobile ? 256 : 292,
                cursor: "pointer",
              }}
            >
              <Skeleton
                className={cn(
                  isMobile ? "w-[256px] h-[343px]" : "w-[292px] h-[223px]",
                  "rounded-2xl"
                )}
              >
                <div
                  className={
                    isMobile ? "w-[256px] h-[343px]" : "w-[292px] h-[223px]"
                  }
                ></div>
              </Skeleton>
              <div className="min-h-4" />
              <Skeleton className="rounded">
                <div className="text-[16px] font-bold leading-6">title</div>
              </Skeleton>
              <div className="pt-1" />
              <Skeleton className="rounded">
                <div className="text-[16px] font-normal w-full overflow-ellipsis truncate overflow-hidden leading-normal tracking-tight opacity-70">
                  Summary
                </div>
              </Skeleton>
              <div className="pt-1" />
              <Skeleton className="rounded">
                <div className="text-[20px] font-bold text-[#0A7BE4] leading-6 tracking-tight">
                  Price
                </div>
              </Skeleton>
            </div>
          );
        })}
      </div>
    </>
  );
};

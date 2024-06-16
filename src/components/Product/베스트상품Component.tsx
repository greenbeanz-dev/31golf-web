import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";

const defaultImage = "/images/logo/golf_img1.png";

export function 베스트상품Component() {
  const data = useQuery({
    queryFn: async () => {
      const response = await gqlClient.request(ProductListInfinityQuery, {
        isBest: true,
      });
      return response;
    },
  });

  const list = data.data?.productList.edges.map((item) => {
    return {
      id: item && item.node.id,
      type: (item && item.node.type) || "",
      name: item && item.node.name,
      price: item && item.node.price,
      thumbnailImage: item && item.node.thumbnailImage,
      summary: item && item.node.summary,
      course: item && item.node.course,
    };
  });

  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`flex w-full max-w-[95vw] justify-between overflow-x-auto gap-4 overflow-y-hidden`}
    >
      {list &&
        list.map((item, idx) => {
          return (
            <div
              className="cursor-pointer h-[350px]"
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
                alt={item.name || ""}
                className="rounded-[20px]"
                src={item.thumbnailImage || defaultImage}
                height={isMobile ? 343 : 223}
                width={isMobile ? 256 : 292}
              />
              <div className="min-h-4" />
              <div className="text-[16px] font-bold leading-6">{`${item.name} ${item.type}`}</div>
              <div className="pt-1" />
              <div className="text-[16px] font-normal w-full overflow-ellipsis overflow-hidden leading-normal tracking-tight opacity-70">
                {item.summary}
              </div>
              <div className="pt-1" />
              <div className="text-[20px] font-bold text-[#0A7BE4] leading-6 tracking-tight">
                {item.price
                  ? `${item.price.toLocaleString()}원 ~`
                  : "별도 문의"}
              </div>
            </div>
          );
        })}
    </div>
  );
}

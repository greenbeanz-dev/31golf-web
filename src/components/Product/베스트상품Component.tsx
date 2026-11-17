import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import { getProductDisplayName } from "../../utils/format/getProductDisplayName";

const defaultImage = "/images/logo/golf_img1.png";

export type BestProductItem = {
  id?: string | number | null;
  type?: string | null;
  name?: string | null;
  price?: number | null;
  thumbnailImage?: string | null;
  summary?: string | null;
};

const BEST_PRODUCT_SAMPLES: BestProductItem[] = [
  {
    id: "sample-1",
    type: "domestic",
    name: "샘플 베스트 투어 상품 A",
    price: 890000,
    thumbnailImage: defaultImage,
    summary: "삼일골프 베스트 투어 상품 요약 문구",
  },
  {
    id: "sample-2",
    type: "domestic",
    name: "샘플 베스트 투어 상품 B",
    price: 990000,
    thumbnailImage: defaultImage,
    summary: "삼일골프 베스트 투어 상품 요약 문구",
  },
  {
    id: "sample-3",
    type: "overseas",
    name: "샘플 베스트 투어 상품 C",
    price: 1290000,
    thumbnailImage: defaultImage,
    summary: "삼일골프 베스트 투어 상품 요약 문구",
  },
];

export function BestProductList({
  items,
  interactive = true,
}: {
  items: BestProductItem[];
  interactive?: boolean;
}) {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <div className="flex w-full max-w-[95vw] justify-between overflow-x-auto gap-4 overflow-y-hidden">
      {items.map((item) => {
        return (
          <button
            type="button"
            className="cursor-pointer h-[320px] text-left"
            key={item.id ?? item.name}
            style={{
              width: isMobile ? 256 : 292,
              minWidth: isMobile ? 256 : 292,
              cursor: interactive ? "pointer" : "default",
            }}
            onClick={() => {
              if (!interactive) return;
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

/** skullet 측정용 — 조회 훅 없이 실제 카드 마크업만 그린다 */
export function BestProductListSample() {
  return <BestProductList items={BEST_PRODUCT_SAMPLES} interactive={false} />;
}

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

  const list =
    data.data?.productList.edges.map((item) => {
      return {
        id: item?.node.id,
        type: item?.node.type || "",
        name: item?.node.name,
        price: item?.node.price,
        thumbnailImage: item?.node.thumbnailImage,
        summary: item?.node.summary,
        course: item?.node.course,
      };
    }) ?? [];

  return <BestProductList items={list} />;
}

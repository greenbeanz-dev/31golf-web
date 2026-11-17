import { Product } from "@/gql/__generated__/graphql";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import { SkeletonBoundary } from "@component/error/SkeletonBoundary";
import { 상품이미지Component } from "@component/Image/상품이미지Component";
import { ProductCardGridSample } from "@component/Product/ProductCardGridSample";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface ProductListDetailProps {
  category1?: string;
  category2?: string;
  category3?: string;
}

const ProductListDetail = ({
  category1,
  category2,
  category3,
}: ProductListDetailProps) => {
  useEffect(() => {
    useProductInfiniteQueryBody.getState().reset();
    useProductInfiniteQueryBody.getState().changeCategory1(category1);
    useProductInfiniteQueryBody.getState().changeCategory2(category2);
    useProductInfiniteQueryBody.getState().changeCategory3(category3);
  }, [category1, category2, category3]);

  return (
    <div className="w-full">
      <SkeletonBoundary
        label="투어 상품을 불러오는 중"
        id={`product-list-detail-${category1 ?? ""}-${category2 ?? ""}-${category3 ?? ""}`}
        resetKeys={[category1, category2, category3]}
        skeleton={<ProductCardGridSample count={8} compact />}
      >
        <ProductListDetailSuspense />
      </SkeletonBoundary>
    </div>
  );
};

export default ProductListDetail;

const ProductListDetailSuspense = () => {
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();
  const jejuListType = searchParams.get("type");

  const { data } = useProductInfiniteQuery();
  const [isDay, setIsDay] = useState<boolean | undefined>(
    jejuListType === "당일(18홀)"
      ? true
      : jejuListType === "1박 2일(36홀)"
        ? false
        : undefined
  );

  const list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item) => {
      return {
        ...item,
      };
    });

  const listIsDay = list?.filter((product) => product?.type?.includes("당일"));
  const listIsNight = list?.filter(
    (product) => !product?.type?.includes("당일")
  );

  useEffect(() => {
    setIsDay(
      jejuListType === "당일(18홀)"
        ? true
        : jejuListType === "1박 2일(36홀)"
          ? false
          : undefined
    );
  }, [jejuListType]);

  if (list === undefined || list.length === 0) {
    return (
      <div className="flex flex-col grow w-full h-[432px] items-center justify-center">
        <Image
          alt="list_empty"
          src="/images/list_empty.png"
          width={160}
          height={160}
        />
        <div className="pt-2" />
        <div className="text-[16px] font-bold opacity-70">상품 준비중 ...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={cn(
          `w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_3fr))]`,
          isMobile ? "gap-2" : "gap-4",
          list?.length < 3 && "md:grid-cols-[repeat(2,_minmax(300px,_384px))]"
        )}
      >
        {isDay === undefined &&
          list?.map((item, idx) => {
            return (
              <상품이미지Component
                key={idx}
                item={item as Product}
                mobileWidth={160}
                mobileHeight={160}
                pcWidth={384}
                pcHeight={295}
              />
            );
          })}
        {isDay === true &&
          listIsDay?.map((item, idx) => {
            return (
              <상품이미지Component
                key={idx}
                item={item as Product}
                mobileWidth={160}
                mobileHeight={160}
                pcWidth={384}
                pcHeight={295}
              />
            );
          })}
        {isDay === false &&
          listIsNight?.map((item, idx) => {
            return (
              <상품이미지Component
                key={idx}
                item={item as Product}
                mobileWidth={160}
                mobileHeight={160}
                pcWidth={384}
                pcHeight={295}
              />
            );
          })}
      </div>
    </div>
  );
};

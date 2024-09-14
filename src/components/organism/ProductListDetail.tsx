import { Product } from "@/gql/__generated__/graphql";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import {
  상품이미지Component,
  상품이미지SkeletonComponent,
} from "@component/Image/상품이미지Component";
import Repeat from "@component/molecule/Repeat";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
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
      <Suspense
        fallback={
          <div className="w-full flex flex-wrap justify-between">
            <Repeat repeat={15}>
              <상품이미지SkeletonComponent
                mobileWidth={160}
                mobileHeight={160}
                pcWidth={384}
                pcHeight={295}
              />
            </Repeat>
          </div>
        }
      >
        <ProductListDetailSuspense />
      </Suspense>
    </div>
  );
};

export default ProductListDetail;

const ProductListDetailSuspense = () => {
  const router = useRouter();
  const { pathname } = router;
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();
  const jejuListType = searchParams.get("type") || "1박 2일(36홀)";

  const { data } = useProductInfiniteQuery();
  // 제주인 경우만 당일 상품을 보여줌
  const [isDay, setIsDay] = useState<boolean | undefined>(
    jejuListType === "당일(18홀)"
  );

  let list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
      return {
        ...item,
      };
    });

  let listIsDay = list?.filter((product) => product?.type?.includes("당일"));
  let listIsNight = list?.filter((product) => !product?.type?.includes("당일"));

  useEffect(() => {
    setIsDay(jejuListType === "당일(18홀)");
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

import { Product } from "@/gql/__generated__/graphql";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import {
  상품이미지Component,
  상품이미지SkeletonComponent,
} from "@component/Image/상품이미지Component";
import Repeat from "@component/molecule/Repeat";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

interface ProductListMainProps {
  category1?: string;
  category2?: string;
  category3?: string;
}

const ProductListMain = ({
  category1,
  category2,
  category3,
}: ProductListMainProps) => {
  return (
    <div className="w-full">
      <Suspense
        fallback={
          <div className="w-full flex flex-wrap justify-between">
            <Repeat repeat={4}>
              <상품이미지SkeletonComponent
                mobileWidth={160}
                mobileHeight={160}
                pcWidth={448}
                pcHeight={345}
              />
            </Repeat>
          </div>
        }
      >
        <ProductListMainSuspense
          category1={category1}
          category2={category2}
          category3={category3}
        />
      </Suspense>
    </div>
  );
};

export default ProductListMain;

const ProductListMainSuspense = ({
  category1,
  category2,
  category3,
}: ProductListMainProps) => {
  const { data, hasNextPage, fetchNextPage } = useProductInfiniteQuery();
  useEffect(() => {
    useProductInfiniteQueryBody.getState().changeCategory1(category1);
    useProductInfiniteQueryBody.getState().changeCategory2(category2);
    useProductInfiniteQueryBody.getState().changeCategory3(category3);
    useProductInfiniteQueryBody.getState().changeIsMain(true);
  }, [category1, category2, category3]);

  const isMobile = useIsMobile();
  let list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
      return {
        ...item,
      };
    });

  if (list === undefined || list.length === 0) {
    return (
      <div className="flex flex-col grow w-full h-[432px] items-center justify-center">
        <Image
          alt="list_empty"
          src="/images/list_empty.png"
          width={120}
          height={120}
        />
        <div className="pt-2" />
        <div className="text-[16px] font-bold opacity-70">상품 준비중 ...</div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`w-full grid ${isMobile ? "gap-2" : "gap-4"}  grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]`}
      >
        {list.map((item, idx) => {
          return (
            <상품이미지Component
              key={idx}
              item={item as Product}
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={448}
              pcHeight={345}
            />
          );
        })}
      </div>
      {hasNextPage && (
        <Button
          className="w-full h-12 bg-[#004964] text-white font-bold leading-6"
          onClick={() => {
            fetchNextPage();
          }}
        >
          <Image
            alt="circle"
            src={"/images/logo/add-circle.png"}
            width={24}
            height={24}
          />
          투어 상품 더보기
        </Button>
      )}
    </>
  );
};

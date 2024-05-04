import { Product } from "@/gql/__generated__/graphql";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import {
  상품이미지Component,
  상품이미지SkeletonComponent,
} from "@component/Image/상품이미지Component";
import Repeat from "@component/molecule/Repeat";
import Image from "next/image";
import { Suspense, useEffect } from "react";

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
  const { data } = useProductInfiniteQuery();

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
          width={160}
          height={160}
        />
        <div className="pt-2" />
        <div className="text-[16px] font-bold opacity-70">상품 준비중 ...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap justify-between">
      {list.map((item, idx) => {
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
  );
};

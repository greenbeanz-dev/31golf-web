import { 상품이미지Component } from "@component/Image/상품이미지Component";
import { useIsMobile } from "../../hooks/useIsMobile";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import { Product } from "@/gql/__generated__/graphql";
import { useEffect } from "react";
import Image from "next/image";

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
  const isMobile = useIsMobile();
  const { data, fetchNextPage, hasNextPage } = useProductInfiniteQuery();

  const changeCategory1 = useProductInfiniteQueryBody(
    (state) => state.changeCategory1
  );

  const changeCategory2 = useProductInfiniteQueryBody(
    (state) => state.changeCategory2
  );

  const changeCategory3 = useProductInfiniteQueryBody(
    (state) => state.changeCategory3
  );

  let list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
      return {
        ...item,
      };
    });

  useEffect(() => {
    changeCategory1(category1);
    changeCategory2(category2);
    changeCategory3(category3);
  }, [category1, category2, category3]);

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
        <div className="text-[24px] font-bold opacity-70">상품 준비중 ...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 반응형 여기 수정  */}
      <div className="w-full flex flex-wrap justify-between">
        {list!.map((item, idx) => {
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

export default ProductListDetail;

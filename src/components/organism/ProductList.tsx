import { 상품이미지Component } from "@component/Image/상품이미지Component";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import { Product } from "@/gql/__generated__/graphql";
import { useEffect } from "react";

interface ProductListProps {
  type?: "main" | "detail";
  category1?: string;
  category2?: string;
  category3?: string;
}

const ProductList = ({
  type = "main",
  category1,
  category2,
  category3,
}: ProductListProps) => {
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

  if (list === undefined) {
    return;
  }

  return (
    <div className="w-full">
      {/* 반응형 여기 수정  */}
      <div className="w-full flex flex-wrap justify-between">
        {list.slice(0, 4).map((item, idx) => {
          return (
            <상품이미지Component
              key={idx}
              item={item as Product}
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={type === "main" ? 448 : 384}
              pcHeight={type === "main" ? 345 : 295}
            />
          );
        })}
      </div>
      <Button className="w-full h-12 bg-[#004964] text-white font-bold leading-6">
        <Image
          alt="circle"
          src={"/images/logo/add-circle.png"}
          width={24}
          height={24}
        />
        투어 상품 더보기
      </Button>
    </div>
  );
};

export default ProductList;

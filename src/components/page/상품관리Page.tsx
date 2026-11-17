import useProductInfiniteQuery from "@/gql/query/product/useProductInfiniteQuery";
import { SkeletonBoundary } from "@component/error/SkeletonBoundary";
import dayjs from "dayjs";

const ProductAdminListSample = () => (
  <div className="flex flex-col gap-2 py-2">
    {["샘플 상품 A", "샘플 상품 B", "샘플 상품 C", "샘플 상품 D"].map(
      (name) => (
        <div key={name} className="text-[16px] leading-6">
          {name}
        </div>
      )
    )}
  </div>
);

const 상품관리Page = () => {
  return (
    <SkeletonBoundary
      label="상품 목록을 불러오는 중"
      id="product-admin-list"
      skeleton={<ProductAdminListSample />}
    >
      <상품리스트 />
    </SkeletonBoundary>
  );
};

const 상품리스트 = () => {
  const { data } = useProductInfiniteQuery();

  const list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item) => {
      return {
        ...item,
        dateDeparture: item?.dateDeparture
          ? dayjs(item.dateDeparture).format("YYYY-MM-DD")
          : "",
      };
    });

  return (
    <div>
      {list?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default 상품관리Page;

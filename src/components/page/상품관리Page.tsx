import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import dayjs from "dayjs";
import useProductInfiniteQuery from "@/gql/query/product/useProductInfiniteQuery";

const 상품관리Page = () => {
  return (
    <ErrorBoundary fallback={<div>상품</div>}>
      <Suspense fallback={<Spinner />}>
        <상품리스트 />
      </Suspense>
    </ErrorBoundary>
  );
};

const 상품리스트 = () => {
  const { data, fetchNextPage, hasNextPage } = useProductInfiniteQuery();

  let list = data?.pages
    .map((page) => page.productList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
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

import { Product } from "@/gql/__generated__/graphql";
import useProductInfiniteQuery, {
  useProductInfiniteQueryBody,
} from "@/gql/query/product/useProductInfiniteQuery";
import {
  상품이미지Component,
  상품이미지SkeletonComponent,
} from "@component/Image/상품이미지Component";
import Repeat from "@component/molecule/Repeat";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";

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
  const router = useRouter();
  const { pathname } = router;

  const { data } = useProductInfiniteQuery();
  const [isDay, setIsDay] = useState<boolean>(false);

  let list = data?.pages
    .map((page) =>
      page.productList.edges
        .map((item) => item?.node)
        .filter((product) =>
          isDay
            ? product?.type?.includes("당일")
            : !product?.type?.includes("당일")
        )
    )
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

  const ProductTabBarJeju = ({ setIsDay }) => {
    const [tab, setTab] = useState("당일상품(당일만)");
    const navItem = [
      {
        label: "당일상품(당일만)",
      },
      {
        label: "2박 이상(당일 제외)",
      },
    ];

    return (
      <Navbar
        style={{
          width: "100%",
          justifyContent: "flex-start", // 탭 왼쪽 정렬
          overflowX: "auto",
        }}
        classNames={{
          wrapper: ["px-0", "cursor-pointer", "w-full"],
          item: [
            "flex",
            "relative",
            "h-[30px]",
            "w-[150px]",
            "cursor-pointer",
            "items-center",
            "justify-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-[#004964]",
          ],
          menu: ["px-0"],
        }}
      >
        <NavbarContent>
          {navItem.map((item) => {
            return (
              <NavbarItem
                className={`px-4 ${tab === item.label ? "text-[#004964] font-bold" : ""}`}
                key={item.label}
                isActive={tab === item.label}
                onClick={() => {
                  setTab(item.label);
                  setIsDay(item.label === "당일상품(당일만)");
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
    );
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {pathname === "/jeju" && <ProductTabBarJeju setIsDay={setIsDay} />}

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
    </div>
  );
};

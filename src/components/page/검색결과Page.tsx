import type { Product } from "@/gql/__generated__/graphql";
import {
  parseProductSearchScope,
  parseSearchQuery,
  useProductSearchQuery,
  useProductSearchScopeCounts,
  type ProductSearchScope,
} from "@/gql/query/product/useProductSearchQuery";
import {
  상품이미지Component,
  상품이미지SkeletonComponent,
} from "@component/Image/상품이미지Component";
import Repeat from "@component/molecule/Repeat";
import SearchInclusiveFilter from "@component/organism/SearchInclusiveFilter";
import SearchSortSelect from "@component/organism/SearchSortSelect";
import {
  getProductSubTabItemClassName,
  productSubTabNavbarProps,
} from "@component/organism/productSubTabNavbar";
import { Navbar, NavbarContent, NavbarItem, cn } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  collectInclusiveOptions,
  productHasAllInclusives,
} from "../../utils/product/parseProductInclusives";

const SCOPE_TABS: { label: string; value: ProductSearchScope }[] = [
  { label: "국내", value: "domestic" },
  { label: "제주", value: "jeju" },
  { label: "해외", value: "overseas" },
];

function formatSearchSuffix(keyword: string) {
  const last = keyword[keyword.length - 1];
  const hasJong = (char: string) => {
    const code = char.charCodeAt(0);
    if (code < 0xac00 || code > 0xd7a3) return false;
    return (code - 0xac00) % 28 !== 0;
  };
  if (/[가-힣]/.test(last) && hasJong(last)) return "으로";
  return "로";
}

export function 검색결과Page() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const keyword = parseSearchQuery(router.query.q);
  const scope = parseProductSearchScope(router.query.scope);

  const { products, isLoading, isSortType, setIsSortType } =
    useProductSearchQuery(keyword, scope);
  const {
    countsByScope,
    totalCount: totalSearchCount,
    isLoading: isCountsLoading,
  } = useProductSearchScopeCounts(keyword);
  const [selectedInclusives, setSelectedInclusives] = useState<string[]>([]);

  const inclusiveOptions = useMemo(
    () =>
      collectInclusiveOptions(
        products.filter((p): p is NonNullable<typeof p> => Boolean(p))
      ),
    [products]
  );

  const inclusiveFilterResetKey = `${keyword}:${scope}`;

  useEffect(() => {
    void inclusiveFilterResetKey;
    setSelectedInclusives([]);
  }, [inclusiveFilterResetKey]);

  useEffect(() => {
    setSelectedInclusives((prev) =>
      prev.filter((label) => inclusiveOptions.includes(label))
    );
  }, [inclusiveOptions]);

  const toggleInclusive = (label: string) => {
    setSelectedInclusives((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const changeScope = (nextScope: ProductSearchScope) => {
    if (!keyword) return;
    router.replace(
      `/search?q=${encodeURIComponent(keyword)}&scope=${nextScope}`,
      undefined,
      { shallow: true }
    );
  };

  if (!keyword) {
    return (
      <div className="flex flex-col w-full gap-4 py-8">
        <h1 className="text-xl font-bold">상품 검색</h1>
        <p className="text-[16px] text-[#666]">
          상단 검색창에서 상품명을 입력해 주세요.
        </p>
      </div>
    );
  }

  const suffix = formatSearchSuffix(keyword);

  return (
    <div className="flex flex-col w-full gap-2 py-4">
      <div className="text-xl font-bold">검색 결과</div>
      <div className="text-[16px] font-normal">
        <span className="font-semibold text-[#004964]">
          &quot;{keyword}&quot;
        </span>
        {suffix} {totalSearchCount ?? (isCountsLoading ? "…" : 0)}개 상품이
        검색되었습니다.
      </div>

      <Navbar {...productSubTabNavbarProps}>
        <NavbarContent>
          {SCOPE_TABS.map((tab) => {
            const isActive = scope === tab.value;
            const count =
              countsByScope[tab.value] ?? (isCountsLoading ? "…" : 0);
            return (
              <NavbarItem
                key={tab.value}
                className={getProductSubTabItemClassName(isActive)}
                isActive={isActive}
                onClick={() => changeScope(tab.value)}
              >
                {tab.label}({count})
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>

      <SearchInclusiveFilter
        options={inclusiveOptions}
        selected={selectedInclusives}
        onToggle={toggleInclusive}
        onClear={() => setSelectedInclusives([])}
      />

      <SearchSortSelect value={isSortType} onChange={setIsSortType} />

      {isLoading ? (
        <div className="w-full flex flex-wrap justify-between gap-4">
          <Repeat repeat={6}>
            <상품이미지SkeletonComponent
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={384}
              pcHeight={295}
            />
          </Repeat>
        </div>
      ) : products.length === 0 ? (
        <div className="flex flex-col grow w-full h-[432px] items-center justify-center">
          <Image
            alt="list_empty"
            src="/images/list_empty.png"
            width={160}
            height={160}
          />
          <div className="pt-2" />
          <div className="text-[16px] font-bold opacity-70">
            {keyword}
            {suffix} 검색된 상품이 없습니다
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_3fr))]",
            isMobile ? "gap-2" : "gap-4",
            products.length < 3 &&
              "md:grid-cols-[repeat(2,_minmax(300px,_384px))]"
          )}
        >
          {products.map((item, idx) => (
            <상품이미지Component
              key={item?.id ?? idx}
              item={item as Product}
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={384}
              pcHeight={295}
              dimmed={
                selectedInclusives.length > 0 &&
                !productHasAllInclusives(item?.inclusives, selectedInclusives)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

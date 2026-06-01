import gqlClient from "@/gql/gqlClient";
import { ProductListInfinityQuery } from "@/gql/query/product/crud";
import { useInfiniteQuery, useQueries } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export type ProductSearchScope = "domestic" | "jeju" | "overseas";

const SEARCH_SCOPES: ProductSearchScope[] = ["domestic", "jeju", "overseas"];

const PAGE_SIZE = 200;

async function fetchProductSearchCount(
	searchQuery: string,
	searchScope: ProductSearchScope,
) {
	const response = await gqlClient.request(ProductListInfinityQuery, {
		first: PAGE_SIZE,
		searchQuery: searchQuery || undefined,
		searchScope,
	});
	return response.productList.edges.length;
}

export function useProductSearchScopeCounts(searchQuery: string) {
	const queries = useQueries({
		queries: SEARCH_SCOPES.map((searchScope) => ({
			queryKey: ["productSearchCount", searchQuery, searchScope],
			enabled: searchQuery.length > 0,
			queryFn: () => fetchProductSearchCount(searchQuery, searchScope),
		})),
	});

	const countsByScope = useMemo(() => {
		const counts: Record<ProductSearchScope, number | undefined> = {
			domestic: undefined,
			jeju: undefined,
			overseas: undefined,
		};
		SEARCH_SCOPES.forEach((scope, index) => {
			if (queries[index]?.data !== undefined) {
				counts[scope] = queries[index].data;
			}
		});
		return counts;
	}, [queries]);

	const isLoading = queries.some((q) => q.isLoading);

	const totalCount = useMemo(() => {
		const counts = SEARCH_SCOPES.map((scope) => countsByScope[scope]);
		if (counts.some((count) => count === undefined)) return undefined;
		return counts.reduce((sum, count) => (sum ?? 0) + (count ?? 0), 0);
	}, [countsByScope]);

	return { countsByScope, totalCount, isLoading };
}

export function parseProductSearchScope(
	scope: string | string[] | undefined,
): ProductSearchScope {
	if (scope === "jeju" || scope === "overseas") return scope;
	return "domestic";
}

export function parseSearchQuery(q: string | string[] | undefined): string {
	if (typeof q === "string") return q.trim();
	if (Array.isArray(q) && typeof q[0] === "string") return q[0].trim();
	return "";
}

export function useProductSearchQuery(
	searchQuery: string,
	searchScope: ProductSearchScope,
) {
	const [isSortType, setIsSortType] = useState<"추천순" | "가나다순">("추천순");

	const requestBody = useMemo(
		() => ({
			searchQuery: searchQuery || undefined,
			searchScope,
			isSortType,
		}),
		[searchQuery, searchScope, isSortType],
	);

	const query = useInfiniteQuery({
		queryKey: ["productSearch", searchQuery, searchScope, isSortType],
		enabled: searchQuery.length > 0,
		queryFn: async ({
			pageParam = {
				first: PAGE_SIZE,
				...requestBody,
			},
		}) => {
			const response = await gqlClient.request(
				ProductListInfinityQuery,
				pageParam,
			);
			if (isSortType === "가나다순") {
				response.productList?.edges?.sort((a, b) =>
					(a?.node?.name?.trim() ?? "").localeCompare(
						b?.node?.name?.trim() ?? "",
						"ko-KR",
					),
				);
			}
			return response;
		},
		getNextPageParam: (lastPage) => {
			if (!lastPage.productList.pageInfo.hasNextPage) return false;
			return {
				first: PAGE_SIZE,
				after: lastPage.productList.pageInfo.endCursor,
				...requestBody,
			};
		},
	});

	const products = useMemo(() => {
		return (
			query.data?.pages
				.flatMap((page) => page.productList.edges.map((edge) => edge?.node))
				.filter(Boolean) ?? []
		);
	}, [query.data]);

	return {
		...query,
		products,
		isSortType,
		setIsSortType,
		totalCount: products.length,
	};
}

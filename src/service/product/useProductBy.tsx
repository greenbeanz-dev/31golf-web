import gqlClient from "@/gql/gqlClient";
import { ProductByIdQuery } from "@/gql/query/product/crud";
import { useQuery } from "@tanstack/react-query";

interface useProductByParams {
  id?: number;
}

export default function useProductBy({ id }: useProductByParams) {
  return useQuery({
    queryKey: ["productById", id],
    enabled: !!id,
    queryFn: async () => {
      const data = await gqlClient.request(ProductByIdQuery, {
        id: id!.toString(),
      });
      return data.productById;
    },
  });
}

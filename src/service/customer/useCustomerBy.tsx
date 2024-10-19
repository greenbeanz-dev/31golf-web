import gqlClient from "@/gql/gqlClient";
import { CustomerByIdQuery } from "@/gql/query/customer/crud";
import { useQuery } from "@tanstack/react-query";

interface useCustomerByParams {
  id?: string;
}

export default function useCustomerBy({ id }: useCustomerByParams) {
  return useQuery({
    queryKey: ["customerById", id],
    queryFn: async () => {
      if (!id) return;
      const data = await gqlClient.request(CustomerByIdQuery, {
        id: id!.toString(),
      });
      return data.customerById;
    },
    enabled: !!id,
  });
}

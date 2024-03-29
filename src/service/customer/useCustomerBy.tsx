import gqlClient from "@/gql/gqlClient";
import { CustomerByIdQueryWeb } from "@/gql/query/customer/crud";
import { useQuery } from "@tanstack/react-query";

interface useCustomerByParams {
  id?: string;
}

export default function useCustomerBy({ id }: useCustomerByParams) {
  return useQuery({
    queryKey: ["customerByIdWeb", id],
    queryFn: async () => {
      if (!id) return;
      const data = await gqlClient.request(CustomerByIdQueryWeb, {
        id: id!.toString(),
      });
      return data.customerByIdWeb;
    },
    enabled: !!id,
  });
}

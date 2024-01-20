import { gql } from "@/gql/__generated__/gql";

export const CreateFaxHistoryQuery = gql(`
mutation CreateFaxHistory(
    $reservationProductId: ID!
    $name: String
) {
    createFaxHistory(
        reservationProductId: $reservationProductId
        name: $name
  ) {
    id
    name
  }
}
`);

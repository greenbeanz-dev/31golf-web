import { gql } from "@/gql/__generated__/gql";

export const ProductPriceListInfinityQuery = gql(`
query productPriceListInfinityQuery(
  $first: Int,
  $after: ID,
  $productId: Int,) {
  productPriceList(
    first: $first
    after: $after
    productId: $productId) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        productId
        date
        price
        cost
        memo
      }
    }
  }
}
`);

export const CreateProductPriceQuery = gql(`
mutation createProductPrice(
  $productId: Int,
  $date: String,
  $price: Float,
  $cost: Float,
  $memo: String,
) {
  createProductPrice(
    productId: $productId
    date: $date
    price: $price
    cost: $cost
    memo: $memo
  ) {
    id
    productId
    date
    price
    cost
    memo
  }
}
`);

export const UpdateProductPriceByIdQuery = gql(`
mutation updateProductPrice(
  $id: ID!
  $date: String
  $price: Float
  $cost: Float
  $memo: String
) {
  updateProductPrice(
    id: $id
    date: $date
    price: $price
    cost: $cost
    memo: $memo
  ) {
    id
    productId
    date
    price
    cost
    memo
  }
}
`);

export const DeleteProductPriceByIdQuery = gql(`
mutation DeleteProductPrice($id: ID!) {
  deleteProductPrice(id: $id) {
    id
  }
}
`);

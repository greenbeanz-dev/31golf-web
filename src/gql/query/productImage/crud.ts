import { gql } from "@/gql/__generated__/gql";

export const ImageListByProductIdQuery =
  gql(`query ImageListByProductIdQuery($first: Int, $after: ID, $productId: ID) {
    imageListByProductId(first: $first, after: $after, productId: $productId) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          productId
          name
          url
        }
      }
    }
  }`);

export const CreateProductImageQuery = gql(`
  mutation CreateProductImageQuery($productId: ID! $name: String! $url: String!) {
    createProductImage(productId: $productId name: $name url: $url) {
      id
      productId
      name
      url
    }
  }
`);

export const DeleteRProductImageQuery = gql(`
  mutation DeleteProductImageQuery($id: ID!) {
    deleteProductImage(id: $id) {
      id
    }
  }
`);

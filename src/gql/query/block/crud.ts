// Model: Inherited from Product
import { gql } from "@/gql/__generated__/gql";

export const BlockListInfinityQuery = gql(`
query blockListInfinityQuery(
  $first: Int,
  $after: ID,
  $dateDeparture: String,
  $name: String,
  $memo: String,
  $note: String,
  $teeOff: String,
  $blockStatusList: [String!]
  $blockName: String
) {
  blockList(
    first: $first
    after: $after
    dateDeparture: $dateDeparture
    name: $name
    memo: $memo
    note: $note
    teeOff: $teeOff
    blockStatusList: $blockStatusList
    blockName: $blockName
  ) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        commissionCompany
        cost
        createdAt
        dateDeparture
        isBlock
        price
        updatedAt
        managerId
        name
        memo
        note
        teeOff
        blockStatus
        blockName
      }
    }
  }
}
`);

export const CreateBlockQuery = gql(`
mutation createBlock(
  $commissionCompany: String
  $cost: Float
  $dateDeparture: String
  $isBlock: Boolean
  $price: Float
  $managerId: Int
  $name: String
  $memo: String
  $note: String
  $teeOff: String
  $blockStatus: String
  $blockName: String
) {
  createProduct(
    commissionCompany: $commissionCompany
    cost: $cost
    dateDeparture: $dateDeparture
    isBlock: $isBlock
    price: $price
    managerId: $managerId
    name: $name
    memo: $memo
    note: $note
    teeOff: $teeOff
    blockStatus: $blockStatus
    blockName: $blockName
  ) {
    id
    commissionCompany
    cost
    dateDeparture
    isBlock
    price
    managerId
    name
    memo
    note
    teeOff
    blockStatus
    blockName
  }
}
`);

export const UpdateBlockByIdQuery = gql(`
mutation updateBlockById(
  $id: ID!
  $commissionCompany: String
  $cost: Float
  $dateDeparture: String
  $isBlock: Boolean
  $price: Float
  $managerId: Int
  $name: String
  $memo: String
  $note: String
  $teeOff: String
  $blockStatus: String
  $blockName: String
) {
  updateProductById(
    id: $id
    commissionCompany: $commissionCompany
    cost: $cost
    dateDeparture: $dateDeparture
    isBlock: $isBlock
    price: $price
    managerId: $managerId
    name: $name
    memo: $memo
    note: $note
    teeOff: $teeOff
    blockStatus: $blockStatus
    blockName: $blockName
  ) {
    id
    commissionCompany
    cost
    dateDeparture
    isBlock
    price
    managerId
    name
    memo
    note
    teeOff
    blockStatus
    blockName
  }
}
`);

export const DeleteBlockByIdQuery = gql(`
mutation DeleteBlockById($productId: ID!) {
  deleteProductById(id: $productId) {
    id
  }
}
`);

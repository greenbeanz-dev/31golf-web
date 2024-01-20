import { gql } from "@/gql/__generated__/gql";

export const ProductListInfinityQuery = gql(`
query productListInfinityQuery(
  $first: Int,
  $after: ID,
  $dateDeparture: String,
  $name: String,
  $memo: String,
  $isActive: Boolean,
  $courseId: Int,
  $category1: String,
  $category2: String,
  $category3: String,
  $memoNotice: String,
  $memoManager: String,
  $memoEtc: String,
) {
  productList(
    first: $first
    after: $after
    dateDeparture: $dateDeparture
    name: $name
    memo: $memo
    isActive: $isActive
    courseId: $courseId
    category1: $category1
    category2: $category2
    category3: $category3
    memoNotice: $memoNotice
    memoManager: $memoManager
    memoEtc: $memoEtc
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
        fax
        isActive
        course {
          id
          name
        }
        category1
        category2
        category3
        memoNotice
        memoManager
        memoEtc
      }
    }
  }
}
`);

export const CreateProductQuery = gql(`
mutation createProduct(
  $commissionCompany: String
  $cost: Float
  $dateDeparture: String
  $isBlock: Boolean
  $price: Float
  $managerId: Int
  $name: String
  $memo: String
  $fax: String
  $courseId: Int
  $category1: String
  $category2: String
  $category3: String
  $memoNotice: String
  $memoManager: String
  $memoEtc: String
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
    fax: $fax
    courseId: $courseId
    category1: $category1
    category2: $category2
    category3: $category3
    memoNotice: $memoNotice
    memoManager: $memoManager
    memoEtc: $memoEtc
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
    fax
    courseId
    category1
    category2
    category3
    memoNotice
    memoManager
    memoEtc
  }
}
`);

export const UpdateProductByIdQuery = gql(`
mutation updateProductById(
  $id: ID!
  $commissionCompany: String
  $cost: Float
  $dateDeparture: String
  $isBlock: Boolean
  $price: Float
  $managerId: Int
  $name: String
  $memo: String
  $fax: String
  $isActive: Boolean
  $courseId: Int
  $category1: String
  $category2: String
  $category3: String
  $memoNotice: String
  $memoManager: String
  $memoEtc: String
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
    fax: $fax
    isActive: $isActive
    courseId: $courseId
    category1: $category1
    category2: $category2
    category3: $category3
    memoNotice: $memoNotice
    memoManager: $memoManager
    memoEtc: $memoEtc
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
    fax
    isActive
    courseId
    category1
    category2
    category3
    memoNotice
    memoManager
    memoEtc
  }
}
`);

export const DeleteProductByIdQuery = gql(`
mutation DeleteProductById($productId: ID!) {
  deleteProductById(id: $productId) {
    id
  }
}
`);

export const ProductByIdQuery = gql(`
query ProductById($id: ID!) {
  productById(id: $id) {
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
    fax
    isActive
    course {
      id
      name
      fax
    }
    category1
    category2
    category3
    memoNotice
    memoManager
    memoEtc
  }
}
`);

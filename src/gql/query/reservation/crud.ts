import { gql } from "@/gql/__generated__/gql";

export const ReservationListInfinityQuery = gql(`
query reservationListInfinityQuery(
  $first: Int, 
  $after: ID, 
  $customerName: String, 
  $customerPhone: String, 
  $productName: String,
  $memo: String,
  $reservationStatusList:[String!], 
  $managerId: ID, 
  $dateDepartureStartAt: String, 
  $dateDepartureEndAt: String,
  $createdAtStartAt: String, 
  $createdAtEndAt: String,
  $sortColumn: String,
  $sortType: String,
  $doneReceipt: Boolean,
  $doneInvoice: Boolean,
  $isCard: Boolean
  $isWeb: Boolean
  ) {
    reservationList(
      first: $first 
      after: $after 
      customerName: $customerName 
      customerPhone: $customerPhone
      productName: $productName
      memo: $memo
      reservationStatusList: $reservationStatusList 
      managerId : $managerId 
      dateDepartureStartAt : $dateDepartureStartAt 
      dateDepartureEndAt : $dateDepartureEndAt
      createdAtStartAt : $createdAtStartAt 
      createdAtEndAt : $createdAtEndAt
      sortColumn: $sortColumn
      sortType: $sortType
      doneReceipt: $doneReceipt
      doneInvoice: $doneInvoice
      isCard: $isCard
      isWeb: $isWeb
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            createdAt
            updatedAt
            dateDeparture
            numPeople
            numTeam
            customer {
              id
              name
              phone
              isVillain
            }
            manager {
              id
              name
            }
            product {
              id
              name
              price
              type
            }
            status
            doneReceipt
            doneInvoice
            isCard
            noteCheckout
            priceCustom
            priceAddon
            priceAddonSub
            costAddon
            costAddonSub
            costCustom
            isWeb
          }
        }
    }
  }
`);

// 부가 상품 추가 부분 API를 추가 필요함

// 등록날짜, 출발일자, 예약자, 연락처, 인원, 일정(1박,2일), 상품, 부가상품, 메모
export const CreateReservationQuery = gql(`
mutation createReservation(
  $dateDeparture: String
  $memo: String
  $numPeople: Int
  $numTeam: Int
  $status: String
  $customerId: Int
  $managerId: Int
  $productId: Int
  $noteCheckout: String
  $priceCustom: Float
  $costCustom: Float
  $priceAddon: Float
  $costAddon: Float
  $priceAddonMemo: String
  $priceAddonSub: Float
  $costAddonSub: Float
  $priceAddonSubMemo: String
  $daysDay: Int
  $daysNight: Int
  $smsReservation: String
  $smsCheckout: String
  $isTransactionEditable: Boolean
  $transactionDeposit: Float
  $transactionWithdrawal: Float
  $transactionRemainder: Float
  $transactionUnpaid: Float
  $isWeb: Boolean
) {
  createReservation(
    dateDeparture: $dateDeparture
    memo: $memo
    numPeople: $numPeople
    numTeam: $numTeam
    status: $status
    customerId: $customerId
    managerId: $managerId
    productId: $productId
    noteCheckout: $noteCheckout
    priceCustom: $priceCustom
    costCustom: $costCustom
    priceAddon: $priceAddon
    costAddon: $costAddon
    priceAddonMemo: $priceAddonMemo
    priceAddonSub: $priceAddonSub
    costAddonSub: $costAddonSub
    priceAddonSubMemo: $priceAddonSubMemo
    daysDay: $daysDay
    daysNight: $daysNight
    smsReservation: $smsReservation
    smsCheckout: $smsCheckout
    isTransactionEditable: $isTransactionEditable
    transactionDeposit: $transactionDeposit
    transactionWithdrawal: $transactionWithdrawal
    transactionRemainder: $transactionRemainder
    transactionUnpaid: $transactionUnpaid
    isWeb: $isWeb
  ) {
    id
    updatedAt
  }
}
`);

export const UpdateReservationByIdQuery = gql(`
mutation updateReservationById(
  $id: ID!
  $dateDeparture: String
  $memo: String
  $numPeople: Int
  $numTeam: Int
  $status: String
  $customerId: Int
  $managerId: Int
  $productId: Int
  $doneReceipt: Boolean
  $doneInvoice: Boolean
  $isCard: Boolean
  $noteCheckout: String
  $priceCustom: Float
  $costCustom: Float
  $priceAddon: Float
  $costAddon: Float
  $priceAddonMemo: String
  $priceAddonSub: Float
  $costAddonSub: Float
  $priceAddonSubMemo: String
  $daysDay: Int
  $daysNight: Int
  $smsReservation: String
  $smsReservationSub: String
  $smsConfirmation: String
  $smsCheckout: String
  $isTransactionEditable: Boolean
  $transactionDeposit: Float
  $transactionWithdrawal: Float
  $transactionRemainder: Float
  $transactionUnpaid: Float
  $isWeb: Boolean
) {
  updateReservationById(
    id: $id
    dateDeparture: $dateDeparture
    memo: $memo
    numPeople: $numPeople
    numTeam: $numTeam
    status: $status
    customerId: $customerId
    managerId: $managerId
    productId: $productId
    doneReceipt: $doneReceipt
    doneInvoice: $doneInvoice
    isCard: $isCard
    noteCheckout: $noteCheckout
    priceCustom: $priceCustom
    costCustom: $costCustom
    priceAddon: $priceAddon
    costAddon: $costAddon
    priceAddonMemo: $priceAddonMemo
    priceAddonSub: $priceAddonSub
    costAddonSub: $costAddonSub
    priceAddonSubMemo: $priceAddonSubMemo
    daysDay: $daysDay
    daysNight: $daysNight
    smsReservation: $smsReservation
    smsReservationSub: $smsReservationSub
    smsConfirmation: $smsConfirmation
    smsCheckout: $smsCheckout
    isTransactionEditable: $isTransactionEditable
    transactionDeposit: $transactionDeposit
    transactionWithdrawal: $transactionWithdrawal
    transactionRemainder: $transactionRemainder
    transactionUnpaid: $transactionUnpaid
    isWeb: $isWeb
  ) {
    id
    updatedAt
  }
}`);

export const DeleteReservationByIdQuery = gql(`
mutation DeleteReservationById($reservationId: ID!) {
  deleteReservationById(id: $reservationId) {
    id
  }
}
`);

export const ReservationByIdQuery = gql(`
query reservationById($id: ID!) {
  reservationById(id: $id) {
  				id
          createdAt
          dateDeparture
          memo
          numPeople
          numTeam
          updatedAt
          customer {
            id
            name
            phone
            isVillain
          }
          manager {
            id
            name
          }
          product {
            id
            name
            price
            cost
            isBlock
            type
          }
          status
          doneReceipt
          doneInvoice
          isCard
          noteCheckout
          priceCustom
          costCustom
          priceAddon
          costAddon
          priceAddonMemo
          priceAddonSub
          costAddonSub
          priceAddonSubMemo
          daysDay
          daysNight
          smsReservation
          smsReservationSub
          smsConfirmation
          smsCheckout
          isTransactionEditable
          transactionDeposit
          transactionWithdrawal
          transactionRemainder
          transactionUnpaid
          isWeb
  }
}
`);

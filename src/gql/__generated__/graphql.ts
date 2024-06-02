/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date; output: Date; }
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateTransaction: Transaction;
  UpdateCustomerByIdWeb: Customer;
  createCourse: Course;
  createCustomerByWeb: Customer;
  createFaxHistory: Fax_History;
  createManager: Manager;
  createProduct: Product;
  createProductImage: Product_Image;
  createProductPrice: Product_Price;
  createRequest: Request;
  createReservation: Reservation;
  createReservationFile: Reservation_File;
  createReservationProduct: Reservation_Product;
  deleteCourseById: Course;
  deleteCustomerById: Customer;
  deleteProductById: Product;
  deleteProductImage: Product_Image;
  deleteProductPrice: Product_Price;
  deleteRequestById: Request;
  deleteReservationById: Reservation;
  deleteReservationFile: Reservation_File;
  deleteReservationProduct: Reservation_Product;
  deleteTransactionById: Transaction;
  updateCourseById: Course;
  updateManagerById: Manager;
  updateProductById: Product;
  updateProductPrice: Product_Price;
  updateRequestById: Request;
  updateReservationById: Reservation;
  updateReservationProduct: Reservation_Product;
  updateSavingsAccountById?: Maybe<Savings_Account>;
};


export type MutationCreateTransactionArgs = {
  account?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
  savingsAccountId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCustomerByIdWebArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isVillain?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCourseArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  confirmCheck?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partnerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  priceCheck?: InputMaybe<Scalars['String']['input']>;
  reservationCheck?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCustomerByWebArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isVillain?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFaxHistoryArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  reservationProductId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateManagerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductArgs = {
  benefit?: InputMaybe<Scalars['String']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  caution?: InputMaybe<Scalars['String']['input']>;
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  courseAddress?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  exclusives?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  inclusives?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  notice?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  schedulePc?: InputMaybe<Scalars['String']['input']>;
  scheduleTablePc?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
  thumbnailImage?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductImageArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProductPriceArgs = {
  cost?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateRequestArgs = {
  customerId?: InputMaybe<Scalars['Int']['input']>;
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isReservation?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateReservationArgs = {
  costAddon?: InputMaybe<Scalars['Float']['input']>;
  costAddonSub?: InputMaybe<Scalars['Float']['input']>;
  costCustom?: InputMaybe<Scalars['Float']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  daysDay?: InputMaybe<Scalars['Int']['input']>;
  daysNight?: InputMaybe<Scalars['Int']['input']>;
  doneInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  doneReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  isCard?: InputMaybe<Scalars['Boolean']['input']>;
  isTransactionEditable?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  noteCheckout?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  priceAddon?: InputMaybe<Scalars['Float']['input']>;
  priceAddonMemo?: InputMaybe<Scalars['String']['input']>;
  priceAddonSub?: InputMaybe<Scalars['Float']['input']>;
  priceAddonSubMemo?: InputMaybe<Scalars['String']['input']>;
  priceCustom?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  smsCheckout?: InputMaybe<Scalars['String']['input']>;
  smsReservation?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transactionDeposit?: InputMaybe<Scalars['Float']['input']>;
  transactionRemainder?: InputMaybe<Scalars['Float']['input']>;
  transactionUnpaid?: InputMaybe<Scalars['Float']['input']>;
  transactionWithdrawal?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCreateReservationFileArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateReservationProductArgs = {
  productId?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteCourseByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductImageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteProductPriceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRequestByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteReservationProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteTransactionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseByIdArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  confirmCheck?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partnerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  priceCheck?: InputMaybe<Scalars['String']['input']>;
  reservationCheck?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateManagerByIdArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductByIdArgs = {
  benefit?: InputMaybe<Scalars['String']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  caution?: InputMaybe<Scalars['String']['input']>;
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  courseAddress?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  exclusives?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inclusives?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  notice?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  schedulePc?: InputMaybe<Scalars['String']['input']>;
  scheduleTablePc?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
  thumbnailImage?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProductPriceArgs = {
  cost?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateRequestByIdArgs = {
  customerId?: InputMaybe<Scalars['Int']['input']>;
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  isReservation?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
  rowStyle?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateReservationByIdArgs = {
  costAddon?: InputMaybe<Scalars['Float']['input']>;
  costAddonSub?: InputMaybe<Scalars['Float']['input']>;
  costCustom?: InputMaybe<Scalars['Float']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  daysDay?: InputMaybe<Scalars['Int']['input']>;
  daysNight?: InputMaybe<Scalars['Int']['input']>;
  doneInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  doneReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isCard?: InputMaybe<Scalars['Boolean']['input']>;
  isTransactionEditable?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  noteCheckout?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  priceAddon?: InputMaybe<Scalars['Float']['input']>;
  priceAddonMemo?: InputMaybe<Scalars['String']['input']>;
  priceAddonSub?: InputMaybe<Scalars['Float']['input']>;
  priceAddonSubMemo?: InputMaybe<Scalars['String']['input']>;
  priceCustom?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  smsCheckout?: InputMaybe<Scalars['String']['input']>;
  smsConfirmation?: InputMaybe<Scalars['String']['input']>;
  smsReservation?: InputMaybe<Scalars['String']['input']>;
  smsReservationSub?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transactionDeposit?: InputMaybe<Scalars['Float']['input']>;
  transactionRemainder?: InputMaybe<Scalars['Float']['input']>;
  transactionUnpaid?: InputMaybe<Scalars['Float']['input']>;
  transactionWithdrawal?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateReservationProductArgs = {
  faxType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  row01?: InputMaybe<Scalars['String']['input']>;
  row02?: InputMaybe<Scalars['String']['input']>;
  row03?: InputMaybe<Scalars['String']['input']>;
  row04?: InputMaybe<Scalars['String']['input']>;
  row05?: InputMaybe<Scalars['String']['input']>;
  row06?: InputMaybe<Scalars['String']['input']>;
  row07?: InputMaybe<Scalars['String']['input']>;
  row08?: InputMaybe<Scalars['String']['input']>;
  row09?: InputMaybe<Scalars['String']['input']>;
  row10?: InputMaybe<Scalars['String']['input']>;
  row11?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSavingsAccountByIdArgs = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  blockList: QueryBlockListConnection;
  courseList: QueryCourseListConnection;
  customerByIdWeb: Customer;
  customerList: QueryCustomerListConnection;
  fileListByReservationId: QueryFileListByReservationIdConnection;
  imageListByProductId: QueryImageListByProductIdConnection;
  managerById: Manager;
  managerList: QueryManagerListConnection;
  messageHistoryList: QueryMessageHistoryListConnection;
  productById: Product;
  productList: QueryProductListConnection;
  productListByReservationId: QueryProductListByReservationIdConnection;
  productPriceList: QueryProductPriceListConnection;
  requestById: Request;
  requestList: QueryRequestListConnection;
  reservationById: Reservation;
  reservationList: QueryReservationListConnection;
  reservationProductById: Reservation_Product;
  reservationProductList: QueryReservationProductListConnection;
  savingsAccountList: QuerySavingsAccountListConnection;
  transactionList: QueryTransactionListConnection;
};


export type QueryBlockListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
  blockStatusList?: InputMaybe<Array<Scalars['String']['input']>>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCourseListArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCustomerByIdWebArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomerListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFileListByReservationIdArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryImageListByProductIdArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryManagerByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryManagerListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessageHistoryListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  isSortType?: InputMaybe<Scalars['String']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductListByReservationIdArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductPriceListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequestByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRequestListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
  rowStyle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReservationByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReservationListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  createdAtEndAt?: InputMaybe<Scalars['String']['input']>;
  createdAtStartAt?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  dateDepartureEndAt?: InputMaybe<Scalars['String']['input']>;
  dateDepartureStartAt?: InputMaybe<Scalars['String']['input']>;
  doneInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  doneReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isCard?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  managerId?: InputMaybe<Scalars['ID']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  reservationStatusList?: InputMaybe<Array<Scalars['String']['input']>>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  sortType?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReservationProductByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReservationProductListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySavingsAccountListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTransactionListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBlockListConnection = {
  __typename?: 'QueryBlockListConnection';
  edges: Array<Maybe<QueryBlockListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryBlockListConnectionEdge = {
  __typename?: 'QueryBlockListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type QueryCourseListConnection = {
  __typename?: 'QueryCourseListConnection';
  edges: Array<Maybe<QueryCourseListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryCourseListConnectionEdge = {
  __typename?: 'QueryCourseListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Course;
};

export type QueryCustomerListConnection = {
  __typename?: 'QueryCustomerListConnection';
  edges: Array<Maybe<QueryCustomerListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryCustomerListConnectionEdge = {
  __typename?: 'QueryCustomerListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type QueryFileListByReservationIdConnection = {
  __typename?: 'QueryFileListByReservationIdConnection';
  edges: Array<Maybe<QueryFileListByReservationIdConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryFileListByReservationIdConnectionEdge = {
  __typename?: 'QueryFileListByReservationIdConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Reservation_File;
};

export type QueryImageListByProductIdConnection = {
  __typename?: 'QueryImageListByProductIdConnection';
  edges: Array<Maybe<QueryImageListByProductIdConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryImageListByProductIdConnectionEdge = {
  __typename?: 'QueryImageListByProductIdConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product_Image;
};

export type QueryManagerListConnection = {
  __typename?: 'QueryManagerListConnection';
  edges: Array<Maybe<QueryManagerListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryManagerListConnectionEdge = {
  __typename?: 'QueryManagerListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Manager;
};

export type QueryMessageHistoryListConnection = {
  __typename?: 'QueryMessageHistoryListConnection';
  edges: Array<Maybe<QueryMessageHistoryListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryMessageHistoryListConnectionEdge = {
  __typename?: 'QueryMessageHistoryListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Message_History;
};

export type QueryProductListByReservationIdConnection = {
  __typename?: 'QueryProductListByReservationIdConnection';
  edges: Array<Maybe<QueryProductListByReservationIdConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryProductListByReservationIdConnectionEdge = {
  __typename?: 'QueryProductListByReservationIdConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Reservation_Product;
};

export type QueryProductListConnection = {
  __typename?: 'QueryProductListConnection';
  edges: Array<Maybe<QueryProductListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryProductListConnectionEdge = {
  __typename?: 'QueryProductListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type QueryProductPriceListConnection = {
  __typename?: 'QueryProductPriceListConnection';
  edges: Array<Maybe<QueryProductPriceListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryProductPriceListConnectionEdge = {
  __typename?: 'QueryProductPriceListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Product_Price;
};

export type QueryRequestListConnection = {
  __typename?: 'QueryRequestListConnection';
  edges: Array<Maybe<QueryRequestListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryRequestListConnectionEdge = {
  __typename?: 'QueryRequestListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Request;
};

export type QueryReservationListConnection = {
  __typename?: 'QueryReservationListConnection';
  edges: Array<Maybe<QueryReservationListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryReservationListConnectionEdge = {
  __typename?: 'QueryReservationListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Reservation;
};

export type QueryReservationProductListConnection = {
  __typename?: 'QueryReservationProductListConnection';
  edges: Array<Maybe<QueryReservationProductListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryReservationProductListConnectionEdge = {
  __typename?: 'QueryReservationProductListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Reservation_Product;
};

export type QuerySavingsAccountListConnection = {
  __typename?: 'QuerySavingsAccountListConnection';
  edges: Array<Maybe<QuerySavingsAccountListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QuerySavingsAccountListConnectionEdge = {
  __typename?: 'QuerySavingsAccountListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Savings_Account;
};

export type QueryTransactionListConnection = {
  __typename?: 'QueryTransactionListConnection';
  edges: Array<Maybe<QueryTransactionListConnectionEdge>>;
  pageInfo: PageInfo;
};

export type QueryTransactionListConnectionEdge = {
  __typename?: 'QueryTransactionListConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Transaction;
};

export type Course = {
  __typename?: 'course';
  address?: Maybe<Scalars['String']['output']>;
  category1?: Maybe<Scalars['String']['output']>;
  category2?: Maybe<Scalars['String']['output']>;
  category3?: Maybe<Scalars['String']['output']>;
  confirmCheck?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partnerName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  priceCheck?: Maybe<Scalars['String']['output']>;
  reservationCheck?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Customer = {
  __typename?: 'customer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  isVillain?: Maybe<Scalars['Boolean']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Fax_History = {
  __typename?: 'fax_history';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reservationProductID: Scalars['BigInt']['output'];
  reservation_product: Reservation_Product;
};

export type Manager = {
  __typename?: 'manager';
  email: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type Message_History = {
  __typename?: 'message_history';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  reservationId?: Maybe<Scalars['BigInt']['output']>;
  sendDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'product';
  benefit?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockStatus?: Maybe<Scalars['String']['output']>;
  cancellationPolicy?: Maybe<Scalars['String']['output']>;
  category1?: Maybe<Scalars['String']['output']>;
  category2?: Maybe<Scalars['String']['output']>;
  category3?: Maybe<Scalars['String']['output']>;
  caution?: Maybe<Scalars['String']['output']>;
  commissionCompany?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  course?: Maybe<Course>;
  courseAddress?: Maybe<Scalars['String']['output']>;
  courseId?: Maybe<Scalars['BigInt']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateDeparture?: Maybe<Scalars['DateTime']['output']>;
  exclusives?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  inclusives?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isBest?: Maybe<Scalars['Boolean']['output']>;
  isBlock?: Maybe<Scalars['Boolean']['output']>;
  isWeb?: Maybe<Scalars['Boolean']['output']>;
  managerId?: Maybe<Scalars['BigInt']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  memoEtc?: Maybe<Scalars['String']['output']>;
  memoManager?: Maybe<Scalars['String']['output']>;
  memoNotice?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  notice?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  schedulePc?: Maybe<Scalars['String']['output']>;
  scheduleTablePc?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['BigInt']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  teeOff?: Maybe<Scalars['String']['output']>;
  thumbnailImage?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Product_Image = {
  __typename?: 'product_image';
  id: Scalars['BigInt']['output'];
  name?: Maybe<Scalars['String']['output']>;
  product: Product;
  productId: Scalars['BigInt']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Product_Price = {
  __typename?: 'product_price';
  cost?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['BigInt']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product: Product;
  productId?: Maybe<Scalars['BigInt']['output']>;
};

export type Request = {
  __typename?: 'request';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer: Customer;
  customerId?: Maybe<Scalars['BigInt']['output']>;
  dateArrival?: Maybe<Scalars['DateTime']['output']>;
  dateDeparture?: Maybe<Scalars['DateTime']['output']>;
  golfCourse?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  isCanceled?: Maybe<Scalars['Boolean']['output']>;
  isReservation?: Maybe<Scalars['Boolean']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  numPeople?: Maybe<Scalars['Int']['output']>;
  numTeam?: Maybe<Scalars['Int']['output']>;
  requestContent?: Maybe<Scalars['String']['output']>;
  rowStyle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Reservation = {
  __typename?: 'reservation';
  costAddon?: Maybe<Scalars['Float']['output']>;
  costAddonSub?: Maybe<Scalars['Float']['output']>;
  costCustom?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  dateDeparture?: Maybe<Scalars['DateTime']['output']>;
  daysDay?: Maybe<Scalars['Int']['output']>;
  daysNight?: Maybe<Scalars['Int']['output']>;
  doneInvoice?: Maybe<Scalars['Boolean']['output']>;
  doneReceipt?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['BigInt']['output'];
  isCard?: Maybe<Scalars['Boolean']['output']>;
  isTransactionEditable?: Maybe<Scalars['Boolean']['output']>;
  isWeb?: Maybe<Scalars['Boolean']['output']>;
  manager?: Maybe<Manager>;
  memo?: Maybe<Scalars['String']['output']>;
  noteCheckout?: Maybe<Scalars['String']['output']>;
  numPeople?: Maybe<Scalars['Int']['output']>;
  numTeam?: Maybe<Scalars['Int']['output']>;
  priceAddon?: Maybe<Scalars['Float']['output']>;
  priceAddonMemo?: Maybe<Scalars['String']['output']>;
  priceAddonSub?: Maybe<Scalars['Float']['output']>;
  priceAddonSubMemo?: Maybe<Scalars['String']['output']>;
  priceCustom?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  smsCheckout?: Maybe<Scalars['String']['output']>;
  smsConfirmation?: Maybe<Scalars['String']['output']>;
  smsReservation?: Maybe<Scalars['String']['output']>;
  smsReservationSub?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transactionDeposit?: Maybe<Scalars['Float']['output']>;
  transactionRemainder?: Maybe<Scalars['Float']['output']>;
  transactionUnpaid?: Maybe<Scalars['Float']['output']>;
  transactionWithdrawal?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Reservation_File = {
  __typename?: 'reservation_file';
  id: Scalars['BigInt']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reservation: Reservation;
  reservationId: Scalars['BigInt']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Reservation_Product = {
  __typename?: 'reservation_product';
  faxType?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  product: Product;
  productId: Scalars['BigInt']['output'];
  reservation: Reservation;
  reservationId: Scalars['BigInt']['output'];
  row01?: Maybe<Scalars['String']['output']>;
  row02?: Maybe<Scalars['String']['output']>;
  row03?: Maybe<Scalars['String']['output']>;
  row04?: Maybe<Scalars['String']['output']>;
  row05?: Maybe<Scalars['String']['output']>;
  row06?: Maybe<Scalars['String']['output']>;
  row07?: Maybe<Scalars['String']['output']>;
  row08?: Maybe<Scalars['String']['output']>;
  row09?: Maybe<Scalars['String']['output']>;
  row10?: Maybe<Scalars['String']['output']>;
  row11?: Maybe<Scalars['String']['output']>;
};

export type Savings_Account = {
  __typename?: 'savings_account';
  account?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reservation?: Maybe<Reservation>;
  reservationId?: Maybe<Scalars['BigInt']['output']>;
  type: Scalars['String']['output'];
};

export type Transaction = {
  __typename?: 'transaction';
  account?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['BigInt']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  method: Scalars['String']['output'];
  reservationId?: Maybe<Scalars['BigInt']['output']>;
  savingsAccountId?: Maybe<Scalars['BigInt']['output']>;
  type: Scalars['String']['output'];
};

export type BlockListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
  blockStatusList?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
}>;


export type BlockListInfinityQueryQuery = { __typename?: 'Query', blockList: { __typename?: 'QueryBlockListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryBlockListConnectionEdge', cursor: string, node: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, createdAt?: Date | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, updatedAt?: Date | null, managerId?: number | null, name?: string | null, memo?: string | null, note?: string | null, teeOff?: string | null, blockStatus?: string | null, blockName?: string | null } } | null> } };

export type CreateBlockMutationVariables = Exact<{
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateBlockMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, managerId?: number | null, name?: string | null, memo?: string | null, note?: string | null, teeOff?: string | null, blockStatus?: string | null, blockName?: string | null } };

export type UpdateBlockByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  teeOff?: InputMaybe<Scalars['String']['input']>;
  blockStatus?: InputMaybe<Scalars['String']['input']>;
  blockName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateBlockByIdMutation = { __typename?: 'Mutation', updateProductById: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, managerId?: number | null, name?: string | null, memo?: string | null, note?: string | null, teeOff?: string | null, blockStatus?: string | null, blockName?: string | null } };

export type DeleteBlockByIdMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type DeleteBlockByIdMutation = { __typename?: 'Mutation', deleteProductById: { __typename?: 'product', id: number } };

export type CourseListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
}>;


export type CourseListInfinityQueryQuery = { __typename?: 'Query', courseList: { __typename?: 'QueryCourseListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryCourseListConnectionEdge', cursor: string, node: { __typename?: 'course', id: number, name?: string | null, address?: string | null, fax?: string | null, partnerName?: string | null, phone?: string | null, category1?: string | null, category2?: string | null, category3?: string | null, priceCheck?: string | null, contact?: string | null, reservationCheck?: string | null, confirmCheck?: string | null, memo?: string | null } } | null> } };

export type CreateCourseMutationVariables = Exact<{
  name: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  partnerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  priceCheck?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  reservationCheck?: InputMaybe<Scalars['String']['input']>;
  confirmCheck?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'course', id: number } };

export type UpdateCourseByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  partnerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  priceCheck?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  reservationCheck?: InputMaybe<Scalars['String']['input']>;
  confirmCheck?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateCourseByIdMutation = { __typename?: 'Mutation', updateCourseById: { __typename?: 'course', id: number } };

export type DeleteCourseByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCourseByIdMutation = { __typename?: 'Mutation', deleteCourseById: { __typename?: 'course', id: number } };

export type CustomerListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
}>;


export type CustomerListInfinityQueryQuery = { __typename?: 'Query', customerList: { __typename?: 'QueryCustomerListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryCustomerListConnectionEdge', cursor: string, node: { __typename?: 'customer', id: number, memo?: string | null, name: string, phone?: string | null, email?: string | null, fax?: string | null, isVillain?: boolean | null } } | null> } };

export type CustomerAllListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerAllListQueryQuery = { __typename?: 'Query', customerList: { __typename?: 'QueryCustomerListConnection', edges: Array<{ __typename?: 'QueryCustomerListConnectionEdge', node: { __typename?: 'customer', id: number, memo?: string | null, name: string, phone?: string | null, email?: string | null, fax?: string | null, isVillain?: boolean | null } } | null> } };

export type CustomerByIdWebQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CustomerByIdWebQuery = { __typename?: 'Query', customerByIdWeb: { __typename?: 'customer', id: number, name: string } };

export type CreateCustomerByWebMutationVariables = Exact<{
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isVillain?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCustomerByWebMutation = { __typename?: 'Mutation', createCustomerByWeb: { __typename?: 'customer', id: number } };

export type UpdateCustomerByIdWebMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isVillain?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateCustomerByIdWebMutation = { __typename?: 'Mutation', UpdateCustomerByIdWeb: { __typename?: 'customer', id: number, name: string, phone?: string | null, email?: string | null, provider?: string | null } };

export type DeleteCustomerByIdMutationVariables = Exact<{
  customerId: Scalars['ID']['input'];
}>;


export type DeleteCustomerByIdMutation = { __typename?: 'Mutation', deleteCustomerById: { __typename?: 'customer', id: number } };

export type CreateFaxHistoryMutationVariables = Exact<{
  reservationProductId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFaxHistoryMutation = { __typename?: 'Mutation', createFaxHistory: { __typename?: 'fax_history', id: number, name?: string | null } };

export type ManagerListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ManagerListInfinityQueryQuery = { __typename?: 'Query', managerList: { __typename?: 'QueryManagerListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryManagerListConnectionEdge', cursor: string, node: { __typename?: 'manager', id: number, name: string, email: string, phone?: string | null, role?: string | null } } | null> } };

export type CreateManagerMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateManagerMutation = { __typename?: 'Mutation', createManager: { __typename?: 'manager', id: number } };

export type UpdateManagerByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateManagerByIdMutation = { __typename?: 'Mutation', updateManagerById: { __typename?: 'manager', id: number } };

export type MessageHistoryListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type MessageHistoryListInfinityQueryQuery = { __typename?: 'Query', messageHistoryList: { __typename?: 'QueryMessageHistoryListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryMessageHistoryListConnectionEdge', cursor: string, node: { __typename?: 'message_history', id: number, content?: string | null, reservationId?: number | null, type?: string | null, status?: string | null, sendDate?: Date | null } } | null> } };

export type ProductListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  isSortType?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductListInfinityQueryQuery = { __typename?: 'Query', productList: { __typename?: 'QueryProductListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryProductListConnectionEdge', cursor: string, node: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, createdAt?: Date | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, updatedAt?: Date | null, managerId?: number | null, name?: string | null, memo?: string | null, fax?: string | null, isActive?: boolean | null, isWeb?: boolean | null, isBest?: boolean | null, category1?: string | null, category2?: string | null, category3?: string | null, memoNotice?: string | null, memoManager?: string | null, memoEtc?: string | null, type?: string | null, inclusives?: string | null, exclusives?: string | null, summary?: string | null, schedulePc?: string | null, benefit?: string | null, notice?: string | null, caution?: string | null, scheduleTablePc?: string | null, courseAddress?: string | null, cancellationPolicy?: string | null, thumbnailImage?: string | null, course?: { __typename?: 'course', id: number, name?: string | null } | null } } | null> } };

export type CreateProductMutationVariables = Exact<{
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  inclusives?: InputMaybe<Scalars['String']['input']>;
  exclusives?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  schedulePc?: InputMaybe<Scalars['String']['input']>;
  benefit?: InputMaybe<Scalars['String']['input']>;
  notice?: InputMaybe<Scalars['String']['input']>;
  caution?: InputMaybe<Scalars['String']['input']>;
  scheduleTablePc?: InputMaybe<Scalars['String']['input']>;
  courseAddress?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, managerId?: number | null, name?: string | null, memo?: string | null, fax?: string | null, courseId?: number | null, category1?: string | null, category2?: string | null, category3?: string | null, memoNotice?: string | null, memoManager?: string | null, memoEtc?: string | null, type?: string | null, inclusives?: string | null, exclusives?: string | null, summary?: string | null, schedulePc?: string | null, benefit?: string | null, notice?: string | null, caution?: string | null, scheduleTablePc?: string | null, courseAddress?: string | null, cancellationPolicy?: string | null } };

export type UpdateProductByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  commissionCompany?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  isBest?: InputMaybe<Scalars['Boolean']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
  category1?: InputMaybe<Scalars['String']['input']>;
  category2?: InputMaybe<Scalars['String']['input']>;
  category3?: InputMaybe<Scalars['String']['input']>;
  memoNotice?: InputMaybe<Scalars['String']['input']>;
  memoManager?: InputMaybe<Scalars['String']['input']>;
  memoEtc?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  inclusives?: InputMaybe<Scalars['String']['input']>;
  exclusives?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  schedulePc?: InputMaybe<Scalars['String']['input']>;
  benefit?: InputMaybe<Scalars['String']['input']>;
  notice?: InputMaybe<Scalars['String']['input']>;
  caution?: InputMaybe<Scalars['String']['input']>;
  scheduleTablePc?: InputMaybe<Scalars['String']['input']>;
  courseAddress?: InputMaybe<Scalars['String']['input']>;
  cancellationPolicy?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProductByIdMutation = { __typename?: 'Mutation', updateProductById: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, managerId?: number | null, name?: string | null, memo?: string | null, fax?: string | null, isActive?: boolean | null, isWeb?: boolean | null, isBest?: boolean | null, courseId?: number | null, category1?: string | null, category2?: string | null, category3?: string | null, memoNotice?: string | null, memoManager?: string | null, memoEtc?: string | null, type?: string | null, inclusives?: string | null, exclusives?: string | null, summary?: string | null, schedulePc?: string | null, benefit?: string | null, notice?: string | null, caution?: string | null, scheduleTablePc?: string | null, courseAddress?: string | null, cancellationPolicy?: string | null } };

export type DeleteProductByIdMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type DeleteProductByIdMutation = { __typename?: 'Mutation', deleteProductById: { __typename?: 'product', id: number } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', productById: { __typename?: 'product', id: number, commissionCompany?: string | null, cost?: number | null, createdAt?: Date | null, dateDeparture?: Date | null, isBlock?: boolean | null, price?: number | null, updatedAt?: Date | null, managerId?: number | null, name?: string | null, memo?: string | null, fax?: string | null, isActive?: boolean | null, isWeb?: boolean | null, isBest?: boolean | null, category1?: string | null, category2?: string | null, category3?: string | null, memoNotice?: string | null, memoManager?: string | null, memoEtc?: string | null, type?: string | null, inclusives?: string | null, exclusives?: string | null, summary?: string | null, schedulePc?: string | null, benefit?: string | null, notice?: string | null, caution?: string | null, scheduleTablePc?: string | null, courseAddress?: string | null, cancellationPolicy?: string | null, thumbnailImage?: string | null, course?: { __typename?: 'course', id: number, name?: string | null, fax?: string | null } | null } };

export type ImageListByProductIdQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ImageListByProductIdQueryQuery = { __typename?: 'Query', imageListByProductId: { __typename?: 'QueryImageListByProductIdConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryImageListByProductIdConnectionEdge', cursor: string, node: { __typename?: 'product_image', id: number, productId: number, name?: string | null, url?: string | null } } | null> } };

export type CreateProductImageQueryMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;


export type CreateProductImageQueryMutation = { __typename?: 'Mutation', createProductImage: { __typename?: 'product_image', id: number, productId: number, name?: string | null, url?: string | null } };

export type DeleteProductImageQueryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProductImageQueryMutation = { __typename?: 'Mutation', deleteProductImage: { __typename?: 'product_image', id: number } };

export type ProductPriceListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductPriceListInfinityQueryQuery = { __typename?: 'Query', productPriceList: { __typename?: 'QueryProductPriceListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryProductPriceListConnectionEdge', cursor: string, node: { __typename?: 'product_price', id: number, productId?: number | null, date?: Date | null, price?: number | null, cost?: number | null, memo?: string | null } } | null> } };

export type CreateProductPriceMutationVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateProductPriceMutation = { __typename?: 'Mutation', createProductPrice: { __typename?: 'product_price', id: number, productId?: number | null, date?: Date | null, price?: number | null, cost?: number | null, memo?: string | null } };

export type UpdateProductPriceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProductPriceMutation = { __typename?: 'Mutation', updateProductPrice: { __typename?: 'product_price', id: number, productId?: number | null, date?: Date | null, price?: number | null, cost?: number | null, memo?: string | null } };

export type DeleteProductPriceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteProductPriceMutation = { __typename?: 'Mutation', deleteProductPrice: { __typename?: 'product_price', id: number } };

export type RequestListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
  rowStyle?: InputMaybe<Scalars['String']['input']>;
}>;


export type RequestListInfinityQueryQuery = { __typename?: 'Query', requestList: { __typename?: 'QueryRequestListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryRequestListConnectionEdge', cursor: string, node: { __typename?: 'request', id: number, createdAt?: Date | null, updatedAt?: Date | null, dateArrival?: Date | null, dateDeparture?: Date | null, memo?: string | null, numPeople?: number | null, numTeam?: number | null, requestContent?: string | null, isReservation?: boolean | null, isCanceled?: boolean | null, golfCourse?: string | null, rowStyle?: string | null, customer: { __typename?: 'customer', id: number, name: string, phone?: string | null } } } | null> } };

export type CreateRequestMutationVariables = Exact<{
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  isReservation?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateRequestMutation = { __typename?: 'Mutation', createRequest: { __typename?: 'request', id: number, createdAt?: Date | null, updatedAt?: Date | null, dateArrival?: Date | null, dateDeparture?: Date | null, memo?: string | null, numPeople?: number | null, numTeam?: number | null, requestContent?: string | null, customerId?: number | null, isReservation?: boolean | null, isCanceled?: boolean | null, golfCourse?: string | null } };

export type UpdateRequestByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  dateArrival?: InputMaybe<Scalars['String']['input']>;
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  requestContent?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  isReservation?: InputMaybe<Scalars['Boolean']['input']>;
  isCanceled?: InputMaybe<Scalars['Boolean']['input']>;
  golfCourse?: InputMaybe<Scalars['String']['input']>;
  rowStyle?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateRequestByIdMutation = { __typename?: 'Mutation', updateRequestById: { __typename?: 'request', id: number, createdAt?: Date | null, updatedAt?: Date | null, dateArrival?: Date | null, dateDeparture?: Date | null, memo?: string | null, numPeople?: number | null, numTeam?: number | null, requestContent?: string | null, customerId?: number | null, isReservation?: boolean | null, isCanceled?: boolean | null, golfCourse?: string | null, rowStyle?: string | null } };

export type RequestByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RequestByIdQuery = { __typename?: 'Query', requestById: { __typename?: 'request', id: number, createdAt?: Date | null, updatedAt?: Date | null, dateArrival?: Date | null, dateDeparture?: Date | null, memo?: string | null, numPeople?: number | null, numTeam?: number | null, requestContent?: string | null, isReservation?: boolean | null, isCanceled?: boolean | null, golfCourse?: string | null, rowStyle?: string | null, customer: { __typename?: 'customer', id: number, name: string, phone?: string | null } } };

export type DeleteRequestByIdQueryMutationVariables = Exact<{
  requestId: Scalars['ID']['input'];
}>;


export type DeleteRequestByIdQueryMutation = { __typename?: 'Mutation', deleteRequestById: { __typename?: 'request', id: number } };

export type ReservationListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  reservationStatusList?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  managerId?: InputMaybe<Scalars['ID']['input']>;
  dateDepartureStartAt?: InputMaybe<Scalars['String']['input']>;
  dateDepartureEndAt?: InputMaybe<Scalars['String']['input']>;
  createdAtStartAt?: InputMaybe<Scalars['String']['input']>;
  createdAtEndAt?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  sortType?: InputMaybe<Scalars['String']['input']>;
  doneReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  doneInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  isCard?: InputMaybe<Scalars['Boolean']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ReservationListInfinityQueryQuery = { __typename?: 'Query', reservationList: { __typename?: 'QueryReservationListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryReservationListConnectionEdge', cursor: string, node: { __typename?: 'reservation', id: number, createdAt: Date, updatedAt: Date, dateDeparture?: Date | null, numPeople?: number | null, numTeam?: number | null, status?: string | null, doneReceipt?: boolean | null, doneInvoice?: boolean | null, isCard?: boolean | null, noteCheckout?: string | null, priceCustom?: number | null, priceAddon?: number | null, priceAddonSub?: number | null, costAddon?: number | null, costAddonSub?: number | null, costCustom?: number | null, isWeb?: boolean | null, customer?: { __typename?: 'customer', id: number, name: string, phone?: string | null, isVillain?: boolean | null } | null, manager?: { __typename?: 'manager', id: number, name: string } | null, product?: { __typename?: 'product', id: number, name?: string | null, price?: number | null, type?: string | null } | null } } | null> } };

export type CreateReservationMutationVariables = Exact<{
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  noteCheckout?: InputMaybe<Scalars['String']['input']>;
  priceCustom?: InputMaybe<Scalars['Float']['input']>;
  costCustom?: InputMaybe<Scalars['Float']['input']>;
  priceAddon?: InputMaybe<Scalars['Float']['input']>;
  costAddon?: InputMaybe<Scalars['Float']['input']>;
  priceAddonMemo?: InputMaybe<Scalars['String']['input']>;
  priceAddonSub?: InputMaybe<Scalars['Float']['input']>;
  costAddonSub?: InputMaybe<Scalars['Float']['input']>;
  priceAddonSubMemo?: InputMaybe<Scalars['String']['input']>;
  daysDay?: InputMaybe<Scalars['Int']['input']>;
  daysNight?: InputMaybe<Scalars['Int']['input']>;
  smsReservation?: InputMaybe<Scalars['String']['input']>;
  smsCheckout?: InputMaybe<Scalars['String']['input']>;
  isTransactionEditable?: InputMaybe<Scalars['Boolean']['input']>;
  transactionDeposit?: InputMaybe<Scalars['Float']['input']>;
  transactionWithdrawal?: InputMaybe<Scalars['Float']['input']>;
  transactionRemainder?: InputMaybe<Scalars['Float']['input']>;
  transactionUnpaid?: InputMaybe<Scalars['Float']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateReservationMutation = { __typename?: 'Mutation', createReservation: { __typename?: 'reservation', id: number, updatedAt: Date } };

export type UpdateReservationByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  dateDeparture?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  numPeople?: InputMaybe<Scalars['Int']['input']>;
  numTeam?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  managerId?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  doneReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  doneInvoice?: InputMaybe<Scalars['Boolean']['input']>;
  isCard?: InputMaybe<Scalars['Boolean']['input']>;
  noteCheckout?: InputMaybe<Scalars['String']['input']>;
  priceCustom?: InputMaybe<Scalars['Float']['input']>;
  costCustom?: InputMaybe<Scalars['Float']['input']>;
  priceAddon?: InputMaybe<Scalars['Float']['input']>;
  costAddon?: InputMaybe<Scalars['Float']['input']>;
  priceAddonMemo?: InputMaybe<Scalars['String']['input']>;
  priceAddonSub?: InputMaybe<Scalars['Float']['input']>;
  costAddonSub?: InputMaybe<Scalars['Float']['input']>;
  priceAddonSubMemo?: InputMaybe<Scalars['String']['input']>;
  daysDay?: InputMaybe<Scalars['Int']['input']>;
  daysNight?: InputMaybe<Scalars['Int']['input']>;
  smsReservation?: InputMaybe<Scalars['String']['input']>;
  smsReservationSub?: InputMaybe<Scalars['String']['input']>;
  smsConfirmation?: InputMaybe<Scalars['String']['input']>;
  smsCheckout?: InputMaybe<Scalars['String']['input']>;
  isTransactionEditable?: InputMaybe<Scalars['Boolean']['input']>;
  transactionDeposit?: InputMaybe<Scalars['Float']['input']>;
  transactionWithdrawal?: InputMaybe<Scalars['Float']['input']>;
  transactionRemainder?: InputMaybe<Scalars['Float']['input']>;
  transactionUnpaid?: InputMaybe<Scalars['Float']['input']>;
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateReservationByIdMutation = { __typename?: 'Mutation', updateReservationById: { __typename?: 'reservation', id: number, updatedAt: Date } };

export type DeleteReservationByIdMutationVariables = Exact<{
  reservationId: Scalars['ID']['input'];
}>;


export type DeleteReservationByIdMutation = { __typename?: 'Mutation', deleteReservationById: { __typename?: 'reservation', id: number } };

export type ReservationByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReservationByIdQuery = { __typename?: 'Query', reservationById: { __typename?: 'reservation', id: number, createdAt: Date, dateDeparture?: Date | null, memo?: string | null, numPeople?: number | null, numTeam?: number | null, updatedAt: Date, status?: string | null, doneReceipt?: boolean | null, doneInvoice?: boolean | null, isCard?: boolean | null, noteCheckout?: string | null, priceCustom?: number | null, costCustom?: number | null, priceAddon?: number | null, costAddon?: number | null, priceAddonMemo?: string | null, priceAddonSub?: number | null, costAddonSub?: number | null, priceAddonSubMemo?: string | null, daysDay?: number | null, daysNight?: number | null, smsReservation?: string | null, smsReservationSub?: string | null, smsConfirmation?: string | null, smsCheckout?: string | null, isTransactionEditable?: boolean | null, transactionDeposit?: number | null, transactionWithdrawal?: number | null, transactionRemainder?: number | null, transactionUnpaid?: number | null, isWeb?: boolean | null, customer?: { __typename?: 'customer', id: number, name: string, phone?: string | null, isVillain?: boolean | null } | null, manager?: { __typename?: 'manager', id: number, name: string } | null, product?: { __typename?: 'product', id: number, name?: string | null, price?: number | null, cost?: number | null, isBlock?: boolean | null, type?: string | null } | null } };

export type FileListByReservationIdQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FileListByReservationIdQueryQuery = { __typename?: 'Query', fileListByReservationId: { __typename?: 'QueryFileListByReservationIdConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryFileListByReservationIdConnectionEdge', cursor: string, node: { __typename?: 'reservation_file', id: number, reservationId: number, name?: string | null, url?: string | null } } | null> } };

export type CreateReservationFileQueryMutationVariables = Exact<{
  reservationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;


export type CreateReservationFileQueryMutation = { __typename?: 'Mutation', createReservationFile: { __typename?: 'reservation_file', id: number, reservationId: number, name?: string | null, url?: string | null } };

export type DeleteReservationFileQueryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteReservationFileQueryMutation = { __typename?: 'Mutation', deleteReservationFile: { __typename?: 'reservation_file', id: number } };

export type ReservationProductListQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReservationProductListQueryQuery = { __typename?: 'Query', reservationProductList: { __typename?: 'QueryReservationProductListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryReservationProductListConnectionEdge', cursor: string, node: { __typename?: 'reservation_product', id: number, product: { __typename?: 'product', id: number, name?: string | null, dateDeparture?: Date | null, price?: number | null, cost?: number | null } } } | null> } };

export type ReservationProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReservationProductByIdQuery = { __typename?: 'Query', reservationProductById: { __typename?: 'reservation_product', id: number, faxType?: string | null, row01?: string | null, row02?: string | null, row03?: string | null, row04?: string | null, row05?: string | null, row06?: string | null, row07?: string | null, row08?: string | null, row09?: string | null, row10?: string | null, row11?: string | null } };

export type ProductListByReservationIdQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductListByReservationIdQueryQuery = { __typename?: 'Query', productListByReservationId: { __typename?: 'QueryProductListByReservationIdConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryProductListByReservationIdConnectionEdge', cursor: string, node: { __typename?: 'reservation_product', id: number, faxType?: string | null, row01?: string | null, row02?: string | null, row03?: string | null, row04?: string | null, row05?: string | null, row06?: string | null, row07?: string | null, row08?: string | null, row09?: string | null, row10?: string | null, row11?: string | null, reservationId: number, product: { __typename?: 'product', id: number, name?: string | null, price?: number | null, cost?: number | null } } } | null> } };

export type CreateReservationProductMutationVariables = Exact<{
  reservationId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CreateReservationProductMutation = { __typename?: 'Mutation', createReservationProduct: { __typename?: 'reservation_product', id: number, product: { __typename?: 'product', id: number, name?: string | null, dateDeparture?: Date | null, price?: number | null, cost?: number | null } } };

export type UpdateReservationProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  faxType?: InputMaybe<Scalars['String']['input']>;
  row01?: InputMaybe<Scalars['String']['input']>;
  row02?: InputMaybe<Scalars['String']['input']>;
  row03?: InputMaybe<Scalars['String']['input']>;
  row04?: InputMaybe<Scalars['String']['input']>;
  row05?: InputMaybe<Scalars['String']['input']>;
  row06?: InputMaybe<Scalars['String']['input']>;
  row07?: InputMaybe<Scalars['String']['input']>;
  row08?: InputMaybe<Scalars['String']['input']>;
  row09?: InputMaybe<Scalars['String']['input']>;
  row10?: InputMaybe<Scalars['String']['input']>;
  row11?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateReservationProductMutation = { __typename?: 'Mutation', updateReservationProduct: { __typename?: 'reservation_product', id: number } };

export type DeleteReservationProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteReservationProductMutation = { __typename?: 'Mutation', deleteReservationProduct: { __typename?: 'reservation_product', id: number } };

export type SavingsAccountListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SavingsAccountListInfinityQueryQuery = { __typename?: 'Query', savingsAccountList: { __typename?: 'QuerySavingsAccountListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QuerySavingsAccountListConnectionEdge', cursor: string, node: { __typename?: 'savings_account', id: number, name?: string | null, amount?: number | null, type: string, memo?: string | null, reservationId?: number | null, balance?: number | null, createdAt: Date, reservation?: { __typename?: 'reservation', id: number, createdAt: Date, numPeople?: number | null, numTeam?: number | null, updatedAt: Date, dateDeparture?: Date | null, customer?: { __typename?: 'customer', id: number, name: string, phone?: string | null } | null, product?: { __typename?: 'product', id: number, name?: string | null, isBlock?: boolean | null } | null } | null } } | null> } };

export type UpdateSavingsAccountByIdQueryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateSavingsAccountByIdQueryMutation = { __typename?: 'Mutation', updateSavingsAccountById?: { __typename?: 'savings_account', id: number } | null };

export type TransactionListInfinityQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type TransactionListInfinityQueryQuery = { __typename?: 'Query', transactionList: { __typename?: 'QueryTransactionListConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'QueryTransactionListConnectionEdge', cursor: string, node: { __typename?: 'transaction', id: number, createdAt: Date, reservationId?: number | null, type: string, method: string, amount: number, account?: string | null, memo?: string | null, savingsAccountId?: number | null } } | null> } };

export type CreateTransactionMutationVariables = Exact<{
  account?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  savingsAccountId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', CreateTransaction: { __typename?: 'transaction', id: number } };

export type DeleteTransactionByIdMutationVariables = Exact<{
  transactionId: Scalars['ID']['input'];
}>;


export type DeleteTransactionByIdMutation = { __typename?: 'Mutation', deleteTransactionById: { __typename?: 'transaction', id: number } };


export const BlockListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blockListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockStatusList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}},{"kind":"Argument","name":{"kind":"Name","value":"teeOff"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockStatusList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockStatusList"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"teeOff"}},{"kind":"Field","name":{"kind":"Name","value":"blockStatus"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlockListInfinityQueryQuery, BlockListInfinityQueryQueryVariables>;
export const CreateBlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commissionCompany"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBlock"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}},{"kind":"Argument","name":{"kind":"Name","value":"teeOff"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"teeOff"}},{"kind":"Field","name":{"kind":"Name","value":"blockStatus"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}}]}}]}}]} as unknown as DocumentNode<CreateBlockMutation, CreateBlockMutationVariables>;
export const UpdateBlockByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBlockById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"commissionCompany"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBlock"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}},{"kind":"Argument","name":{"kind":"Name","value":"teeOff"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teeOff"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"blockName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"teeOff"}},{"kind":"Field","name":{"kind":"Name","value":"blockStatus"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}}]}}]}}]} as unknown as DocumentNode<UpdateBlockByIdMutation, UpdateBlockByIdMutationVariables>;
export const DeleteBlockByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBlockById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteBlockByIdMutation, DeleteBlockByIdMutationVariables>;
export const CourseListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"courseListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"partnerName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"category1"}},{"kind":"Field","name":{"kind":"Name","value":"category2"}},{"kind":"Field","name":{"kind":"Name","value":"category3"}},{"kind":"Field","name":{"kind":"Name","value":"priceCheck"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"reservationCheck"}},{"kind":"Field","name":{"kind":"Name","value":"confirmCheck"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseListInfinityQueryQuery, CourseListInfinityQueryQueryVariables>;
export const CreateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partnerName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"partnerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partnerName"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCourseById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partnerName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contact"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCourseById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"partnerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partnerName"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"contact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contact"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"confirmCheck"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmCheck"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateCourseByIdMutation, UpdateCourseByIdMutationVariables>;
export const DeleteCourseByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCourseById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCourseById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCourseByIdMutation, DeleteCourseByIdMutationVariables>;
export const CustomerListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"isVillain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CustomerListInfinityQueryQuery, CustomerListInfinityQueryQueryVariables>;
export const CustomerAllListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CustomerAllListQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"customerList"},"name":{"kind":"Name","value":"customerList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"isVillain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CustomerAllListQueryQuery, CustomerAllListQueryQueryVariables>;
export const CustomerByIdWebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerByIdWeb"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerByIdWeb"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CustomerByIdWebQuery, CustomerByIdWebQueryVariables>;
export const CreateCustomerByWebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomerByWeb"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isVillain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerByWeb"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"isVillain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isVillain"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerByWebMutation, CreateCustomerByWebMutationVariables>;
export const UpdateCustomerByIdWebDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomerByIdWeb"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isVillain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UpdateCustomerByIdWeb"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"isVillain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isVillain"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerByIdWebMutation, UpdateCustomerByIdWebMutationVariables>;
export const DeleteCustomerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCustomerById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerByIdMutation, DeleteCustomerByIdMutationVariables>;
export const CreateFaxHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFaxHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFaxHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reservationProductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationProductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateFaxHistoryMutation, CreateFaxHistoryMutationVariables>;
export const ManagerListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"managerListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"managerList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ManagerListInfinityQueryQuery, ManagerListInfinityQueryQueryVariables>;
export const CreateManagerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createManager"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createManager"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateManagerMutation, CreateManagerMutationVariables>;
export const UpdateManagerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateManagerById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateManagerById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateManagerByIdMutation, UpdateManagerByIdMutationVariables>;
export const MessageHistoryListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MessageHistoryListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageHistoryList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sendDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MessageHistoryListInfinityQueryQuery, MessageHistoryListInfinityQueryQueryVariables>;
export const ProductListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isSortType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"isActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoNotice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoManager"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoEtc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}}},{"kind":"Argument","name":{"kind":"Name","value":"isSortType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isSortType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isWeb"}},{"kind":"Field","name":{"kind":"Name","value":"isBest"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category1"}},{"kind":"Field","name":{"kind":"Name","value":"category2"}},{"kind":"Field","name":{"kind":"Name","value":"category3"}},{"kind":"Field","name":{"kind":"Name","value":"memoNotice"}},{"kind":"Field","name":{"kind":"Name","value":"memoManager"}},{"kind":"Field","name":{"kind":"Name","value":"memoEtc"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"inclusives"}},{"kind":"Field","name":{"kind":"Name","value":"exclusives"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"schedulePc"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"notice"}},{"kind":"Field","name":{"kind":"Name","value":"caution"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleTablePc"}},{"kind":"Field","name":{"kind":"Name","value":"courseAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductListInfinityQueryQuery, ProductListInfinityQueryQueryVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inclusives"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exclusives"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schedulePc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"benefit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caution"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleTablePc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cancellationPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commissionCompany"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBlock"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"isActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoNotice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoManager"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoEtc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"inclusives"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inclusives"}}},{"kind":"Argument","name":{"kind":"Name","value":"exclusives"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exclusives"}}},{"kind":"Argument","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"Argument","name":{"kind":"Name","value":"schedulePc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schedulePc"}}},{"kind":"Argument","name":{"kind":"Name","value":"benefit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"benefit"}}},{"kind":"Argument","name":{"kind":"Name","value":"notice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notice"}}},{"kind":"Argument","name":{"kind":"Name","value":"caution"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caution"}}},{"kind":"Argument","name":{"kind":"Name","value":"scheduleTablePc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleTablePc"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"cancellationPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cancellationPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"category1"}},{"kind":"Field","name":{"kind":"Name","value":"category2"}},{"kind":"Field","name":{"kind":"Name","value":"category3"}},{"kind":"Field","name":{"kind":"Name","value":"memoNotice"}},{"kind":"Field","name":{"kind":"Name","value":"memoManager"}},{"kind":"Field","name":{"kind":"Name","value":"memoEtc"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"inclusives"}},{"kind":"Field","name":{"kind":"Name","value":"exclusives"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"schedulePc"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"notice"}},{"kind":"Field","name":{"kind":"Name","value":"caution"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleTablePc"}},{"kind":"Field","name":{"kind":"Name","value":"courseAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fax"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category3"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inclusives"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"exclusives"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"summary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schedulePc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"benefit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caution"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleTablePc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cancellationPolicy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"commissionCompany"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commissionCompany"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBlock"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBlock"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"fax"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fax"}}},{"kind":"Argument","name":{"kind":"Name","value":"isActive"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isActive"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBest"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"Argument","name":{"kind":"Name","value":"category1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category1"}}},{"kind":"Argument","name":{"kind":"Name","value":"category2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category2"}}},{"kind":"Argument","name":{"kind":"Name","value":"category3"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category3"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoNotice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoNotice"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoManager"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoManager"}}},{"kind":"Argument","name":{"kind":"Name","value":"memoEtc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memoEtc"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"inclusives"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inclusives"}}},{"kind":"Argument","name":{"kind":"Name","value":"exclusives"},"value":{"kind":"Variable","name":{"kind":"Name","value":"exclusives"}}},{"kind":"Argument","name":{"kind":"Name","value":"summary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"summary"}}},{"kind":"Argument","name":{"kind":"Name","value":"schedulePc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schedulePc"}}},{"kind":"Argument","name":{"kind":"Name","value":"benefit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"benefit"}}},{"kind":"Argument","name":{"kind":"Name","value":"notice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notice"}}},{"kind":"Argument","name":{"kind":"Name","value":"caution"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caution"}}},{"kind":"Argument","name":{"kind":"Name","value":"scheduleTablePc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleTablePc"}}},{"kind":"Argument","name":{"kind":"Name","value":"courseAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"cancellationPolicy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cancellationPolicy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isWeb"}},{"kind":"Field","name":{"kind":"Name","value":"isBest"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"category1"}},{"kind":"Field","name":{"kind":"Name","value":"category2"}},{"kind":"Field","name":{"kind":"Name","value":"category3"}},{"kind":"Field","name":{"kind":"Name","value":"memoNotice"}},{"kind":"Field","name":{"kind":"Name","value":"memoManager"}},{"kind":"Field","name":{"kind":"Name","value":"memoEtc"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"inclusives"}},{"kind":"Field","name":{"kind":"Name","value":"exclusives"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"schedulePc"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"notice"}},{"kind":"Field","name":{"kind":"Name","value":"caution"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleTablePc"}},{"kind":"Field","name":{"kind":"Name","value":"courseAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"}}]}}]}}]} as unknown as DocumentNode<UpdateProductByIdMutation, UpdateProductByIdMutationVariables>;
export const DeleteProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProductByIdMutation, DeleteProductByIdMutationVariables>;
export const ProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commissionCompany"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"managerId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isWeb"}},{"kind":"Field","name":{"kind":"Name","value":"isBest"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category1"}},{"kind":"Field","name":{"kind":"Name","value":"category2"}},{"kind":"Field","name":{"kind":"Name","value":"category3"}},{"kind":"Field","name":{"kind":"Name","value":"memoNotice"}},{"kind":"Field","name":{"kind":"Name","value":"memoManager"}},{"kind":"Field","name":{"kind":"Name","value":"memoEtc"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"inclusives"}},{"kind":"Field","name":{"kind":"Name","value":"exclusives"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"schedulePc"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"notice"}},{"kind":"Field","name":{"kind":"Name","value":"caution"}},{"kind":"Field","name":{"kind":"Name","value":"scheduleTablePc"}},{"kind":"Field","name":{"kind":"Name","value":"courseAddress"}},{"kind":"Field","name":{"kind":"Name","value":"cancellationPolicy"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailImage"}}]}}]}}]} as unknown as DocumentNode<ProductByIdQuery, ProductByIdQueryVariables>;
export const ImageListByProductIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ImageListByProductIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageListByProductId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ImageListByProductIdQueryQuery, ImageListByProductIdQueryQueryVariables>;
export const CreateProductImageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductImageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateProductImageQueryMutation, CreateProductImageQueryMutationVariables>;
export const DeleteProductImageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProductImageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProductImageQueryMutation, DeleteProductImageQueryMutationVariables>;
export const ProductPriceListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productPriceListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productPriceList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductPriceListInfinityQueryQuery, ProductPriceListInfinityQueryQueryVariables>;
export const CreateProductPriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createProductPrice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProductPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}}]}}]} as unknown as DocumentNode<CreateProductPriceMutation, CreateProductPriceMutationVariables>;
export const UpdateProductPriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProductPrice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cost"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}}]}}]}}]} as unknown as DocumentNode<UpdateProductPriceMutation, UpdateProductPriceMutationVariables>;
export const DeleteProductPriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProductPrice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProductPrice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteProductPriceMutation, DeleteProductPriceMutationVariables>;
export const RequestListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"requestListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerPhone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rowStyle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateArrival"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerName"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerPhone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerPhone"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}}},{"kind":"Argument","name":{"kind":"Name","value":"golfCourse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}}},{"kind":"Argument","name":{"kind":"Name","value":"rowStyle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rowStyle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateArrival"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"requestContent"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isReservation"}},{"kind":"Field","name":{"kind":"Name","value":"isCanceled"}},{"kind":"Field","name":{"kind":"Name","value":"golfCourse"}},{"kind":"Field","name":{"kind":"Name","value":"rowStyle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RequestListInfinityQueryQuery, RequestListInfinityQueryQueryVariables>;
export const CreateRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isReservation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCanceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateArrival"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"numPeople"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}}},{"kind":"Argument","name":{"kind":"Name","value":"numTeam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isReservation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isReservation"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCanceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCanceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"golfCourse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateArrival"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"requestContent"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"isReservation"}},{"kind":"Field","name":{"kind":"Name","value":"isCanceled"}},{"kind":"Field","name":{"kind":"Name","value":"golfCourse"}}]}}]}}]} as unknown as DocumentNode<CreateRequestMutation, CreateRequestMutationVariables>;
export const UpdateRequestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRequestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isReservation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCanceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rowStyle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRequestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateArrival"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateArrival"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"numPeople"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}}},{"kind":"Argument","name":{"kind":"Name","value":"numTeam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}}},{"kind":"Argument","name":{"kind":"Name","value":"requestContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestContent"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isReservation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isReservation"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCanceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCanceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"golfCourse"},"value":{"kind":"Variable","name":{"kind":"Name","value":"golfCourse"}}},{"kind":"Argument","name":{"kind":"Name","value":"rowStyle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rowStyle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateArrival"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"requestContent"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"isReservation"}},{"kind":"Field","name":{"kind":"Name","value":"isCanceled"}},{"kind":"Field","name":{"kind":"Name","value":"golfCourse"}},{"kind":"Field","name":{"kind":"Name","value":"rowStyle"}}]}}]}}]} as unknown as DocumentNode<UpdateRequestByIdMutation, UpdateRequestByIdMutationVariables>;
export const RequestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"requestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateArrival"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"requestContent"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isReservation"}},{"kind":"Field","name":{"kind":"Name","value":"isCanceled"}},{"kind":"Field","name":{"kind":"Name","value":"golfCourse"}},{"kind":"Field","name":{"kind":"Name","value":"rowStyle"}}]}}]}}]} as unknown as DocumentNode<RequestByIdQuery, RequestByIdQueryVariables>;
export const DeleteRequestByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequestByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRequestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteRequestByIdQueryMutation, DeleteRequestByIdQueryMutationVariables>;
export const ReservationListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"reservationListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerPhone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationStatusList"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDepartureStartAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDepartureEndAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAtStartAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAtEndAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortColumn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneReceipt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneInvoice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCard"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerName"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerPhone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerPhone"}}},{"kind":"Argument","name":{"kind":"Name","value":"productName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productName"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationStatusList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationStatusList"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDepartureStartAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDepartureStartAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDepartureEndAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDepartureEndAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdAtStartAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAtStartAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"createdAtEndAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAtEndAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortColumn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortColumn"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortType"}}},{"kind":"Argument","name":{"kind":"Name","value":"doneReceipt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneReceipt"}}},{"kind":"Argument","name":{"kind":"Name","value":"doneInvoice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneInvoice"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCard"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCard"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"isVillain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"doneReceipt"}},{"kind":"Field","name":{"kind":"Name","value":"doneInvoice"}},{"kind":"Field","name":{"kind":"Name","value":"isCard"}},{"kind":"Field","name":{"kind":"Name","value":"noteCheckout"}},{"kind":"Field","name":{"kind":"Name","value":"priceCustom"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddon"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddonSub"}},{"kind":"Field","name":{"kind":"Name","value":"costAddon"}},{"kind":"Field","name":{"kind":"Name","value":"costAddonSub"}},{"kind":"Field","name":{"kind":"Name","value":"costCustom"}},{"kind":"Field","name":{"kind":"Name","value":"isWeb"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ReservationListInfinityQueryQuery, ReservationListInfinityQueryQueryVariables>;
export const CreateReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteCheckout"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceCustom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costCustom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costAddon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonMemo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSub"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costAddonSub"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSubMemo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daysDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daysNight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsReservation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsCheckout"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isTransactionEditable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionDeposit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionWithdrawal"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionRemainder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionUnpaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"numPeople"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}}},{"kind":"Argument","name":{"kind":"Name","value":"numTeam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"noteCheckout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteCheckout"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceCustom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceCustom"}}},{"kind":"Argument","name":{"kind":"Name","value":"costCustom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costCustom"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddon"}}},{"kind":"Argument","name":{"kind":"Name","value":"costAddon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costAddon"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonMemo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonMemo"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonSub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSub"}}},{"kind":"Argument","name":{"kind":"Name","value":"costAddonSub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costAddonSub"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonSubMemo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSubMemo"}}},{"kind":"Argument","name":{"kind":"Name","value":"daysDay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daysDay"}}},{"kind":"Argument","name":{"kind":"Name","value":"daysNight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daysNight"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsReservation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsReservation"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsCheckout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsCheckout"}}},{"kind":"Argument","name":{"kind":"Name","value":"isTransactionEditable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isTransactionEditable"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionDeposit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionDeposit"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionWithdrawal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionWithdrawal"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionRemainder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionRemainder"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionUnpaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionUnpaid"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateReservationMutation, CreateReservationMutationVariables>;
export const UpdateReservationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateReservationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneReceipt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doneInvoice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCard"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteCheckout"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceCustom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costCustom"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costAddon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonMemo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSub"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costAddonSub"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSubMemo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daysDay"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daysNight"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsReservation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsReservationSub"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsConfirmation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"smsCheckout"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isTransactionEditable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionDeposit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionWithdrawal"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionRemainder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionUnpaid"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReservationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateDeparture"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateDeparture"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"numPeople"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numPeople"}}},{"kind":"Argument","name":{"kind":"Name","value":"numTeam"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numTeam"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"managerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"managerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"doneReceipt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneReceipt"}}},{"kind":"Argument","name":{"kind":"Name","value":"doneInvoice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doneInvoice"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCard"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCard"}}},{"kind":"Argument","name":{"kind":"Name","value":"noteCheckout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteCheckout"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceCustom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceCustom"}}},{"kind":"Argument","name":{"kind":"Name","value":"costCustom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costCustom"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddon"}}},{"kind":"Argument","name":{"kind":"Name","value":"costAddon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costAddon"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonMemo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonMemo"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonSub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSub"}}},{"kind":"Argument","name":{"kind":"Name","value":"costAddonSub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costAddonSub"}}},{"kind":"Argument","name":{"kind":"Name","value":"priceAddonSubMemo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceAddonSubMemo"}}},{"kind":"Argument","name":{"kind":"Name","value":"daysDay"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daysDay"}}},{"kind":"Argument","name":{"kind":"Name","value":"daysNight"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daysNight"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsReservation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsReservation"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsReservationSub"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsReservationSub"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsConfirmation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsConfirmation"}}},{"kind":"Argument","name":{"kind":"Name","value":"smsCheckout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"smsCheckout"}}},{"kind":"Argument","name":{"kind":"Name","value":"isTransactionEditable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isTransactionEditable"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionDeposit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionDeposit"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionWithdrawal"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionWithdrawal"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionRemainder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionRemainder"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionUnpaid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionUnpaid"}}},{"kind":"Argument","name":{"kind":"Name","value":"isWeb"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isWeb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateReservationByIdMutation, UpdateReservationByIdMutationVariables>;
export const DeleteReservationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReservationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReservationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteReservationByIdMutation, DeleteReservationByIdMutationVariables>;
export const ReservationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"reservationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"isVillain"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"doneReceipt"}},{"kind":"Field","name":{"kind":"Name","value":"doneInvoice"}},{"kind":"Field","name":{"kind":"Name","value":"isCard"}},{"kind":"Field","name":{"kind":"Name","value":"noteCheckout"}},{"kind":"Field","name":{"kind":"Name","value":"priceCustom"}},{"kind":"Field","name":{"kind":"Name","value":"costCustom"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddon"}},{"kind":"Field","name":{"kind":"Name","value":"costAddon"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddonMemo"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddonSub"}},{"kind":"Field","name":{"kind":"Name","value":"costAddonSub"}},{"kind":"Field","name":{"kind":"Name","value":"priceAddonSubMemo"}},{"kind":"Field","name":{"kind":"Name","value":"daysDay"}},{"kind":"Field","name":{"kind":"Name","value":"daysNight"}},{"kind":"Field","name":{"kind":"Name","value":"smsReservation"}},{"kind":"Field","name":{"kind":"Name","value":"smsReservationSub"}},{"kind":"Field","name":{"kind":"Name","value":"smsConfirmation"}},{"kind":"Field","name":{"kind":"Name","value":"smsCheckout"}},{"kind":"Field","name":{"kind":"Name","value":"isTransactionEditable"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDeposit"}},{"kind":"Field","name":{"kind":"Name","value":"transactionWithdrawal"}},{"kind":"Field","name":{"kind":"Name","value":"transactionRemainder"}},{"kind":"Field","name":{"kind":"Name","value":"transactionUnpaid"}},{"kind":"Field","name":{"kind":"Name","value":"isWeb"}}]}}]}}]} as unknown as DocumentNode<ReservationByIdQuery, ReservationByIdQueryVariables>;
export const FileListByReservationIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FileListByReservationIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileListByReservationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FileListByReservationIdQueryQuery, FileListByReservationIdQueryQueryVariables>;
export const CreateReservationFileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReservationFileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReservationFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateReservationFileQueryMutation, CreateReservationFileQueryMutationVariables>;
export const DeleteReservationFileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReservationFileQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReservationFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteReservationFileQueryMutation, DeleteReservationFileQueryMutationVariables>;
export const ReservationProductListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"reservationProductListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationProductList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ReservationProductListQueryQuery, ReservationProductListQueryQueryVariables>;
export const ReservationProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReservationProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"faxType"}},{"kind":"Field","name":{"kind":"Name","value":"row01"}},{"kind":"Field","name":{"kind":"Name","value":"row02"}},{"kind":"Field","name":{"kind":"Name","value":"row03"}},{"kind":"Field","name":{"kind":"Name","value":"row04"}},{"kind":"Field","name":{"kind":"Name","value":"row05"}},{"kind":"Field","name":{"kind":"Name","value":"row06"}},{"kind":"Field","name":{"kind":"Name","value":"row07"}},{"kind":"Field","name":{"kind":"Name","value":"row08"}},{"kind":"Field","name":{"kind":"Name","value":"row09"}},{"kind":"Field","name":{"kind":"Name","value":"row10"}},{"kind":"Field","name":{"kind":"Name","value":"row11"}}]}}]}}]} as unknown as DocumentNode<ReservationProductByIdQuery, ReservationProductByIdQueryVariables>;
export const ProductListByReservationIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductListByReservationIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productListByReservationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"faxType"}},{"kind":"Field","name":{"kind":"Name","value":"row01"}},{"kind":"Field","name":{"kind":"Name","value":"row02"}},{"kind":"Field","name":{"kind":"Name","value":"row03"}},{"kind":"Field","name":{"kind":"Name","value":"row04"}},{"kind":"Field","name":{"kind":"Name","value":"row05"}},{"kind":"Field","name":{"kind":"Name","value":"row06"}},{"kind":"Field","name":{"kind":"Name","value":"row07"}},{"kind":"Field","name":{"kind":"Name","value":"row08"}},{"kind":"Field","name":{"kind":"Name","value":"row09"}},{"kind":"Field","name":{"kind":"Name","value":"row10"}},{"kind":"Field","name":{"kind":"Name","value":"row11"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductListByReservationIdQueryQuery, ProductListByReservationIdQueryQueryVariables>;
export const CreateReservationProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReservationProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReservationProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}}]}}]}}]}}]} as unknown as DocumentNode<CreateReservationProductMutation, CreateReservationProductMutationVariables>;
export const UpdateReservationProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateReservationProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"faxType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row01"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row02"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row03"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row04"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row05"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row06"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row07"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row08"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row09"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row10"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"row11"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReservationProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"faxType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"faxType"}}},{"kind":"Argument","name":{"kind":"Name","value":"row01"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row01"}}},{"kind":"Argument","name":{"kind":"Name","value":"row02"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row02"}}},{"kind":"Argument","name":{"kind":"Name","value":"row03"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row03"}}},{"kind":"Argument","name":{"kind":"Name","value":"row04"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row04"}}},{"kind":"Argument","name":{"kind":"Name","value":"row05"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row05"}}},{"kind":"Argument","name":{"kind":"Name","value":"row06"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row06"}}},{"kind":"Argument","name":{"kind":"Name","value":"row07"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row07"}}},{"kind":"Argument","name":{"kind":"Name","value":"row08"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row08"}}},{"kind":"Argument","name":{"kind":"Name","value":"row09"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row09"}}},{"kind":"Argument","name":{"kind":"Name","value":"row10"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row10"}}},{"kind":"Argument","name":{"kind":"Name","value":"row11"},"value":{"kind":"Variable","name":{"kind":"Name","value":"row11"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateReservationProductMutation, UpdateReservationProductMutationVariables>;
export const DeleteReservationProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteReservationProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReservationProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteReservationProductMutation, DeleteReservationProductMutationVariables>;
export const SavingsAccountListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"savingsAccountListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savingsAccountList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reservation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"numPeople"}},{"kind":"Field","name":{"kind":"Name","value":"numTeam"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dateDeparture"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isBlock"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SavingsAccountListInfinityQueryQuery, SavingsAccountListInfinityQueryQueryVariables>;
export const UpdateSavingsAccountByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSavingsAccountByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSavingsAccountById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateSavingsAccountByIdQueryMutation, UpdateSavingsAccountByIdQueryMutationVariables>;
export const TransactionListInfinityQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"transactionListInfinityQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reservationId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"savingsAccountId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TransactionListInfinityQueryQuery, TransactionListInfinityQueryQueryVariables>;
export const CreateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"method"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"savingsAccountId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CreateTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"account"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"Argument","name":{"kind":"Name","value":"memo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memo"}}},{"kind":"Argument","name":{"kind":"Name","value":"method"},"value":{"kind":"Variable","name":{"kind":"Name","value":"method"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"Argument","name":{"kind":"Name","value":"savingsAccountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"savingsAccountId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const DeleteTransactionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTransactionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTransactionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTransactionByIdMutation, DeleteTransactionByIdMutationVariables>;
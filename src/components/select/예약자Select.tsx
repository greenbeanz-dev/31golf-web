import { Customer } from "@/gql/__generated__/graphql";
import useCustomerInfiniteQuery, {
  useCustomerInfiniteQueryBody,
} from "@/gql/query/customer/useCustomerInfiniteQuery";
import { SkeletonBoundary } from "@component/error/SkeletonBoundary";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
import { MdArrowDropDown, MdSearch } from "react-icons/md";
import { getFormatedPhoneNumber } from "../../utils/format/getFormatedPhoneNumber";

interface 예약자SelectProps {
  customer?: Customer;
  onSelect: (담당자: Customer) => void;
  isSimple?: boolean;
}

const CustomerTableSample = () => (
  <Table
    aria-label="예약자 검색 테이블 샘플"
    className="w-full mt-2 max-h-[30vh]"
  >
    <TableHeader>
      <TableColumn key="id">회원번호</TableColumn>
      <TableColumn key="name">이름</TableColumn>
      <TableColumn key="phone">전화번호</TableColumn>
    </TableHeader>
    <TableBody>
      <TableRow key="1">
        <TableCell>1001</TableCell>
        <TableCell>홍길동</TableCell>
        <TableCell>01012345678</TableCell>
      </TableRow>
      <TableRow key="2">
        <TableCell>1002</TableCell>
        <TableCell>김삼일</TableCell>
        <TableCell>01098765432</TableCell>
      </TableRow>
      <TableRow key="3">
        <TableCell>1003</TableCell>
        <TableCell>이골프</TableCell>
        <TableCell>01011112222</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const 예약자Select = ({
  onSelect,
  customer,
  isSimple = false,
}: 예약자SelectProps) => {
  const { isOpen, onClose, onOpenChange } = useDisclosure();
  useEffect(() => {
    useCustomerInfiniteQueryBody.getState().reset();
  }, []);

  void isSimple;

  const handleSelect = (nextCustomer: Customer) => {
    onSelect(nextCustomer);
    onClose();
  };
  return (
    <div className="flex items-center w-full gap-2">
      <Popover placement={"bottom-start"} isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button variant="flat" className="w-full" onPress={onOpenChange}>
            {customer
              ? `${customer.name} | ${
                  getFormatedPhoneNumber(customer.phone) || ""
                }`
              : ""}
            <MdArrowDropDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full py-4 min-w-[20rem]">
          <Input
            autoFocus
            className="w-full"
            classNames={{
              input: ["!ring-transparent"],
            }}
            defaultValue={customer?.name}
            onValueChange={(e) => {
              const numberOnly = e.replace(/[^0-9]/g, "");
              if (numberOnly.length > 0) {
                useCustomerInfiniteQueryBody.getState().changePhone(numberOnly);
              } else {
                useCustomerInfiniteQueryBody.getState().changeName(e);
              }
            }}
            labelPlacement="outside"
            startContent={<MdSearch />}
          />
          <SkeletonBoundary
            label="예약자를 불러오는 중"
            id="customer-select-table"
            skeleton={<CustomerTableSample />}
          >
            <PopoverContentBody onSelect={handleSelect} customer={customer} />
          </SkeletonBoundary>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default 예약자Select;

const PopoverContentBody = ({
  onSelect,
  customer,
}: {
  onSelect: 예약자SelectProps["onSelect"];
  customer: 예약자SelectProps["customer"];
}) => {
  const { data } = useCustomerInfiniteQuery();

  useEffect(() => {
    if (customer?.name) {
      useCustomerInfiniteQueryBody.getState().reset();
      useCustomerInfiniteQueryBody.getState().changeName(customer.name);
    }
  }, []);

  const list = data?.pages
    .map((page) => page.customerList.edges.map((item) => item?.node))
    .flat();

  return (
    <Table
      aria-label="예약자 검색 테이블"
      className="w-full mt-2 max-h-[30vh]"
      selectionMode="single"
      defaultSelectedKeys={customer ? [customer.id] : undefined}
    >
      <TableHeader>
        <TableColumn key="id">회원번호</TableColumn>
        <TableColumn key="name">이름</TableColumn>
        <TableColumn key="phone">전화번호</TableColumn>
      </TableHeader>
      <TableBody items={list}>
        {(item) => (
          <TableRow
            className="cursor-pointer"
            key={item?.id}
            onClick={() => {
              if (!item) return;
              onSelect(item);
            }}
          >
            {(columnKey) => {
              return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

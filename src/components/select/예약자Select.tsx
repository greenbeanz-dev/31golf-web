import { Customer } from "@/gql/__generated__/graphql";
import useCustomerInfiniteQuery, {
  useCustomerInfiniteQueryBody,
} from "@/gql/query/customer/useCustomerInfiniteQuery";
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
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MdArrowDropDown, MdSearch } from "react-icons/md";
import { getFormatedPhoneNumber } from "../../utils/format/getFormatedPhoneNumber";

interface 예약자SelectProps {
  customer?: Customer;
  onSelect: (담당자: Customer) => void;
  isSimple?: boolean;
}

const 예약자Select = ({
  onSelect,
  customer,
  isSimple = false,
}: 예약자SelectProps) => {
  const { isOpen, onClose, onOpenChange } = useDisclosure();
  useEffect(() => {
    useCustomerInfiniteQueryBody.getState().reset();
  }, []);

  const handleSelect = (customer: Customer) => {
    onSelect(customer);
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
          <Suspense>
            <PopoverContentBody onSelect={handleSelect} customer={customer} />
          </Suspense>
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

  let list = data?.pages
    .map((page) => page.customerList.edges.map((item) => item?.node))
    .flat();

  return (
    <ErrorBoundary fallback={<>Error</>}>
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
    </ErrorBoundary>
  );
};

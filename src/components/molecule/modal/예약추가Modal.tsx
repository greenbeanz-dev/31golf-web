import gqlClient from "@/gql/gqlClient";
import { CreateReservationQuery } from "@/gql/query/reservation/crud";
import { CreateReservationProductQuery } from "@/gql/query/reservation_product/crud";
import { Input, useDisclosure } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import CommonModal from "./CommonModal";
import { ConfirmModal } from "./ConfirmModal";

const customerName = "최경민";
const title = "남해 사우스케이프오너스 C.C 1박 2일 (36홀)";

const 예약추가Modal = ({
  reservation,
  setNumPeople,
  일정,
  판매가,
  isOpen,
  onClose,
}: {
  판매가: number;
  일정: string;
  reservation: {
    status: string;
    dateDeparture: Date;
    numPeople: number;
    numTeam: number;
    productId: number;
    customerId: number;
    priceCustom: number;
    daysDay: number;
    daysNight: number;
  };
  setNumPeople: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const isMobile = useIsMobile();
  const {
    isOpen: isConfirmOpen,
    onOpen: confirmOpen,
    onClose: confirmClose,
  } = useDisclosure();

  const { mutateAsync: createReservation, isLoading } = useMutation(
    async () => {
      return await gqlClient.request(CreateReservationQuery, {
        status: reservation.status,
        dateDeparture: reservation.dateDeparture
          ? new Date(reservation.dateDeparture).toISOString()
          : undefined,
        numPeople: reservation.numPeople,
        numTeam: reservation.numTeam,
        productId: reservation.productId,
        customerId: reservation.customerId,
        priceCustom: reservation.priceCustom,
        daysDay: reservation.daysDay,
        daysNight: isNaN(reservation.daysNight) ? 0 : 1,
        isWeb: true,
      });
    },
    {
      onSuccess: async (data) => {
        // reservation.productId 가 있는 경우 reservation_product 테이블에도 데이터를 추가 (예약 상세에서 상품정보를 보기 위함)
        if (data) {
          if (!reservation.productId) return;
          await gqlClient.request(CreateReservationProductQuery, {
            productId: reservation.productId.toString(),
            reservationId: data.createReservation.id.toString(),
          });
          confirmOpen();
        }
      },
    }
  );

  return (
    <>
      <CommonModal
        header="예약 확인"
        isOpen={isOpen}
        onClose={onClose}
        confirmAction={{
          action: async () => {
            createReservation();
          },
          label: "예약 접수",
        }}
        closeAction={{
          action: () => {
            onClose();
          },
          isLoading: false,
          label: "취소",
        }}
      >
        <div className="flex flex-col w-full gap-4">
          <form className="w-full">
            <div className="flex flex-col w-full gap-2">
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                value={customerName}
                type="text"
                labelPlacement="outside-left"
                variant="bordered"
                label="예약자명"
              />
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                value={title}
                readOnly
                type="text"
                labelPlacement="outside-left"
                variant="bordered"
                label="상품명"
              />
              <div
                className="flex gap-2"
                style={{
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <Input
                  classNames={{
                    label: "min-w-[7rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  value={reservation.numTeam.toString()}
                  type="number"
                  labelPlacement="outside-left"
                  variant="bordered"
                  label="팀"
                />
                {!isMobile && <div className="w-20" />}

                <Input
                  classNames={{
                    label: "min-w-[7rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  value={reservation.numPeople.toString()}
                  type="number"
                  readOnly
                  labelPlacement="outside-left"
                  variant="bordered"
                  label="인원"
                />
              </div>

              <div className="flex items-center w-full">
                <Input
                  classNames={{
                    label: "min-w-[7rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  value={일정}
                  readOnly
                  labelPlacement="outside-left"
                  variant="bordered"
                  label="일정"
                />
              </div>
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                value={판매가.toLocaleString()}
                readOnly
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="판매가"
                label="판매가"
              />
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                value={(판매가 * reservation.numPeople).toLocaleString()}
                readOnly
                labelPlacement="outside-left"
                variant="bordered"
                label="총 결제 금액"
              />
            </div>
          </form>
        </div>
      </CommonModal>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onOpen={confirmOpen}
        onConfirmClose={confirmClose}
        onClose={onClose}
        message={
          "예약이 접수되었습니다. 담당자가 확인 후 연락드리겠습니다. <br />고객센터:02-561-8008"
        }
      />
    </>
  );
};

export default 예약추가Modal;

import { Customer } from "@/gql/__generated__/graphql";
import gqlClient from "@/gql/gqlClient";
import { CreateRequestQuery } from "@/gql/query/request/crud";
// import RequestInputModel, {
//   RequestInputModelResolver,
// } from "@/gql/query/request/model"; 사용시 Reflect.getMetadata is not a function 에러 발생
import CommonModal from "@component/molecule/modal/CommonModal";
import { Input, useDisclosure } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEventNote } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";

const FloatBtnGroup = () => {
  const isMobile = useIsMobile();

  const BtnGroup = [
    {
      name: "카카오 채팅",
      icon: <SiKakaotalk size={isMobile ? 20 : 32} />,
      type: "kakao",
    },
    {
      name: "접수 문의",
      icon: <MdEventNote size={isMobile ? 20 : 32} />,
      type: "request",
    },
    {
      name: "전화 연결",
      icon: <BiSolidPhoneCall size={isMobile ? 20 : 32} />,
      type: "call",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const ModalContent = ({
    isOpen,
    onOpen,
    onClose,
  }: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }) => {
    const [dateDeparture, setDateDeparture] = useState<Date>();
    const [dateArrival, setDateArrival] = useState<Date>();
    const queryClient = useQueryClient();

    const { mutateAsync: createRequest, isLoading } = useMutation(
      async (requestInputModel: any) => {
        return await gqlClient.request(CreateRequestQuery, {
          ...requestInputModel,
          customerId: 39715, // 임의 테스트
          dateDeparture: dateDeparture?.toISOString(),
          dateArrival: dateArrival?.toISOString(),
        });
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries(["requestList"]);
          onClose();
          reset();
        },
      }
    );

    const {
      register,
      trigger,
      getValues,
      reset,
      formState: { errors },
    } = useForm<Omit<any, "id">>({
      mode: "onSubmit",
      //   resolver: RequestInputModelResolver,
    });

    const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

    const handleCustomerChange = (customer: Customer) => {
      setSelectedCustomer(customer);
    };

    return (
      <CommonModal
        header="접수 추가"
        isOpen={isOpen}
        onClose={onClose}
        confirmAction={{
          action: async () => {
            const isValid = await trigger();
            if (isValid) {
              createRequest(getValues());
              onClose();
            }
          },
          isLoading: isLoading,
          label: "추가",
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
                {...register("schedule")}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="YY-mm-dd ~ YY-mm-dd"
                label="일정"
                isInvalid={!!errors.golfCourse}
                // errorMessage={errors?.golfCourse?.message || ""}
              />

              <div className="flex gap-10">
                <Input
                  classNames={{
                    label: "min-w-[7rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  type="number"
                  {...register("numTeam", {
                    valueAsNumber: true,
                  })}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="팀"
                  label="팀 수"
                  isInvalid={!!errors.numTeam}
                  //   errorMessage={errors?.numTeam?.message || ""}
                />
                <Input
                  classNames={{
                    label: "min-w-[7rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  type="number"
                  {...register("numPeople", {
                    valueAsNumber: true,
                  })}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="명"
                  label="인원 수"
                  isInvalid={!!errors.numPeople}
                  //   errorMessage={errors?.numPeople?.message || ""}
                />
              </div>
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                {...register("golfCourse")}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="골프장"
                label="골프장"
                isInvalid={!!errors.golfCourse}
                // errorMessage={errors?.golfCourse?.message || ""}
              />
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                {...register("dateOperation")}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="신청일"
                label="신청일"
                isInvalid={!!errors.dateOperation}
                // errorMessage={errors?.dateOperation?.message || ""}
              />
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                {...register("requestContent")}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="접수 내용"
                label="접수내용"
                isInvalid={!!errors.requestContent}
                // errorMessage={errors?.requestContent?.message || ""}
              />
              <Input
                classNames={{
                  label: "min-w-[7rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                {...register("memo")}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="메모"
                label="메모"
                isInvalid={!!errors.memo}
                // errorMessage={errors?.memo?.message || ""}
              />
            </div>
          </form>
        </div>
      </CommonModal>
    );
  };

  const handleFloat = (group) => {
    const telNumber = "02-561-8008";
    switch (group.type) {
      case "kakao":
        // new tab
        window.open("https://pf.kakao.com/_GxmjIxj/chat", "_blank");
        break;
      case "request":
        onOpen();
        break;
      case "call":
        window.location.href = `tel:${telNumber}`;
        break;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 362,
        right: isMobile ? 5 : 100,
        width: "90px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 100,
      }}
    >
      {BtnGroup.map((group) => (
        <div
          style={{
            backgroundColor: getFloatBgColor(group.type),
            height: isMobile ? 60 : 90,
            width: isMobile ? 60 : 90,
            // opacity: isMobile ? 0.1 : 0.1,
            // color: "white",
          }}
          key={group.name}
          className="flex items-center justify-center cursor-pointer rounded"
          onClick={() => {
            handleFloat(group);
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
              fontSize: isMobile ? 12 : 16,
            }}
          >
            {group.icon}
            {group.name}
          </div>
        </div>
      ))}
      <ModalContent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default FloatBtnGroup;

const getFloatBgColor = (type: string) => {
  switch (type) {
    case "kakao":
      return "#F7E600";
    case "request":
      return "#4CAF50";
    case "call":
      return "#2196F3";
  }
};

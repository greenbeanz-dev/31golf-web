import { Customer } from "@/gql/__generated__/graphql";
import gqlClient from "@/gql/gqlClient";
import { CreateRequestQuery } from "@/gql/query/request/crud";
// import RequestInputModel, {
//   RequestInputModelResolver,
// } from "@/gql/query/request/model"; 사용시 Reflect.getMetadata is not a function 에러 발생
import CommonModal from "@component/molecule/modal/CommonModal";
import { Input, Textarea, useDisclosure } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import LoginModal from "@component/login/LoginModal";
import DateTimeNumberInput from "@component/molecule/input/DateTimeNumberInput";
import { ConfirmModal } from "@component/molecule/modal/ConfirmModal";
import { useForm } from "react-hook-form";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEventNote } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";
import useLogin from "../../utils/login/useLogin";
import { isEmpty } from "../../utils/validate/isEmpty";

const FloatBtnGroup = () => {
  const { login, isLogin, logOut, userProfile } = useLogin();
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
  const {
    isOpen: isLoginOpen,
    onOpen: loginOpen,
    onClose: loginClose,
  } = useDisclosure();
  const {
    isOpen: isConfirmOpen,
    onOpen: confirmOpen,
    onClose: confirmClose,
  } = useDisclosure();

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
    const [daysDay, setDaysDay] = useState<string>("1");
    const [daysNight, setDaysNight] = useState<string>("2");
    const [numTeam, setNumTeam] = useState<string>("1");
    const [numPeople, setNumPeople] = useState<string>("4");
    const [golfCourse, setGolfCourse] = useState<string>("");
    const [requestContent, setRequestContent] = useState<string>("");

    const queryClient = useQueryClient();

    const { mutateAsync: createRequest, isLoading } = useMutation(
      async (requestInputModel: any) => {
        if (!userProfile.id) return;
        return await gqlClient.request(CreateRequestQuery, {
          ...requestInputModel,
          customerId: Number(userProfile.id),
          dateDeparture: dateDeparture?.toISOString(),
          daysDay: Number(daysDay),
          daysNight: Number(daysNight),
          numTeam: Number(numTeam),
          numPeople: Number(numPeople),
          golfCourse: golfCourse,
          requestContent: requestContent,
        });
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries(["requestList"]);
          onClose();
          reset();
          confirmOpen();
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
      // resolver: RequestInputModelResolver,
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
              <DateTimeNumberInput
                label="출발날짜"
                value={dateDeparture ? new Date(dateDeparture) : undefined}
                onChange={(e) => {
                  setDateDeparture(e);
                }}
              />
              <div className="flex gap-10">
                <Input
                  classNames={{
                    label: "min-w-[5rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  value={daysDay}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="박"
                  label="박"
                  onChange={(e) => {
                    const day = Number(e.target.value);

                    if (!isNaN(day)) {
                      setDaysDay(e.target.value);
                      setDaysNight((day + 1).toString());
                    }
                  }}
                />
                <Input
                  classNames={{
                    label: "min-w-[5rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  type="number"
                  value={daysNight}
                  // {...register("numPeople", {
                  //   valueAsNumber: true,
                  // })}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="일"
                  label="일"
                  onChange={(e) => {
                    const night = Number(e.target.value);

                    if (!isNaN(night)) {
                      setDaysNight(night.toString());
                    }
                  }}
                />
              </div>

              <div className="flex gap-10">
                <Input
                  classNames={{
                    label: "min-w-[5rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  value={numTeam}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="팀"
                  label="팀 수"
                  onChange={(e) => {
                    const team = Number(e.target.value);

                    if (!isNaN(team)) {
                      setNumTeam(e.target.value);
                      setNumPeople((team * 4).toString());
                    }
                  }}
                />
                <Input
                  classNames={{
                    label: "min-w-[5rem]",
                    input: ["!ring-transparent"],
                    mainWrapper: ["w-full"],
                  }}
                  type="number"
                  value={numPeople}
                  // {...register("numPeople", {
                  //   valueAsNumber: true,
                  // })}
                  isClearable
                  labelPlacement="outside-left"
                  variant="bordered"
                  placeholder="명"
                  label="인원 수"
                  onChange={(e) => {
                    const people = Number(e.target.value);

                    if (!isNaN(people)) {
                      setNumPeople(people.toString());
                    }
                  }}
                />
              </div>
              <Input
                classNames={{
                  label: "min-w-[5rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                isClearable
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="골프장"
                label="골프장"
                onChange={(e) => {
                  setGolfCourse(e.target.value);
                }}
              />

              <Textarea
                classNames={{
                  label: "min-w-[5rem]",
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                minRows={5}
                labelPlacement="outside-left"
                variant="bordered"
                placeholder="문의사항"
                label="문의사항"
                onChange={(e) => {
                  setRequestContent(e.target.value);
                }}
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
        console.log("userProfile", userProfile);
        if (isEmpty(userProfile)) {
          loginOpen();
        } else {
          onOpen();
        }

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
      <LoginModal
        isOpen={isLoginOpen}
        onOpen={loginOpen}
        onClose={loginClose}
      />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onOpen={confirmOpen}
        onConfirmClose={confirmClose}
        onClose={onClose}
        message={
          "접수가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다. <br />고객센터:02-561-8008"
        }
      />
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

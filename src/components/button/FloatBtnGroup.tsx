import DateTimeNumberInput from "@component/molecule/input/DateTimeNumberInput";
import CommonModal from "@component/molecule/modal/CommonModal";
import { ConfirmModal } from "@component/molecule/modal/ConfirmModal";
import { Input, Textarea, useDisclosure } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoChevronUp } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { SiKakaotalk } from "react-icons/si";
// import RequestInputModel, {
//   RequestInputModelResolver,
// } from "@/gql/query/request/model"; 사용시 Reflect.getMetadata is not a function 에러 발생
import gqlClient from "@/gql/gqlClient";
import { FindOrCreateCustomerQuery } from "@/gql/query/customer/crud";
import { CreateRequestQuery } from "@/gql/query/request/crud";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useIsMobile } from "../../hooks/useIsMobile";
import useLogin from "../../utils/login/useLogin";

const FloatBtnGroup = () => {
  const { userProfile } = useLogin();
  const isMobile = useIsMobile();

  const BtnGroup = [
    {
      name: "카카오톡",
      icon: <SiKakaotalk size={isMobile ? 16 : 32} />,
      type: "kakao",
    },
    {
      name: "견적 문의",
      icon: <MdEventNote size={isMobile ? 16 : 32} />,
      type: "request",
    },
    {
      name: "전화 연결",
      icon: <BiSolidPhoneCall size={isMobile ? 16 : 32} />,
      type: "call",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
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
    const [guestName, setGuestName] = useState<string>("");
    const [guestPhone, setGuestPhone] = useState<string>("");
    const [guestError, setGuestError] = useState<string>("");

    const queryClient = useQueryClient();
    const isLoggedIn = Boolean(userProfile.id);

    const getSchedules = () => {
      if (dateDeparture) {
        return `${dayjs(dateDeparture).format("YY-MM-DD")} ~ ${dayjs(
          dateDeparture
        )
          .add(Number(daysNight) - 1, "day")
          .format("YY-MM-DD")}`;
      }
      return "";
    };

    const { mutateAsync: createRequest, isLoading } = useMutation(
      async (customerId: number) => {
        return await gqlClient.request(CreateRequestQuery, {
          customerId,
          dateDeparture: dateDeparture?.toISOString(),
          schedule: getSchedules(),
          daysDay: Number(daysDay),
          daysNight: Number(daysNight),
          numTeam: Number(numTeam),
          numPeople: Number(numPeople),
          golfCourse: golfCourse,
          requestContent: requestContent,
        });
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["requestList"]);
          onClose();
          resetForm();
          confirmOpen();
        },
      }
    );

    const resetForm = () => {
      setDateDeparture(undefined);
      setDaysDay("1");
      setDaysNight("2");
      setNumTeam("1");
      setNumPeople("4");
      setGolfCourse("");
      setRequestContent("");
      setGuestName("");
      setGuestPhone("");
      setGuestError("");
    };

    const resolveCustomerId = async (): Promise<number | null> => {
      if (isLoggedIn) {
        return Number(userProfile.id);
      }

      const trimmedName = guestName.trim();
      const trimmedPhone = guestPhone.trim().replace(/-/g, "");

      if (!trimmedName || !trimmedPhone) {
        setGuestError("성함과 휴대폰번호를 입력해 주세요.");
        return null;
      }

      setGuestError("");

      const result = await gqlClient.request(FindOrCreateCustomerQuery, {
        name: trimmedName,
        phone: trimmedPhone,
        email: "",
        memo: "",
        fax: "",
        isVillain: false,
        provider: "guest-inquiry",
      });

      return result.findOrCreateCustomer.id;
    };

    const handleSubmit = async () => {
      try {
        const customerId = await resolveCustomerId();
        if (!customerId) return;
        await createRequest(customerId);
      } catch {
        alert("견적 문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    };

    return (
      <CommonModal
        header="견적 문의"
        isOpen={isOpen}
        onClose={onClose}
        confirmAction={{
          action: handleSubmit,
          isLoading: isLoading,
          label: "문의하기",
        }}
        closeAction={{
          action: () => {
            onClose();
          },
          isLoading: false,
          label: "닫기",
        }}
      >
        <div className="flex flex-col w-full gap-4">
          <form className="w-full">
            <div className="flex flex-col w-full gap-2">
              {isLoggedIn ? (
                <>
                  <Input
                    classNames={{
                      label: "min-w-[5rem]",
                      input: ["!ring-transparent"],
                      mainWrapper: ["w-full"],
                    }}
                    value={userProfile.name ?? ""}
                    isReadOnly
                    labelPlacement="outside-left"
                    variant="bordered"
                    label="성함"
                  />
                  <Input
                    classNames={{
                      label: "min-w-[5rem]",
                      input: ["!ring-transparent"],
                      mainWrapper: ["w-full"],
                    }}
                    value={userProfile.phone ?? ""}
                    isReadOnly
                    labelPlacement="outside-left"
                    variant="bordered"
                    label="휴대폰번호"
                  />
                </>
              ) : (
                <>
                  <Input
                    classNames={{
                      label: "min-w-[5rem]",
                      input: ["!ring-transparent"],
                      mainWrapper: ["w-full"],
                    }}
                    value={guestName}
                    labelPlacement="outside-left"
                    variant="bordered"
                    placeholder="성함"
                    label="성함"
                    isRequired
                    onChange={(e) => {
                      setGuestName(e.target.value);
                      setGuestError("");
                    }}
                  />
                  <Input
                    classNames={{
                      label: "min-w-[5rem]",
                      input: ["!ring-transparent"],
                      mainWrapper: ["w-full"],
                    }}
                    value={guestPhone}
                    labelPlacement="outside-left"
                    variant="bordered"
                    placeholder="휴대폰번호"
                    label="휴대폰번호"
                    isRequired
                    onChange={(e) => {
                      setGuestPhone(e.target.value);
                      setGuestError("");
                    }}
                  />
                  {guestError && (
                    <p className="text-sm text-red-500">{guestError}</p>
                  )}
                </>
              )}
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

  const handleFloat = (group: (typeof BtnGroup)[number]) => {
    const telNumber = "02-561-8008";
    switch (group.type) {
      case "kakao":
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const itemSizeClass = isMobile ? "aspect-square w-full" : "h-[96px]";
  const labelClass = isMobile ? "text-[10px]" : "text-[13px]";
  const widthClass = isMobile ? "w-[60px]" : "w-[90px]";

  return (
    <div
      className={`fixed z-[100] flex flex-col overflow-hidden rounded-sm shadow-md ${widthClass}`}
      style={{ top: 362, right: isMobile ? 0 : 60 }}
    >
      {BtnGroup.map((group) => (
        <button
          type="button"
          key={group.name}
          className={`flex w-full flex-col items-center justify-center ${isMobile ? "gap-0.5" : "gap-1"} border-0 border-b border-[#e5e5e5] cursor-pointer ${itemSizeClass} ${getFloatItemClass(group.type)}`}
          onClick={() => {
            handleFloat(group);
          }}
        >
          {group.icon}
          <span className={labelClass}>{group.name}</span>
        </button>
      ))}
      <button
        type="button"
        aria-label="맨 위로 이동"
        className={`flex w-full flex-col items-center justify-center ${isMobile ? "gap-0.5 aspect-square w-full" : "gap-1 h-12"} border-0 cursor-pointer bg-[#4a4a4a] text-white`}
        onClick={scrollToTop}
      >
        <IoChevronUp size={isMobile ? 16 : 24} />
        <span className={labelClass}>TOP</span>
      </button>
      <ModalContent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <ConfirmModal
        isOpen={isConfirmOpen}
        onOpen={confirmOpen}
        onConfirmClose={confirmClose}
        onClose={onClose}
        message={
          "견적 문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다. <br />고객센터:02-561-8008"
        }
      />
    </div>
  );
};

export default FloatBtnGroup;

const getFloatItemClass = (type: string) => {
  switch (type) {
    case "kakao":
      return "bg-[#F7E600] text-[#333]";
    case "request":
      return "bg-white text-[#333]";
    case "call":
      return "bg-[#2D5AF0] text-white";
    default:
      return "bg-white text-[#333]";
  }
};

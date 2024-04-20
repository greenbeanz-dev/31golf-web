import { Customer } from "@/gql/__generated__/graphql";
import gqlClient from "@/gql/gqlClient";
import { CreateRequestQuery } from "@/gql/query/request/crud";
import RequestInputModel, {
  RequestInputModelResolver,
} from "@/gql/query/request/model";
import { 베스트상품Component } from "@component/Product/베스트상품Component";
import CommonModal from "@component/molecule/modal/CommonModal";
import ProdudctTabBarMain from "@component/organism/ProdudctTabBarMain";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaBusAlt, FaCarSide, FaMapMarkedAlt, FaStore } from "react-icons/fa";
import { FaCircleQuestion, FaTree } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { SiKakaotalk } from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";
import getShortPhoneNumber from "../../utils/format/getShortPhoneNumber";
import useLogin from "../../utils/login/useLogin";

const 메인Page = () => {
  const isMobile = useIsMobile();
  const mainImageList = [
    {
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)",
      description:
        "바다름 품은 골프장! 다도해의 아름다움과 탁트인 바다의 상쾌감을 느껴보세요.",
      price: 246000,
    },
    {
      url: "https://greenbeanz-reservation-bucket.s3.ap-northeast-2.amazonaws.com/286e7e88-2e2a-4e21-b9de-688d9b3e011f",
      title: "그린필드CC 당일 18홀",
      description: "새로운 이름 새로운 느낌",
      price: 500000,
    },
    {
      url: "/images/logo/golf_img3.png",
      title: "강릉 메이플비치 C.C 1박 2일 (36홀)",
      description: "바람이 설계하고 사람이 감동하는 정통 링크스 코스!",
      price: 305000,
    },
  ];
  return (
    <ErrorBoundary fallback={<div>메인</div>}>
      {/* <Suspense fallback={<Spinner />}>  suspense 오류뜸  */}
      {isMobile ? (
        <></>
      ) : (
        <>
          <ImageCarousel />
          <div style={{ minHeight: 32 }}></div>
        </>
      )}
      <div className="flex w-full">
        {isMobile ? (
          <></>
        ) : (
          <>
            {/*  회원 로그인  */}
            <Login />
          </>
        )}

        <div style={{ minWidth: isMobile ? 0 : 40 }}></div>

        {/* 베스트 상품  */}
        <div style={{ flex: isMobile ? 0 : 4, width: "100%" }}>
          {isMobile && <MobileMenu />}
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-2 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">삼일골프 베스트</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 베스트 투어 상품을 만나보세요!
            </div>
          </div>
          <div style={{ minHeight: 24 }} />
          <베스트상품Component />
          {/* <div
            className={`flex justify-between overflow-x-auto ${isMobile ? "gap-4" : ""}`}
          >
            {mainImageList.map((item) => {
              return (
                <div
                  style={{
                    width: isMobile ? 256 : 290,
                    minWidth: isMobile ? 256 : 290,
                  }}
                >
                  <img
                    className={"rounded-2xl"}
                    src={item.url}
                    height={isMobile ? 343 : 223}
                  />
                  <div style={{ minHeight: 16 }} />
                  <div className="text-base font-bold">{item.title}</div>
                  <div
                    className="text-base font-normal"
                    style={{
                      width: "100%",
                      overflowWrap: "break-word",
                    }}
                  >
                    {item.description}
                  </div>
                  <div className="text-sky-600 text-xl font-bold">
                    {item.price.toLocaleString()}원 ~
                  </div>
                </div>
              );
            })}
          </div> */}
          <div className={isMobile ? "min-h-[48px]" : "min-h-[36px]"} />
          {/* 투어 전체보기 */}
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 ${isMobile ? "" : "items-end"}`}
          >
            <div className="text-xl font-bold">투어 전체보기</div>
            <div className="text-[16px] leading-6 opacity-70">
              삼일골프의 다양한 투어 상품을 만나보세요!
            </div>
          </div>
          <ProdudctTabBarMain />
          <FloatBtnGroup />
        </div>
      </div>
      {/* </Suspense> */}
    </ErrorBoundary>
  );
};

const ImageCarousel = () => {
  const imageList = [
    "/images/logo/golf_main.png",
    "/images/logo/golf_main2.png",
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {imageList.map((image, idx) => {
        return (
          <Image
            alt={"mainImage"}
            key={idx}
            src={image}
            height={1200}
            width={400}
            className={"rounded-3xl"}
          />
        );
      })}
    </Carousel>
  );
};

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogin, logOut, userProfile } = useLogin();
  const router = useRouter();

  const handleSubmit = async () => {
    if (id === "" || password === "") {
      return alert("정보를 입력해 주세요.");
    }

    const result = await login("credentials", {
      name: id,
      phone: password,
      provider: "credentials",
      redirect: false,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex-1 flex-col">
      <div className="text-xl font-bold">
        {/* 임의로 로그인 확인하기 위해 추가함  */}
        {isLogin && userProfile.name && (
          <div>
            {userProfile.name}
            {getShortPhoneNumber(userProfile.phone)}님 환영합니다.
          </div>
        )}
        <div className="h-6" />
        <div className="flex flex-col gap-2">
          {!isLogin && (
            <>
              회원 로그인
              <Input
                classNames={{
                  mainWrapper: ["w-full"],
                  input: ["!ring-transparent", "bg-transparent"],
                }}
                placeholder="이름"
                size={"sm"}
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Input
                classNames={{
                  input: ["!ring-transparent"],
                  mainWrapper: ["w-full"],
                }}
                placeholder="휴대폰번호"
                size={"sm"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                className="flex justify-center items-center h-[48px] w-full rounded-[8px]"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleSubmit}
              >
                로그인
              </Button>
            </>
          )}

          <div
            className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#ffe500]"
            onClick={() => {
              login();
            }}
          >
            <Image
              src="/icons/client/kakao_logo.svg"
              alt="naver"
              width={24}
              height={24}
            />
            <div className="pl-1.5" />
            <div className="text-[16px] font-medium text-black opacity-85 leading-none">
              카카오 로그인
            </div>
          </div>
          <div
            className="flex justify-center items-center h-[48px] w-full rounded-[8px] bg-[#03C75A]"
            onClick={() => {
              login();
            }}
          >
            <Image
              src="/icons/client/naver_logo.png"
              alt="naver"
              width={32}
              height={32}
            />
            <div className="pl-1" />
            <div className="text-[16px] font-medium text-white leading-none">
              네이버 로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const router = useRouter();
  const firstRow = [
    {
      label: "국내골프",
      icon: <FaMapMarkedAlt size={32} color={theme.colors.primary} />,
      herf: "domestic",
    },
    {
      label: "제주골프",
      icon: <FaTree size={32} color={theme.colors.primary} />,
      href: "jeju",
    },
    {
      label: "해외골프",
      icon: <PiAirplaneTakeoffFill size={32} color={theme.colors.primary} />,
      href: "overseas",
    },
    {
      label: "버스출발",
      icon: <FaBusAlt size={32} color={theme.colors.primary} />,
      herf: "bus",
    },
  ];

  const secondRow = [
    {
      label: "차량",
      icon: <FaCarSide size={32} color={theme.colors.primary} />,
      herf: "/bus",
    },
    {
      label: "질문/후기",
      icon: <FaCircleQuestion size={32} color={theme.colors.primary} />,
      herf: "/question",
    },
    {
      label: "질문/후기",
      icon: <FaStore size={32} color={theme.colors.primary} />,
      herf: "/question",
    },
    {
      label: "",
      icon: <></>,
      herf: "/question",
    },
  ];
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="flex justify-between items-center">
        {firstRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
            style={{ width: 72 }}
            onClick={() => {
              router.push(`/${item.herf as string}`);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ minHeight: 16 }} />
      <div className="flex justify-between items-center">
        {secondRow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
            style={{ width: 72 }}
            onClick={() => {
              router.push(`/${item.herf as string}`);
            }}
          >
            {item.icon}
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      async (requestInputModel: RequestInputModel) => {
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
    } = useForm<Omit<RequestInputModel, "id">>({
      mode: "onSubmit",
      resolver: RequestInputModelResolver,
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
                errorMessage={errors?.golfCourse?.message || ""}
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
                  errorMessage={errors?.numTeam?.message || ""}
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
                  errorMessage={errors?.numPeople?.message || ""}
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
                errorMessage={errors?.golfCourse?.message || ""}
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
                errorMessage={errors?.dateOperation?.message || ""}
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
                errorMessage={errors?.requestContent?.message || ""}
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
                errorMessage={errors?.memo?.message || ""}
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

export default 메인Page;

import LoginModal from "@component/login/LoginModal";
import 예약추가Modal from "@component/molecule/modal/예약추가Modal";
import { Button, useDisclosure } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { theme } from "../../../pages/_app";
import useLogin from "../../utils/login/useLogin";
import 상품결제정보 from "./상품결제정보";
interface 상품예약버튼Props {
  product: {
    name: string;
    schedule: string;
    category1: string;
  };
  reservation: {
    status: string;
    dateDeparture: Date;
    numPeople: number;
    numTeam: number;
    productId: number;
    productName: string;
    customerId: number;
    customerName: string;
    priceCustom?: number;
    daysDay: number;
    daysNight: number;
  };
  setNumPeople: Dispatch<SetStateAction<number>>;
}

const 상품예약버튼 = ({
  product,
  reservation,
  setNumPeople,
}: 상품예약버튼Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: loginOpen,
    onClose: loginClose,
  } = useDisclosure();
  const { userProfile } = useLogin();
  return (
    <div>
      <상품결제정보
        minCount={product.category1 === "해외" ? 2 : 4}
        count={reservation.numPeople}
        setCount={setNumPeople}
        name={product.name}
        price={reservation.priceCustom}
        schedule={product.schedule}
        note="(2~3인 진행 시 별도 문의 부탁드립니다)"
      />
      <div style={{ minHeight: 8 }} />
      {isOpen && (
        <예약추가Modal
          reservation={reservation}
          setNumPeople={setNumPeople}
          일정={product.schedule}
          판매가={reservation.priceCustom}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <Button
        size="lg"
        style={{
          width: "100%",
          height: 48,
          backgroundColor: theme.colors.primary,
          color: "white",
          fontWeight: "bold",
        }}
        onClick={() => {
          const telNumber = "02-561-8008";
          reservation.priceCustom
            ? !userProfile.id
              ? loginOpen()
              : onOpen()
            : (window.location.href = `tel:${telNumber}`);
        }}
      >
        {reservation.priceCustom ? "투어 예약하기" : "전화 문의"}
      </Button>
      <공유하기버튼 />
      <LoginModal
        isOpen={isLoginOpen}
        onOpen={loginOpen}
        onClose={loginClose}
      />
    </div>
  );
};

export default 상품예약버튼;

const 공유하기버튼 = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const text = window.location.href;
    copy(text)
      .then(() => {})
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  useEffect(() => {
    if (copiedText?.includes(date as string)) {
      setIsCopied(true);
    } else {
      setIsCopied(false);
    }
  }, [copiedText, date]);

  return (
    <Button
      className="mt-2"
      size="lg"
      style={{
        width: "100%",
        height: 48,
        backgroundColor: theme.colors.secondary,
        opacity: 0.8,
        color: "white",
        fontWeight: "bold",
      }}
      onClick={handleCopy}
    >
      {isCopied ? "복사 완료" : "공유하기"}
    </Button>
  );
};

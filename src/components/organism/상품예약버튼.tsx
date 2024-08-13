import LoginModal from "@component/login/LoginModal";
import 예약추가Modal from "@component/molecule/modal/예약추가Modal";
import { Button, useDisclosure } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
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
    priceCustom: number;
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
      <LoginModal
        isOpen={isLoginOpen}
        onOpen={loginOpen}
        onClose={loginClose}
      />
    </div>
  );
};

export default 상품예약버튼;

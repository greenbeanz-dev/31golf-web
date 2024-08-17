import LoginModal from "@component/login/LoginModal";
import 예약추가Modal from "@component/molecule/modal/예약추가Modal";
import { Button, useDisclosure } from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { theme } from "../../../pages/_app";
import useLogin from "../../utils/login/useLogin";
import 상품결제정보 from "./상품결제정보";

declare global {
  interface Window {
    Kakao: any;
  }
}
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
        note="(2~3인 진행 시 별도 문의 / 2인 조인가능)"
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
      <공유하기버튼 title={product.name} />
      <LoginModal
        isOpen={isLoginOpen}
        onOpen={loginOpen}
        onClose={loginClose}
      />
    </div>
  );
};

export default 상품예약버튼;

const 공유하기버튼 = ({ title }: { title: string }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    const text = window.location.href;
    copy(text)
      .then(() => {
        alert("URL이 복사되었습니다. 공유해주세요.");
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;
    const url = window.location.href;

    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
    }

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        imageUrl: `${process.env.NEXTAUTH_URL}/images/gaudio/logo/31Logo.png`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },

      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex w-full gap-1">
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
        공유하기
      </Button>
      <Button
        className="mt-2 bg-[#F7E600] text-black"
        size="lg"
        style={{
          width: "100%",
          height: 48,
          fontWeight: "bold",
        }}
        onClick={shareToKakaoTalk}
      >
        카카오톡
      </Button>
    </div>
  );
};

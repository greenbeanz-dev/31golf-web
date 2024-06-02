import dayjs from "dayjs";

export type SmsSendType =
  | "RESERVATION"
  | "RESERVATION_SUB"
  | "CONFIRMATION"
  | "CHECKOUT";

const getSMSText = ({
  type,
  name,
  numPeople,
  numTeam,
  price,
  priceCustom,
  priceAddon,
  priceAddonSub,
  productName,
  dateDeparture,
  daysDay,
}: {
  type: SmsSendType;
  name: string;
  numPeople?: number | null;
  numTeam?: number | null;
  price?: number | null;
  priceCustom?: number | null;
  priceAddon?: number | null;
  priceAddonSub?: number | null;
  productName?: string | null;
  dateDeparture?: Date | null;
  daysDay?: number | null;
}) => {
  // make days list with dateDeparture and daysDay
  const daysList: String[] = [];
  if (daysDay && dateDeparture) {
    for (let i = 0; i < daysDay; i++) {
      daysList.push(dayjs(dateDeparture).add(i, "day").format("MM/DD"));
    }
  }

  const getDateArrival = () => {
    return daysDay
      ? dayjs(dayjs(dateDeparture).add(daysDay - 1, "day")).format("MM.DD")
      : "";
  };

  const getDateArrivalWeekday = () => {
    return daysDay
      ? dayjs(dayjs(dateDeparture).add(daysDay - 1, "day")).format("ddd")
      : "";
  };

  const getUrgentText = () => {
    // datedeparture - today is less than 2 weeks, return other text
    if (dayjs(dateDeparture).diff(dayjs(), "day") < 14) {
      return `- 실시간 예약으로 마감 가능성있습니다. \n- 패키지 티업시간 확정 후, 취소시 기간별 수수료 발생됩니다.
  \n★ 2주미만건으로 전액완납 확인 후 예약진행가능합니다.\n>> ${Number(
    price
  )?.toLocaleString()}원*${numPeople}+${(
    Number(priceAddon || 0) + Number(priceAddonSub || 0)
  ).toLocaleString()}원 = ${(
    Number(price) * Number(numPeople) +
    Number(priceAddon || 0) +
    Number(priceAddonSub || 0)
  )?.toLocaleString()}원`;
    } else {
      return `- 실시간 예약으로 마감 가능성있습니다. \n- 패키지 티업시간 확정후 취소시 1인 2만원 위약금 적용됩니다.
  \n★ 예약금 ₩원 입금 확인 후 진행됩니다.\n>>잔금은 ${dayjs(dateDeparture)
    .add(-14, "day")
    .format(
      "MM/DD"
    )}까지 완납조건입니다.\n(※예약금 입금 후 잔금은 출발 14일전까지 완납조건-카드결제 불가상품입니다.)`;
    }
  };

  switch (type) {
    case "RESERVATION":
    default:
      return `[삼일골프] 견적 안내
  ${
    daysDay && daysDay === 1
      ? `\n일정: ${dayjs(dateDeparture).format("YY.MM.DD")} (${dayjs(
          dateDeparture
        ).format("ddd")})`
      : `\n일정: ${dayjs(dateDeparture).format(
          "YY.MM.DD"
        )}~${getDateArrival()} (${dayjs(dateDeparture).format(
          "ddd"
        )}${getDateArrivalWeekday()})`
  }
  \n${productName}
  \n예약자: ${name} 님\n인원: ${numTeam}팀(${numPeople}명)
  \n★ 1인 금액: ${Number(priceCustom)?.toLocaleString()}원 (현금가)
  \n↓↓카톡 문의 가능↓↓
http://pf.kakao.com/_GxmjIxj/chat
카톡으로 문의주셔도 빠른 회신드리겠습니다.
======================
${
  daysDay && daysDay === 1
    ? `[골프]\n${dayjs(dateDeparture).format("MM/DD")}
  \n*포함사항: 그린피 18홀\n*불포함사항: 카트비, 캐디피, 숙박, 전일정식사, 교통편`
    : `[골프]\n${dayjs(dateDeparture).format("MM/DD")}\n${dayjs(dateDeparture)
        .add(1, "day")
        .format("MM/DD")}
  \n[숙박]\n${dayjs(dateDeparture).format("MM/DD")} 박\n- 
  \n*포함사항: 숙박1박+36홀+조식\n*불포함사항: 카트비, 캐디피, 포함외식사, 교통편`
}
======================
${getUrgentText()}
  \n실시간 예약으로 마감 가능성있습니다. \n진행시 빠른 연락부탁드립니다.
  \n감사합니다.-31골프
  `;

    case "CONFIRMATION":
      return `■삼일골프-골프패키지 확정■
  ${
    daysDay && daysDay === 1
      ? `\n일정: ${dayjs(dateDeparture).format("YY.MM.DD")} (${dayjs(
          dateDeparture
        ).format("ddd")})`
      : `\n일정: ${dayjs(dateDeparture).format(
          "YY.MM.DD"
        )}~${getDateArrival()} (${dayjs(dateDeparture).format(
          "ddd"
        )}${getDateArrivalWeekday()})`
  }
  \n${productName}
  \n예약자: ${name} 님\n인원: ${numTeam}팀(${numPeople}명)
  \n★ 1인 금액: ${Number(priceCustom)?.toLocaleString()}원 (현금가)
  \n↓↓카톡 문의 가능↓↓
http://pf.kakao.com/_GxmjIxj/chat
카톡으로 문의주셔도 빠른 회신드리겠습니다.
======================
${
  daysDay && daysDay === 1
    ? `[골프]\n${dayjs(dateDeparture).format("MM/DD")}
  \n*포함사항: 그린피 18홀\n*불포함사항: 카트비, 캐디피, 숙박, 전일정식사, 교통편`
    : `[골프]\n${dayjs(dateDeparture).format("MM/DD")}\n${dayjs(dateDeparture)
        .add(1, "day")
        .format("MM/DD")}
  \n[숙박]\n${dayjs(dateDeparture).format("MM/DD")} 박\n- 
  \n*포함사항: 숙박1박+36홀+조식\n*불포함사항: 카트비, 캐디피, 포함외식사, 교통편`
}
======================
- 확정된 일정으로, 취소시 기간별 수수료 발생됩니다.
  \n★ 예약금 ₩원 입금 확인OK\n>>잔금은 ${dayjs(dateDeparture)
    .add(-14, "day")
    .format(
      "MM/DD"
    )}까지 입금부탁드립니다.\n(※예약금 입금 후 잔금은 출발 14일전까지 완납조건-카드결제 불가상품입니다.)
  \n국민은행 699201-01-319263\n예금주 ㈜삼일골프투어
  \n감사합니다.-31골프
  `;
    case "CHECKOUT":
      return `[삼일골프] 입금요청\n\n잔금 ${priceCustom?.toLocaleString()}원
  \n국민은행 699201-01-319263\n예금주 ㈜삼일골프투어`;
  }
};

export default getSMSText;

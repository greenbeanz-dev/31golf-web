import dayjs from "dayjs";

export const getSMSText = ({
  type,
  name,
  numPeople,
  numTeam,
  price,
  priceCustom,
  productName,
  dateDeparture,
  daysDay,
}: {
  type: string;
  name: string;
  numPeople?: number | null;
  numTeam?: number | null;
  price?: number | null;
  priceCustom?: number | null;
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

  const daysListString = daysList.join(" 부\n");

  switch (type) {
    case "reservation":
    default:
      return `[삼일골프] 견적 안내
  \n일정: ${dayjs(dateDeparture).format(
    "YYYY년 MM월 DD일 (ddd)"
  )}\n${productName}
  \n인원: ${numTeam}팀(${numPeople}명)\n1인 금액: ${priceCustom?.toLocaleString()}원\n예약자: ${name} 님
  \n======================
  \n[골프]\n${dayjs(dateDeparture).format("MM/DD")} 부\n
  \n[숙박]\n${dayjs(dateDeparture).format("MM/DD")} 1박\n- 
  \n*포함사항: 숙박1박+36홀+조식\n*불포함사항: 카트비, 캐디피, 포함외식사, 교통편
  \n======================
  \n- 실시간 예약으로 마감 가능성있습니다. \n- 패키지 티업시간 확정후 취소시 1인 2만원 위약금 적용됩니다.
  \n★ 예약금 ₩${price}원 입금 확인 후 진행됩니다.\n>>잔금은 ${dayjs(
    dateDeparture
  )
    .add(-14, "day")
    .format(
      "MM/DD"
    )}까지 완납조건입니다.\n(※예약금 입금 후 잔금은 출발 14일전까지 완납조건-카드결제 불가상품입니다.)
  \n실시간 예약으로 마감 가능성있습니다. \n진행시 빠른 연락부탁드립니다.
  \n감사합니다.-31골프
  `;
    case "confirmation":
      return `■삼일골프-골프패키지 확정■
  \n일정: ${dayjs(dateDeparture).format(
    "YYYY년 MM월 DD일 (ddd)"
  )}\n${productName}
  \n인원: ${numTeam}팀(${numPeople}명)\n★1인 금액: ${priceCustom?.toLocaleString()}원\n예약자: ${name} 님
  \n======================
  \n[골프]\n${dayjs(dateDeparture).format("MM/DD")} 부\n
  \n[숙박]\n${dayjs(dateDeparture).format("MM/DD")} 1박\n- 
  \n*포함사항: 숙박1박+36홀+조식\n*불포함사항: 카트비, 캐디피, 포함외식사, 교통편
  \n======================
  \n- 확정된 일정으로, 취소시 기간별 수수료 발생됩니다.
  \n★ 예약금 ₩${price}원 입금 확인OK\n>>잔금은 출발 14일전(${dayjs(
    dateDeparture
  )
    .add(-14, "day")
    .format(
      "MM/DD"
    )})까지 완납조건입니다.\n예약금 입금 후 잔금은 출발 14일전까지 완납조건-카드결제 불가상품입니다.)
  \n국민은행 699201-01-319263\n예금주 ㈜삼일골프투어
  \n감사합니다.-31골프
  `;
    case "checkout":
      return `안녕하세요. 삼일골프입니다.
  \n${dayjs(dateDeparture).format("MM/DD")}~${dayjs(dateDeparture)
    .add(daysDay ? daysDay - 1 : 0, "day")
    .format("DD")} 일정\n잔금 ₩${priceCustom?.toLocaleString()}원
  \n국민은행 699201-01-319263\n예금주 ㈜삼일골프투어
  \n입금 부탁드립니다.\n감사합니다. -31골프`;
  }
};

export default getSMSText;

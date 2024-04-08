import { Dispatch, SetStateAction } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { theme } from "../../../pages/_app";

interface 상품결제정보Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  name: string;
  price: number;
  dateDeparture: Date;
  daysDay: number;
  daysNight: number;
  note: string;
}

const 상품결제정보 = ({
  count,
  setCount,
  name,
  price,
  dateDeparture,
  daysDay,
  daysNight,
  note,
}: 상품결제정보Props) => {
  const year = dateDeparture.getFullYear();
  const month = String(dateDeparture.getMonth() + 1).padStart(2, "0");
  const day = String(dateDeparture.getDate()).padStart(2, "0");
  const formattedDateDeparture = `${year}.${month}.${day}`;

  const endDate = new Date(dateDeparture);
  endDate.setDate(endDate.getDate() + daysNight - daysDay);

  const endYear = endDate.getFullYear();
  const endMonth = String(endDate.getMonth() + 1).padStart(2, "0");
  const endDay = String(endDate.getDate()).padStart(2, "0");

  const formatted도착일 = `${endYear}.${endMonth}.${endDay}`;

  return (
    <>
      <div className="font-bold text-xl">{name}</div>
      <div className="flex">
        <div style={{ marginRight: "1rem" }}>기간</div>
        <div>{formattedDateDeparture}</div>
        <div>~</div>
        <div style={{ marginRight: "0.5rem" }}>{formatted도착일}</div>
        <div>{daysDay}박</div>
        <div>{daysNight}일</div>
      </div>
      <div className="text-red-500 text-sm font-normal">{note}</div>
      <div style={{ minHeight: 8 }} />

      {/* 박스 */}
      <div className="w-full h-20 px-4 py-6 rounded-2xl border border-black border-opacity-10 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <div className="flex items-center">
            성인
            <div className="text-xl font-bold" style={{ minWidth: "7rem" }}>
              {(count * price).toLocaleString()} 원
            </div>
          </div>
          <div style={{ minWidth: "2rem" }} />
          <div className="flex">
            <FaCircleMinus
              size={24}
              color={theme.colors.primary}
              onClick={() => {
                if (count > 4) setCount(count - 1);
              }}
            />
            <div className="text-xl font-bold" style={{ minWidth: "1rem" }} />
            {count}명
            <div style={{ minWidth: "1rem" }} />
            <FaCirclePlus
              size={24}
              color="004964"
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ minHeight: 8 }} />
      {/* 총 금액  */}
      <div className="w-full h-9 px-1 justify-end items-center gap-4 inline-flex">
        <div className="text-black text-sm font-normal">총 금액</div>
        <div className="text-red-500 text-2xl font-bold">
          {(count * price).toLocaleString()} 원
        </div>
      </div>
    </>
  );
};

export default 상품결제정보;

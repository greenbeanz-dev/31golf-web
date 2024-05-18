import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { theme } from "../../../pages/_app";
dayjs.locale("ko");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const koLocale = require("dayjs/locale/ko");
dayjs.extend(localizedFormat);
dayjs.locale(koLocale);

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
  const formattedDateDeparture = dayjs(dateDeparture).format("YYYY.MM.DD(ddd)");
  const endDate = dateDeparture;
  if (!isNaN(daysDay)) {
    endDate.setDate(endDate.getDate() + daysDay - 1);
  }
  const formattedDateArrival = dayjs(endDate).format("YYYY.MM.DD(ddd)");

  return (
    <>
      <div className="text-[16px] font-bold">{name.replaceAll("null", "")}</div>
      <div className="pt-2" />
      <div className="flex items-center">
        <div className="text-[14px] font-bold">기간</div>
        <div className="pl-2" />
        <div className="text-[14px]">{`${formattedDateDeparture} ~ ${formattedDateArrival} ${isNaN(daysNight) ? "당일" : `${daysNight}박 ${daysDay}일`} `}</div>
      </div>
      <div className="pt-1" />
      <div className="text-red-500 text-sm font-normal">{note}</div>
      <div style={{ minHeight: 8 }} />

      {/* 박스 */}
      <div className="w-[354px] h-20 px-4 py-6 rounded-[16px] border border-black border-opacity-10 items-center inline-flex">
        <div className="w-full justify-between items-center gap-1 flex">
          <div className="flex items-center">
            <div className="text-[14px]">성인</div>
            <div className="pl-1" />
            <div className="text-xl font-bold">
              {(count * price).toLocaleString()}원
            </div>
          </div>
          <div className="flex px-1 gap-5">
            <FaCircleMinus
              className="cursor-pointer"
              size={24}
              color={theme.colors.primary}
              onClick={() => {
                if (count > 4) setCount(count - 1);
              }}
            />
            <div className="text-[20px] font-bold">{count}명</div>
            <FaCirclePlus
              className="cursor-pointer"
              size={24}
              color="004964"
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
      </div>
      <div className="pt-2" />
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

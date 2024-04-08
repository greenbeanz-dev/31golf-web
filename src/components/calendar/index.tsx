import moment from "moment";
import "moment-timezone/builds/moment-timezone-with-data";
import "moment/locale/ko";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import useProductPriceCalendarInfiniteQuery, {
  useProductPriceCalendarInfiniteQueryBody,
} from "@/gql/query/productPrice/useProductPriceCalendarInfiniteQuery";
import dayjs from "dayjs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useIsMobile } from "../../hooks/useIsMobile";

interface I상품캘린더Props {
  판매가: number;
  set판매가: Dispatch<SetStateAction<number>>;
  출발일: Date;
  set출발일: Dispatch<SetStateAction<Date>>;
}
export const 상품캘린더: React.FC<I상품캘린더Props> = ({
  판매가,
  set판매가,
  출발일,
  set출발일,
}) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const elements = document.querySelectorAll(
      'span[role="columnheader"][aria-sort="none"]'
    );
    elements.forEach((element) => {
      if (element.textContent && element.textContent.includes("일")) {
        (element as HTMLElement).style.color = "red";
      }
      if (element.textContent && element.textContent.includes("토")) {
        (element as HTMLElement).style.color = "blue";
      }
    });
  }, []);

  const changeProductId = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.changeProductId
  );

  useEffect(() => {
    // TODO 임의 추후 상품 ID로 교체 예정
    changeProductId("2553");
  }, []);

  const { data, fetchNextPage, hasNextPage } =
    useProductPriceCalendarInfiniteQuery();

  let list = data?.pages
    .map((page) => page.productPriceList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
      return {
        ...item,
        date: item?.date ? dayjs(item.date).format("YYYY-MM-DD") : "",
      };
    });

  const events =
    list &&
    list.map((elem) => {
      return {
        title: `${(elem.price || 0).toLocaleString()}`,
        start: new Date(elem.date),
        end: new Date(elem.date),
      };
    });

  const localizer = momentLocalizer(moment);
  const formats = {
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, "MMMM YYYY", culture),
  };

  const dayOfWeekStyleGetter = (date) => {
    // 추후 예약 가능, 마감에 따라 색 수정
    const dayOfWeek = moment(date.start).day(); // 0: 일요일, 6: 토요일
    // if (dayOfWeek === 0) {
    //   return {
    //     style: {
    //       backgroundColor: "red",
    //     },
    //   };
    // } else if (dayOfWeek === 6) {
    //   return {
    //     style: {
    //       backgroundColor: "#004964",
    //     },
    //   };
    // }

    return {
      style: {
        backgroundColor: "transparent",
        color: "#000",
      },
    };
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const isSameDate = (date, selectedDate) => {
    const calendarDay = new Date(date).getDay();
    const calendarDate = new Date(date).getDate();

    const selectedDay = selectedDate && new Date(selectedDate).getDay();
    const selectDate = selectedDate && new Date(selectedDate).getDate();

    const isSame =
      `${calendarDay}_${calendarDate}` === `${selectedDay}_${selectDate}`;

    return isSame;
  };

  const CustomDateCellWrapper = (props) => {
    const isSelected = isSameDate(props.value, selectedDate);
    return (
      <div
        className={
          isSelected
            ? `${props.children.props.className}-selected`
            : props.children.props.className
        }
      >
        {props.children}
      </div>
    );
  };

  const CustomDateHeader = (props) => {
    const isSelected = isSameDate(props.date, selectedDate);
    return (
      <div
        style={{
          color: isSelected ? "white" : "black",
        }}
      >
        {props.label}
      </div>
    );
  };

  const CustomEventContent = (props) => {
    const isSelected = isSameDate(props.event.start, selectedDate);

    return (
      <div
        style={{
          color: isSelected ? "white" : "black",
          fontSize: isMobile ? 10 : 14,
        }}
      >
        {props.event.title}
      </div>
    );
  };

  const handleSlot = (slot) => {
    setSelectedDate(slot.start);

    const price = events?.find((event) =>
      isSameDate(slot.start, event.start)
    )?.title;

    if (price) {
      set판매가(Number(price.replace(/,/g, "")));
      set출발일(slot.start);
    } else {
      set판매가(Number(0));
      set출발일(slot.start);
    }
  };

  return (
    <div className="flex flex-col w-full px-5 pt-4 pb-2 rounded-lg border border-black border-opacity-10">
      <div style={{ height: 360 }}>
        <Calendar
          backgroundColor={"#fff"}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={dayOfWeekStyleGetter}
          views={["month"]}
          formats={formats}
          selectable={true}
          onSelectSlot={handleSlot}
          onSelectEvent={(event, e) => {
            console.log("event");
            // 클릭 이벤트를 처리하지 않음
          }}
          components={{
            toolbar: CustomToolbar,
            month: {
              dateCellWrapper: CustomDateCellWrapper,
              dateHeader: CustomDateHeader,
              event: CustomEventContent,
            },
          }}
        />
      </div>
    </div>
  );
};

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const date = new Date(toolbar.date);
  const label = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  return (
    <div>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="flex gap-2 items-center">
          <IoIosArrowBack size={24} color="#000000" onClick={goToBack} />
        </span>
        <span
          className="rbc-toolbar-label text-opacity-70"
          style={{
            fontSize: 20,
          }}
        >
          {label}
        </span>
        <IoIosArrowForward size={24} color="#000000" onClick={goToNext} />
      </div>
      <div className="w-28 h-4 justify-start items-start gap-2 inline-flex">
        <StatusIcon color="#004964 bg-opacity-10" label="예약 가능" />
        <StatusIcon color="black bg-opacity-20" label="마감" />
      </div>
    </div>
  );
};

const StatusIcon = ({ color, label }) => (
  <div className="justify-start items-center gap-1 flex">
    <div className={`w-3 h-3 bg-${color} rounded-full`}></div>
    <div className="text-black text-opacity-70 text-xs font-bold">{label}</div>
  </div>
);

import moment from "moment";
import "moment-timezone/builds/moment-timezone-with-data";
import "moment/locale/ko";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import useProductPriceCalendarInfiniteQuery, {
  useProductPriceCalendarInfiniteQueryBody,
} from "@/gql/query/productPrice/useProductPriceCalendarInfiniteQuery";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useIsMobile } from "../../hooks/useIsMobile";

const 임시예약마감일 = [1, 2];
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

  const [selectMonth, setSelectMonth] = useState<number>(0);

  const router = useRouter();
  const { id: productId } = router.query;

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

  const [renderCalendar, setRenderCalendar] = useState(false);

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

  const events = useMemo(() => {
    return (
      list &&
      list.map((elem) => {
        const eventDate = new Date(elem.date);
        const eventMonth = eventDate.getMonth(); // 이벤트의 월 가져오기

        const offDay = eventMonth + 1 !== selectMonth;
        return {
          title: `${(elem.price || 0).toLocaleString()}`,
          start: new Date(elem.date),
          end: new Date(elem.date),
          extendedProps: {
            offDay: offDay,
          },
        };
      })
    );
  }, [list, selectMonth]);

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

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      console.log("NEXT");
      toolbar.onNavigate("NEXT");
    };

    const goToToday = () => {
      toolbar.onNavigate("TODAY");
    };

    const date = new Date(toolbar.date);
    const label = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    setSelectMonth(date.getMonth() + 1);

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
              fontWeight: 700,
            }}
          >
            {label}
          </span>
          <IoIosArrowForward size={24} color="#000000" onClick={goToNext} />
        </div>
        <div className="w-28 h-4 justify-start items-start gap-2 inline-flex">
          <StatusIcon color="bg-sky-900 bg-opacity-10" label="예약 가능" />
          <StatusIcon color="bg-black bg-opacity-20" label="마감" />
        </div>
      </div>
    );
  };

  const CustomDateCellWrapper = (props) => {
    const isSelected = isSameDate(props.value, selectedDate);
    const calendarDate = new Date(props.value).getDate();
    return (
      <div
        className={
          isSelected
            ? `${props.children.props.className}-selected`
            : 임시예약마감일.includes(calendarDate)
              ? `${props.children.props.className}-deadline`
              : props.children.props.className
        }
      >
        {props.children}
      </div>
    );
  };

  const CustomDateHeader = (props) => {
    const isSelected = isSameDate(props.date, selectedDate);
    const isOffday = props.isOffRange;

    return (
      <div
        style={{
          padding: 5,
          fontSize: "12px",
          fontWeight: "700",
          color: isSelected ? "white" : "black",
          opacity: isOffday ? 0.2 : 1,
        }}
      >
        {props.label.startsWith("0")
          ? props.label.replace("0", "")
          : props.label}
      </div>
    );
  };

  const CustomEventContent = (props) => {
    const isSelected = isSameDate(props.event.start, selectedDate);
    const ifOffday = props.event.extendedProps.offDay;

    return (
      <div
        style={{
          color: isSelected ? "white" : "black",
          fontSize: isMobile ? 10 : 12,
          fontWeight: "400",
          textAlign: "end",
          opacity: ifOffday ? 0.2 : 1,
        }}
      >
        {props.event.title}
      </div>
    );
  };

  const handleSlot = (slot) => {
    const calendarDate = new Date(slot.start).getDate();
    if (임시예약마감일.includes(calendarDate) || slot.extendedProps?.offDay)
      return;
    setSelectedDate(slot.start);

    const price = events?.find((event) =>
      isSameDate(slot.start, event.start)
    )?.title;

    if (price) {
      set판매가(Number(price.replace(/,/g, "")));
      set출발일(slot.start);
    } else {
      // set판매가(Number(0));
      // set출발일(slot.start);
    }
  };

  useEffect(() => {
    if (productId) changeProductId(productId.toString());
    setTimeout(() => {
      setRenderCalendar(true);
    }, 100); // 0.1초 후에 렌더링되도록 지연시킴 (캘린더 toolbar가 동작하지 않는 이슈로 인해 추가함)
  }, []);

  if (!renderCalendar) {
    return null;
  }

  return (
    <div className="flex flex-col w-full px-5 pt-4 pb-2 rounded-lg border border-black border-opacity-10">
      <div style={{ height: 354 }}>
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
            handleSlot(event);
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

const StatusIcon = ({ color, label }) => (
  <div className="justify-start items-center gap-1 flex">
    <div className={`w-3 h-3 ${color} rounded-full`}></div>
    <div className="text-black text-opacity-70 text-xs font-bold">{label}</div>
  </div>
);

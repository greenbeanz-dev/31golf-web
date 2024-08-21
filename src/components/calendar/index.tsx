import moment from "moment";
import "moment-timezone/builds/moment-timezone-with-data";
import "moment/locale/ko";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";

import useProductPriceCalendarInfiniteQuery, {
  useProductPriceCalendarInfiniteQueryBody,
} from "@/gql/query/productPrice/useProductPriceCalendarInfiniteQuery";
import { cn } from "@nextui-org/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { theme } from "../../../pages/_app";
import { useIsMobile } from "../../hooks/useIsMobile";

interface I상품캘린더Props {
  판매가?: number;
  set판매가: Dispatch<SetStateAction<number | undefined>>;
  출발일: Date;
  set출발일: Dispatch<SetStateAction<Date>>;
  onClick?: (data: any) => void;
}
export const 상품캘린더: React.FC<I상품캘린더Props> = ({
  판매가,
  set판매가,
  출발일,
  set출발일,
  onClick,
}) => {
  const isMobile = useIsMobile();

  const [selectMonth, setSelectMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  const events = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.list
  );
  const [calendarWidth, setCalendarWidth] = useState(0);
  const [calendarY, setCalendarY] = useState(0);

  const router = useRouter();
  const { id: productId } = router.query;

  const changeProductId = useProductPriceCalendarInfiniteQueryBody(
    (state) => state.changeProductId
  );

  const [renderCalendar, setRenderCalendar] = useState(false);

  const localizer = momentLocalizer(moment);
  const formats = {
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, "MMMM YYYY", culture),
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const eventsInSelectMonth = events.filter(
    (event) => event.start.getMonth() === selectMonth - 1
  );

  const CustomDateCellWrapper = (props) => {
    const isSelected = isSameDate(props.value, selectedDate);
    const isOutDated = new Date(props.value) < new Date();
    const isToday =
      moment().format("YYYY-MM-DD") ===
      moment(props.value).format("YYYY-MM-DD");
    const isOutOfMonth = props.value.getMonth() !== selectMonth - 1;
    const memo = events?.find((event) => isSameDate(props.value, event.start))
      ?.extendedProps.memo;

    return (
      <div
        className={cn(
          "flex-1 border border-white border-solid rounded-md bg-[#004964]/10",
          isOutDated && !isOutOfMonth && "!bg-black/20",
          (isOutOfMonth || isToday) && "!bg-white/10",
          memo === "SOLDOUT" && "!bg-black/20",
          isSelected && "!bg-[#004964]"
        )}
      >
        {props.children}
      </div>
    );
  };

  const CustomDateHeader = (props) => {
    const isSelected = isSameDate(props.date, selectedDate);
    const isOffDay = props.isOffRange;

    return (
      <div
        style={{
          padding: 5,
          fontSize: "12px",
          fontWeight: "700",
          color: isSelected ? "white" : "black",
          opacity: isOffDay ? 0.2 : 1,
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
    const isOffDay = props.event.extendedProps.isOffDay;
    const memo = props.event.extendedProps.memo;

    return (
      <div
        style={{
          color: isSelected ? "white" : "black",
          fontSize: isMobile ? 10 : 12,
          fontWeight: "400",
          textAlign: "end",
          opacity:
            (isOffDay || memo === "SOLDOUT" || memo === "INQUIRY") &&
            !isSelected
              ? 0.2
              : 1,
        }}
      >
        {props.event.title}
      </div>
    );
  };

  const handleSlot = (slot) => {
    if (events && events.length == 0) return; // 데이터가 없을경우 선택 불가

    const memo = events?.find((event) => isSameDate(slot.start, event.start))
      ?.extendedProps.memo;

    // 과거 날짜 클릭 시 선택 불가
    const isOutDated = slot.start < new Date();
    if (isOutDated) return;

    setSelectedDate(slot.start);
    onClick?.(slot);

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

    if (memo === "SOLDOUT") {
      set판매가(Number(0));
      set출발일(slot.start);
    }
  };

  useEffect(() => {
    if (productId) changeProductId(productId.toString());
    setTimeout(() => {
      setRenderCalendar(true);
    }, 100); // 0.1초 후에 렌더링되도록 지연시킴 (캘린더 toolbar가 동작하지 않는 이슈로 인해 추가함)
  }, []);

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

  // 캘린더 width, Y를 읽어옴
  useEffect(() => {
    const updateWidth = () => {
      const calendarElement = document.querySelector(".rbc-calendar");

      if (calendarElement) {
        setCalendarWidth((calendarElement as any).offsetWidth);
        setCalendarY(calendarElement.getBoundingClientRect().y);
      }
    };
    setTimeout(() => {
      updateWidth(); // 초기 렌더링시 width를 가져오기 위해 delay를 둠
    }, 200);
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  if (!renderCalendar) {
    return null;
  }

  return (
    <div className="flex flex-col w-full px-5 pt-4 pb-2 rounded-lg border border-black border-opacity-10 w-100">
      <Suspense>
        <PriceLoader />
      </Suspense>
      <div style={{ height: 354, width: "100%" }}>
        <Calendar
          defaultDate={new Date()}
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
          onSelect
          components={{
            toolbar: (toolbar) => CustomToolbar(toolbar, setSelectMonth),
            month: {
              dateCellWrapper: CustomDateCellWrapper,
              dateHeader: CustomDateHeader,
              event: CustomEventContent,
            },
          }}
        />
      </div>
      {/* width, Y가 초기값일 때는 보여주지 않음(화면 전환을 부드럽게 보이기 위해)  */}
      {events &&
        eventsInSelectMonth.length === 0 &&
        calendarWidth !== 0 &&
        calendarY !== 0 && (
          <div
            className="cursor-pointer"
            onClick={() => {
              window.open("https://pf.kakao.com/_GxmjIxj/chat", "_blank");
            }}
            style={{
              zIndex: 100,
              opacity: 0.9,
              width: calendarWidth,
              height: 250,
              position: "absolute",
              top: calendarY + 100,
              backgroundColor: theme.colors.primary,
              color: "white",
              fontSize: isMobile ? "20px" : "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            골프장 오픈 전 일정입니다. <br />
            사전접수 가능 합니다.
            <br />
            고객센터로 연락주세요.
          </div>
        )}
    </div>
  );
};

const StatusIcon = ({ color, label }) => (
  <div className="justify-start items-center gap-1 flex">
    <div className={`w-3 h-3 ${color} rounded-full`}></div>
    <div className="text-black text-opacity-70 text-xs font-bold">{label}</div>
  </div>
);

const dayOfWeekStyleGetter = (date) => {
  return {
    style: {
      backgroundColor: "transparent",
      color: "#000",
    },
  };
};

const isSameDate = (date, selectedDate) => {
  if (!selectedDate) return false;
  return moment(date).isSame(selectedDate, "day");
};

const CustomToolbar = (toolbar, setSelectMonth) => {
  const goToBack = () => {
    const date = new Date(toolbar.date);
    const momentDate = moment(date).subtract(1, "months");
    useProductPriceCalendarInfiniteQueryBody
      .getState()
      .changeDate(momentDate.toDate());
    setSelectMonth(momentDate.toDate().getMonth() + 1);
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    const date = new Date(toolbar.date);
    const momentDate = moment(date).add(1, "months");
    useProductPriceCalendarInfiniteQueryBody
      .getState()
      .changeDate(momentDate.toDate());

    setSelectMonth(momentDate.toDate().getMonth() + 1);
    toolbar.onNavigate("NEXT");
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
            fontWeight: 700,
          }}
        >
          {label}
        </span>
        <IoIosArrowForward size={24} color="#000000" onClick={goToNext} />
      </div>
      <div className="w-32 h-4 justify-start items-start gap-2 inline-flex">
        <StatusIcon color="bg-sky-900 bg-opacity-10" label="예약 가능" />
        <StatusIcon color="bg-black bg-opacity-20" label="마감" />
      </div>
    </div>
  );
};

const PriceLoader = () => {
  const date = useProductPriceCalendarInfiniteQueryBody((state) => state.date);
  const { data, isLoading } = useProductPriceCalendarInfiniteQuery();

  let list = data?.pages
    .map((page) => page.productPriceList.edges.map((item) => item?.node))
    .flat()
    .map((item, index) => {
      return {
        ...item,
        date: item?.date ? dayjs(item.date).format("YYYY-MM-DD") : "",
      };
    });

  const events = (list || []).map((elem) => {
    const isOffDay = new Date(elem.date) < new Date();
    const isToday =
      moment().format("YYYY-MM-DD") === moment(elem.date).format("YYYY-MM-DD");

    return {
      title: isToday
        ? "오늘"
        : elem.memo === "INQUIRY"
          ? "별도 문의"
          : elem.memo === "SOLDOUT"
            ? "예약 마감"
            : `${(elem.price || 0).toLocaleString()}`,
      start: new Date(elem.date),
      end: new Date(elem.date),
      extendedProps: {
        isOffDay: isOffDay,
        memo: elem.memo,
      },
    };
  });

  useEffect(() => {
    useProductPriceCalendarInfiniteQueryBody.getState().changeList(events);
  }, [date, isLoading, events.length]);
  return null;
};

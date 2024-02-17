import moment from "moment";
import "moment-timezone/builds/moment-timezone-with-data";
import "moment/locale/ko";
import { useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const 상품캘린더 = () => {
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

  const localizer = momentLocalizer(moment);
  const formats = {
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, "MMMM YYYY", culture),
  };

  const events = [
    {
      title: "1000원",
      start: new Date(2024, 1, 17),
      end: new Date(2024, 1, 17),
    },
    {
      title: "2000원",
      start: new Date(2024, 1, 18),
      end: new Date(2024, 1, 18),
    },
  ];

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
          components={{
            toolbar: CustomToolbar,
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
      <div className="rbc-toolbar">
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
        <StatusIcon color="sky-900 bg-opacity-10" label="예약 가능" />
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

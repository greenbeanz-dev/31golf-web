import { web_setting } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";

dayjs.locale("ko");

export default function usePopupList() {
  return useQuery(
    ["popupList"],
    async () => {
      const response = await axios.get<web_setting[]>("/api/webSetting");
      return response.data;
    },
    {
      select: (data) => {
        return data.map((item) => {
          return {
            ...item,
            display_begin: dayjs(item?.display_begin).format(
              "YYYY-MM-DD (ddd)"
            ),
            display_end: dayjs(item?.display_end).format("YYYY-MM-DD (ddd)"),
          };
        });
      },
    }
  );
}

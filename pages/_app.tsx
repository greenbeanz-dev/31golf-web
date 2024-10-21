import Layout from "@component/Layout";
import { NextUIProvider } from "@nextui-org/react";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dayjs from "dayjs";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "reflect-metadata";
import "../styles/custom-calendar.css";
import "../styles/global.css";
import "../styles/tailwind.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
dayjs.locale("ko");

(BigInt.prototype as any).toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

export const theme = {
  colors: {
    primary: "#004964",
    secondary: "#FF502A",
  },
};
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            suspense: true,
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
        queryCache: new QueryCache({
          // onError: (error: AxiosError) => {
          //   handleError(error);
          // },
        }),
      })
  );

  return (
    <SessionProvider
      session={pageProps.session}
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
              <Analytics />
              <SpeedInsights />
              <ReactQueryDevtools initialIsOpen={true} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;

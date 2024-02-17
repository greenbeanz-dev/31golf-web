import Layout from "@component/Layout";
import { NextUIProvider } from "@nextui-org/react";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "reflect-metadata";
import "../styles/custom-calendar.css";
import "../styles/tailwind.css";

dayjs.locale("ko");

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
    // <SessionProvider
    //   session={pageProps.session}
    //   refetchInterval={5 * 60}
    //   refetchOnWindowFocus={true}
    // >
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </NextUIProvider>
    // </SessionProvider>
  );
}

export default MyApp;

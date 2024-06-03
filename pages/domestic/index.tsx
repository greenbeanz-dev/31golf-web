import { 국내골프Page } from "@component/page/국내골프Page";
import Head from "next/head";

function DomesticPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>국내골프</title>
      </Head>
      <div style={{ height: 20 }} />
      <국내골프Page />
    </div>
  );
}

export default DomesticPage;

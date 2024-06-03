import { 해외골프Page } from "@component/page/해외골프Page";
import Head from "next/head";

function OverseasPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>해외골프</title>
      </Head>
      <div style={{ height: 20 }} />
      <해외골프Page />
    </div>
  );
}

export default OverseasPage;

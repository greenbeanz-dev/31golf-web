import { 제주골프Page } from "@component/page/제주골프Page";
import Head from "next/head";

function JejuPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>31골프 - 제주골프</title>
      </Head>
      <div style={{ height: 20 }} />
      <제주골프Page />
    </div>
  );
}

export default JejuPage;

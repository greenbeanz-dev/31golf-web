import 메인Page from "@component/page/메인Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ height: 40 }} />
      <메인Page />
    </div>
  );
}

export default Home;

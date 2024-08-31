import 상품관리Page from "@component/page/상품관리Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>국내/해외골프는 역시 31골프</title>
      </Head>
      <상품관리Page />
    </div>
  );
}

export default Home;

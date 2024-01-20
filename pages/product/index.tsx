import 상품관리Page from "@component/page/상품관리Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>31Golf Web</title>
      </Head>
      <상품관리Page />
    </div>
  );
}

export default Home;

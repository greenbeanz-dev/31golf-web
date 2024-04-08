import { 골프상세Page } from "@component/page/골프상세Page";
import Head from "next/head";
import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-10" />
      <골프상세Page productId={Number(id)} />
    </div>
  );
}

export default Detail;

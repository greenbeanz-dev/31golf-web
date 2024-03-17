import { 회원가입Page } from "@component/page/회원가입Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>회원가입</title>
      </Head>
      <div style={{ minHeight: 40 }} />
      <회원가입Page />
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: {} };
}

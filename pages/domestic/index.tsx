import { 국내골프Page } from "@component/page/국내골프Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>Home</title>
      </Head>
      <div style={{ minHeight: 40 }} />
      <국내골프Page />
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

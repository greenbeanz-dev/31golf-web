import { 해외골프Page } from "@component/page/해외골프Page";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-10" />
      <해외골프Page />
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

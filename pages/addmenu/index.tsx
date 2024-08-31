import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>국내/해외골프는 역시 31골프</title>
      </Head>
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

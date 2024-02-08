import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>Home</title>
      </Head>
      <div>hihi2</div>
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

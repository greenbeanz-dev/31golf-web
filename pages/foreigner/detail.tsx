import Head from "next/head";

function OverseasDetailPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>31골프 - Foreigner tour only</title>
      </Head>
      <div className="flex items-start w-full h-full">
        <img
          src={"/images/foreigner_1.jpeg"}
          alt="Incheon Wellness"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default OverseasDetailPage;

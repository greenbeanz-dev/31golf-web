import Head from "next/head";

function OverseasPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>31골프 - Foreigner tour only</title>
      </Head>
      <div className="flex items-start w-full h-full">
        {/* <ImageCard
          url="/images/foreigner_1.jpeg"
          description="Guidelines for Health Screening"
        /> */}
        <ImageCard
          url="/images/foreigner_2.jpeg"
          description="Incheon Wellness Medical Tour"
        />
      </div>
    </div>
  );
}

export default OverseasPage;

function ImageCard({ url, description }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden m-4 w-72">
      <img
        src={url}
        alt="Incheon Wellness"
        className="w-full h-auto aspect-square"
      />
      <p className="p-4 text-sm text-gray-700">{description}</p>
    </div>
  );
}

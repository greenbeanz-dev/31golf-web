import Head from "next/head";

function OverseasPage() {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>31골프 - 반려동물 사랑🐶🐱</title>
      </Head>
      <div className="flex items-start w-full h-full">
        {/* <ImageCard
          url="/images/foreigner_1.jpeg"
          description="Guidelines for Health Screening"
        /> */}
        {/* <ImageCard
          url="/images/foreigner_2_list.jpeg"
          description="Incheon Wellness Medical Tour"
          id={2}
        /> */}
        {/* <ImageCard
          url="/images/foreigner_3_list.png"
          description="반려동물 사랑🐶🐱 ₩10,000"
          id={3}
        /> */}
        <ImageCard
          url="/images/foreigner_4_list.png"
          description="반려동물 사랑🐶🐱 ₩10,000"
          id={4}
        />
        <ImageCard
          url="/images/foreigner_5_list.png"
          description="반려동물 사랑🐶🐱 ₩20,000"
          id={5}
        />
        <ImageCard
          url="/images/foreigner_6_list.png"
          description="반려동물 사랑🐶🐱 ₩30,000"
          id={6}
        />
      </div>
    </div>
  );
}

export default OverseasPage;

function ImageCard({ url, description, id }) {
  return (
    <div
      className="border rounded-lg shadow-lg overflow-hidden m-4 w-72 cursor-pointer"
      onClick={() => {
        window.location.href = `/foreigner/detail/${id}`;
      }}
    >
      <img
        src={url}
        alt="Incheon Wellness"
        className="w-full h-auto aspect-square"
      />
      {/* <p className="p-4 text-sm text-gray-700">{description}</p> */}
    </div>
  );
}

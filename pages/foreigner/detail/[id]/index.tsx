import Head from "next/head";
import { useRouter } from "next/router";

function OverseasDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Head>
        <title>31골프 - 반려동물 사랑🐶🐱</title>
      </Head>
      {id === "2" ? (
        <div className="flex items-start w-full h-full">
          <img
            src={`/images/foreigner_${id}_detail.jpeg`}
            alt="Incheon Wellness"
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="flex items-start w-full h-full">
          <img
            src={`/images/foreigner_${id}_detail.png`}
            alt="Incheon Wellness"
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}

export default OverseasDetailPage;

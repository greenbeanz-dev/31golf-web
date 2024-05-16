import CommonModal from "@component/molecule/modal/CommonModal";
import 메인Page from "@component/page/메인Page";
import { useDisclosure } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export function Home({
  popUp,
}: {
  popUp: {
    image: string;
    type: string;
    url: string;
  } | null;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  console.log(popUp);

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <Head>
          <title>Home</title>
        </Head>
        <div style={{ height: 40 }} />
        <메인Page />
      </div>
      {popUp && (
        <CommonModal
          isOpen={true}
          onClose={onClose}
          closeAction={{
            action: () => {
              onClose();
            },
            isLoading: false,
            label: "취소",
          }}
        >
          <Link href={popUp?.url}>
            <img src={popUp?.image} alt="popup" />
          </Link>
          asdfasdfas
        </CommonModal>
      )}
    </>
  );
}

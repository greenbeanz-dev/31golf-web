import CommonModal from "@component/molecule/modal/CommonModal";
import 메인Page from "@component/page/메인Page";
import { Checkbox, useDisclosure } from "@nextui-org/react";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getItemWithExpiry,
  setItemWithExpiry,
} from "../src/utils/storage/localStorageUtils";

function Home({
  popUp,
}: {
  popUp: {
    image: string;
    type: string;
    url: string;
  } | null;
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <Head>
          <title>Home</title>
        </Head>
        <div style={{ height: 40 }} />
        <메인Page />
      </div>
      {popUp && <EventPopup popUp={popUp} />}
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const popUpResponse = await prisma.web_setting.findFirst({
    select: {
      image: true,
      type: true,
      url: true,
    },
    where: {
      AND: {
        display_begin: {
          lte: new Date(),
        },
        display_end: {
          gte: new Date(),
        },
        type: {
          equals: "POPUP",
        },
      },
    },
  });

  return {
    props: {
      popUp: popUpResponse || null,
    },
  };
}

const EventPopup = ({
  popUp,
}: {
  popUp: {
    image: string;
    type: string;
    url: string;
  };
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isCheck하루동안보지않기, setIsCheck하루동안보지않기] = useState(false);

  useEffect(() => {
    // Check if the item is expired
    const storedId = getItemWithExpiry("다시보지않기");
    if (storedId) {
      onClose();
    } else {
      onOpen();
    }
  }, []);

  const handle하루동안보지않기 = () => {
    if (isCheck하루동안보지않기) {
      const ttl = 24 * 60 * 60 * 1000;
      const id = popUp?.url;
      setItemWithExpiry("다시보지않기", id, ttl);
    }
    onClose();
  };

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      confirmAction={{
        action: handle하루동안보지않기,
        isLoading: false,
        label: "확인",
      }}
      footer={
        <>
          <Checkbox
            checked={isCheck하루동안보지않기}
            onValueChange={setIsCheck하루동안보지않기}
          >
            하루동안 보지 않기
          </Checkbox>
        </>
      }
    >
      <Link href={popUp?.url}>
        <img
          src={popUp?.image}
          alt="popup"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            maxWidth: "800px",
            maxHeight: "600px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </Link>
    </CommonModal>
  );
};

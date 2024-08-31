import { 골프상세Page } from "@component/page/골프상세Page";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { Suspense } from "react";

function Detail({
  data: { productImageList },
}: {
  data: {
    productImageList: {
      id: number;
      productId: number;
      name: string;
      url: string;
    }[];
  };
}) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Head>
        <title>국내/해외골프는 역시 31골프</title>
      </Head>
      <div style={{ height: 20 }} />
      <Suspense fallback={<div></div>}>
        <골프상세Page
          productId={Number(id)}
          productImageList={productImageList}
        />
      </Suspense>
    </div>
  );
}

export default Detail;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  const prisma = new PrismaClient();
  const productImageResponse = await prisma.product_image.findMany({
    select: {
      id: true,
      product_id: true,
      name: true,
      url: true,
    },
    where: {
      product_id: { equals: Number(id) },
    },
  });

  const serializabledData = productImageResponse.map((item) => {
    return {
      id: Number(item.id),
      productId: Number(item.product_id),
      name: item.name,
      url: item.url,
    };
  });

  return {
    props: {
      data: {
        productImageList: serializabledData,
      },
    },
  };
};

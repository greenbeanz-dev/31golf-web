import { SkeletonBoundary } from "@component/error/SkeletonBoundary";
import { GolfDetailSample } from "@component/page/GolfDetailSample";
import { 골프상세Page } from "@component/page/골프상세Page";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import { useRouter } from "next/router";

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
      <SkeletonBoundary
        label="상품 상세를 불러오는 중"
        id={`product-detail-${String(id)}`}
        resetKeys={[id]}
        skeleton={<GolfDetailSample />}
      >
        <골프상세Page
          productId={Number(id)}
          productImageList={productImageList}
        />
      </SkeletonBoundary>
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

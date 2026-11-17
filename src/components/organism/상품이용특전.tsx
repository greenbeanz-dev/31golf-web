import { isImagePath } from "../../utils/text/isImagePath";

interface 상품이용특전Props {
  benefit: string;
}

const 상품이용특전 = ({ benefit }: 상품이용특전Props) => {
  const content = benefit.trim();
  const showImage = isImagePath(content);

  return (
    <div
      className="flex flex-col w-full"
      style={{
        maxWidth: "min(822px, 95vw)",
      }}
    >
      <div className="text-xl font-bold">이용특전 및 참조사항</div>
      <div className="pt-4" />
      {showImage ? (
        <img
          src={content}
          alt="이용특전 및 참조사항"
          className="w-full h-auto"
        />
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="text-[14px] font-normal text-opacity-70 whitespace-pre">
            {benefit}
          </div>
        </div>
      )}
    </div>
  );
};

export default 상품이용특전;

import { isImagePath } from "../../utils/text/isImagePath";

interface 상품유의사항Props {
  notice: string;
}

const 상품유의사항 = ({ notice }: 상품유의사항Props) => {
  const content = notice.trim();
  const showImage = isImagePath(content);

  return (
    <div className="flex flex-col max-w-[822px] w-full">
      <div className="text-xl font-bold">유의사항 및 참조사항</div>
      <div className="pt-4" />
      {showImage ? (
        <img
          src={content}
          alt="유의사항 및 참조사항"
          className="w-full h-auto"
        />
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="text-[14px] font-normal text-opacity-70 whitespace-pre">
            {notice}
          </div>
        </div>
      )}
    </div>
  );
};

export default 상품유의사항;

interface 상품유의사항Props {
  notice: string;
}

const 상품유의사항 = ({ notice }: 상품유의사항Props) => {
  return (
    <div className="flex flex-col max-w-[822px]">
      <div className="text-xl font-bold">유의사항 및 참조사항</div>
      <div className="pt-4" />
      <div className="text-[14px] font-normal text-opacity-70 whitespace-pre text-wrap">
        {notice}
      </div>
    </div>
  );
};

export default 상품유의사항;

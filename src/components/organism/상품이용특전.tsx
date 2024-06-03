interface 상품이용특전Props {
  benefit: string;
}

const 상품이용특전 = ({ benefit }: 상품이용특전Props) => {
  return (
    <div className="flex flex-col max-w-[822px]">
      <div className="text-xl font-bold">이용특전 및 참조사항</div>
      <div className="pt-4" />
      <div className="text-[14px] font-normal text-opacity-70 whitespace-pre text-wrap">
        {benefit}
      </div>
    </div>
  );
};

export default 상품이용특전;

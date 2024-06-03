export const MobileFooter = () => {
  const 상호 = "(주)삼일골프투어";
  const 사업자등록번호 = "129-86-21784";
  const 관광사업등록증 = "제 2008-000014호";
  const 통신판매업신고 = "제 2008-경기성남-0724호";
  const 대표전화 = "02-561-8008 / 031-719-0031";
  const 팩스 = "02-6008-0001";
  const 개인정보관리책임자 = "삼일골프";
  const 이메일 = "31golf@gmail.com";
  const 주소1 = "서울특별시 종로구 삼일대로 30길 10-3 ";
  const 주소2 = "(낙원동 56-0) 각연빌딩 5층";

  return (
    <div className="flex flex-col items-start py-10 px-[3vw] mb-24 md:mb-0">
      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full gap-2">
          <div className="flex">
            <div className="text-xs font-bold">상호</div>
            <div className="text-xs font-medium"> {상호}</div>
          </div>
          <div className="flex">
            <div className="text-xs font-bold">사업자등록번호</div>
            <div className="text-xs font-medium">{사업자등록번호}</div>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold">관광사업등록증</div>
          <div className="text-xs font-medium"> {관광사업등록증}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold">통신판매업신고</div>
          <div className="text-xs font-medium"> {통신판매업신고}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold">대표전화</div>
          <div className="text-xs font-medium"> {대표전화}</div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex gap-1">
            <div className="text-xs font-bold">팩스</div>
            <div className="text-xs font-medium"> {팩스}</div>
          </div>
          <div className="flex gap-1">
            <div className="text-xs font-bold">개인정보관리책임자</div>
            <div className="text-xs font-medium">{개인정보관리책임자}</div>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold">이메일</div>
          <div className="text-xs font-medium"> {이메일}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold">주소</div>
          <div className="text-xs font-medium"> {주소1}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-xs font-bold" style={{ visibility: "hidden" }}>
            주소
          </div>
          <div className="text-xs font-medium"> {주소2}</div>
        </div>
      </div>
    </div>
  );
};

import { Divider } from "@nextui-org/react";
import Image from "next/image";

export const Footer = () => {
  const list = [
    {
      title: "회사소개",
      url: "",
    },
    {
      title: "이용약관",
      url: "https://obvious-raven-5f6.notion.site/f09ab42a5fd14f558ff643f20d2258b4?pvs=4",
    },
    {
      title: "개인정보처리방침",
      url: "https://obvious-raven-5f6.notion.site/f09ab42a5fd14f558ff643f20d2258b4?pvs=4",
    },
    {
      title: "해외여행약관",
      url: "https://obvious-raven-5f6.notion.site/0c13af4d0e664027a48f76a2023169c3",
    },
    {
      title: "해외여행보험약관",
      url: "https://obvious-raven-5f6.notion.site/9aaac302f3e64dab8e5d6a89f185bf17?pvs=4",
    },
  ];

  const firstRow = [
    { title: "상호", content: "(주)삼일골프투어" },
    {
      title: "주소",
      content:
        "서울특별시 종로구 삼일대로 30길 10-3 (낙원동 56-0) 각연빌딩 5층",
    },
    { title: "사업자등록번호", content: "129-86-21784" },
    { title: "관광사업등록증", content: "제 2008-000014호" },
    { title: "통신판매업신고", content: "제 2008-경기성남-0724호" },
  ];

  const secondRow = [
    { title: "대표전화", content: "02-561-8008 / 031-719-0031" },
    { title: "팩스", content: "02-6008-0001" },
    { title: "개인정보관리책임자", content: "삼일골프" },
    { title: "이메일", content: "31golf@gmail.com" },
  ];
  return (
    <div>
      <div className="w-full h-16 border-t border-b border-black border-opacity-10">
        <div
          className="h-full"
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <div className="h-full flex items-center justify-around">
            {list.map((item, index) => (
              <>
                <div
                  key={index}
                  className="text-sm text-gray-500 cursor-pointer"
                  onClick={() => {
                    if (item.url) {
                      window.open(item.url, "_blank");
                    }
                  }}
                >
                  {item.title}
                </div>
                {index === list.length - 1 ? null : (
                  <Divider className="h-8" orientation="vertical" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="h-4" />
      <div className="pl-8">
        <Image
          alt="footer_logo"
          src={"/images/logo/31Logo.png"}
          width={180}
          height={78.96}
        />
        <div className="h-4" />
        <div className="flex gap-4">
          {firstRow.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-1 text-black text-opacity-70 text-xs"
            >
              <div className="font-bold">{item.title}</div>
              <div className="font-medium">{item.content}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          {secondRow.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-1 text-black text-opacity-70 text-xs"
            >
              <div className="font-bold">{item.title}</div>
              <div className="font-medium">{item.content}</div>
            </div>
          ))}
        </div>
        <div className="h-4" />
      </div>
    </div>
  );
};

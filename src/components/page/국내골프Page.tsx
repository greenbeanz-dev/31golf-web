import { 상품이미지Component } from "@component/Image/상품이미지Component";
import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useState } from "react";
import { theme } from "../../../pages/_app";

export function 국내골프Page() {
  return (
    <div>
      <div className="text-xl font-bold">국내골프 전체보기</div>
      <div style={{ fontSize: 16, fontWeight: "normal" }}>
        삼일골프의 다양한 투어 상품을 만나보세요!
      </div>
      <div style={{ minHeight: 24 }} />
      <TabBar />
    </div>
  );
}

const TabBar = () => {
  const navItem = [
    {
      label: "강원도",
    },
    {
      label: "충청도",
    },
    {
      label: "전라도",
    },
    {
      label: "경상도",
    },
    {
      label: "제주도",
    },
  ];
  const [tab, setTab] = useState("강원도");
  return (
    <>
      <Navbar
        style={{
          width: "100%",
          justifyContent: "flex-start", // 탭 왼쪽 정렬
          overflowX: "auto",
        }}
        classNames={{
          wrapper: ["px-0", "cursor-pointer", "w-full"],
          item: [
            "flex",
            "relative",
            "h-full",
            "cursor-pointer",
            "items-center",
            "justify-start",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-sky-900",
          ],
          menu: ["px-0"],
        }}
      >
        <NavbarContent>
          {navItem.map((item) => {
            return (
              <NavbarItem
                className="px-4"
                key={item.label}
                isActive={tab === item.label}
                onClick={() => {
                  setTab(item.label);
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <div style={{ minHeight: 24 }} />
      {tab == "강원도" && (
        <div>
          <강원도Tab />
        </div>
      )}
      {tab == "충청도" && <div>충청도</div>}
      {tab == "전라도" && <div>전라도</div>}
      {tab == "경상도" && <div>경상도</div>}
      {tab == "제주도" && <div>제주도</div>}
    </>
  );
};

const 강원도Tab = () => {
  const ImageList = [
    {
      id: 1,
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)1",
      description: "바다를 품은 골프장1!",
      price: 246000,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 2,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)2",
      description: "바다를 품은 골프장2!",
      price: 246001,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 3,
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)3",
      description: "바다를 품은 골프장3!",
      price: 246003,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 4,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)4",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 5,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)5",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 6,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)6",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 7,
      url: "/images/logo/golf_img1.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)7",
      description: "바다를 품은 골프장3!",
      price: 246003,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 8,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)8",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 9,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)9",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
    {
      id: 10,
      url: "/images/logo/golf_img2.png",
      title: "여수 디오션 C.C 1박 2일 (36홀)10",
      description: "바다를 품은 골프장4!",
      price: 246004,
      contents: ["36홀", "1박 2일", "조식/중식/석식 포함", "교통편 포함"],
      discount: 37,
    },
  ];
  return (
    <div className="w-full">
      {/* 반응형 여기 수정  */}
      <div className="w-full flex flex-wrap justify-between">
        {ImageList.map((item, idx) => {
          return (
            <상품이미지Component
              key={idx}
              item={item}
              mobileWidth={160}
              mobileHeight={160}
              pcWidth={384}
              pcHeight={295}
              discount={item.discount}
            />
          );
        })}
      </div>

      <div style={{ minHeight: 24 }} />
      <Button
        style={{
          width: "100%",
          height: 48,
          backgroundColor: theme.colors.primary,
          color: "white",
        }}
      >
        <img src={"/images/logo/add-circle.png"} className="w-6 h-6" />
        투어 상품 더보기
      </Button>
    </div>
  );
};

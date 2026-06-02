import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, type FormEvent } from "react";

type HeaderSearchBarProps = {
  variant: "desktop" | "mobile";
};

export default function HeaderSearchBar({ variant }: HeaderSearchBarProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const submitSearch = () => {
    const trimmed = keyword.trim();
    if (!trimmed) return;
    setKeyword("");
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitSearch();
  };

  const isMobile = variant === "mobile";

  return (
    <form
      onSubmit={onSubmit}
      className={
        isMobile
          ? "w-full bg-white py-3"
          : "flex items-center shrink-0 self-end"
      }
    >
      <div
        className={
          isMobile
            ? "flex w-full items-center gap-1 border-2 border-[#004964] rounded-full px-3 bg-white"
            : "flex h-[60px] w-[360px] items-center gap-1 border-2 border-[#004964] rounded-full px-3 bg-white"
        }
      >
        <Input
          aria-label="상품 검색"
          placeholder="상품명을 검색해보세요"
          value={keyword}
          onValueChange={setKeyword}
          size={isMobile ? "sm" : "md"}
          variant="flat"
          classNames={{
            base: "flex-1 min-w-0",
            inputWrapper: [
              "border-0 shadow-none h-10 min-h-10 py-0 bg-transparent",
              "group-data-[focus=true]:border-0 group-data-[focus=true]:ring-0 group-data-[focus=true]:ring-offset-0 group-data-[focus=true]:shadow-none",
              "data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent",
            ],
            input: [
              isMobile ? "text-sm leading-none" : "text-base leading-none",
              "!outline-none !ring-transparent focus:outline-none",
            ],
          }}
          className="flex-1"
        />
        <button
          type="submit"
          aria-label="검색"
          className="flex h-10 w-10 items-center justify-center shrink-0 rounded-full hover:bg-[#f0f0f0]"
        >
          <Image
            src="/icons/search.webp"
            alt=""
            width={isMobile ? 22 : 28}
            height={isMobile ? 22 : 28}
          />
        </button>
      </div>
    </form>
  );
}

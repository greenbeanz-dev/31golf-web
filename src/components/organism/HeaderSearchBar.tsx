import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, type FormEvent } from "react";

type HeaderSearchBarProps = {
	variant: "desktop" | "mobile";
};

export default function HeaderSearchBar({ variant }: HeaderSearchBarProps) {
	const router = useRouter();
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		if (router.pathname !== "/search") return;
		const q = typeof router.query.q === "string" ? router.query.q : "";
		setKeyword(q);
	}, [router.pathname, router.query.q]);

	const submitSearch = () => {
		const trimmed = keyword.trim();
		if (!trimmed) return;
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
					? "w-full border-b border-[#e0e0e0] bg-white px-4 py-3"
					: "flex items-center shrink-0 self-end"
			}
		>
			<div
				className={
					isMobile
						? "flex w-full items-center gap-1"
						: "flex h-10 w-60 items-center gap-1 border border-[#e0e0e0] rounded-full px-3 bg-white"
				}
			>
				<Input
					aria-label="상품 검색"
					placeholder="상품명을 검색해보세요"
					value={keyword}
					onValueChange={setKeyword}
					size="sm"
					variant="bordered"
					classNames={{
						base: "flex-1 min-w-0",
						inputWrapper: isMobile
							? "border-[#e0e0e0] rounded-full"
							: "border-0 shadow-none h-8 min-h-8 py-0 bg-transparent",
						input: "text-sm leading-none",
					}}
					className="flex-1"
				/>
				<button
					type="submit"
					aria-label="검색"
					className="flex h-8 w-8 items-center justify-center shrink-0 rounded-full hover:bg-[#f0f0f0]"
				>
					<Image src="/icons/search.webp" alt="" width={22} height={22} />
				</button>
			</div>
		</form>
	);
}

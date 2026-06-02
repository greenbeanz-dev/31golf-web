import Link from "next/link";
import type { ReactNode } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { IoGolf } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { useIsMobile } from "../../hooks/useIsMobile";

const MENU_ITEMS: {
	label: string;
	href: string;
	borderColor: string;
	icon: ReactNode;
}[] = [
	{
		label: "처음으로",
		href: "/",
		borderColor: "#EC992A",
		icon: <TiHome size={32} color="#EC992A" />,
	},
	{
		label: "국내골프",
		href: "/domestic",
		borderColor: "#3EBC8A",
		icon: <IoGolf size={32} color="#3EBC8A" />,
	},
	{
		label: "제주골프",
		href: "/jeju",
		borderColor: "#984E5F",
		icon: <FaUmbrellaBeach size={32} color="#984E5F" />,
	},
	{
		label: "해외골프",
		href: "/overseas",
		borderColor: "#9FD3F4",
		icon: <FaPlaneDeparture size={32} color="#9FD3F4" />,
	},
];

export function MobileMenu() {
	const isMobile = useIsMobile();

	if (!isMobile) return null;

	return (
		<div className="w-full">
			<div className="min-h-4" />
			<div className="flex w-full items-center gap-1">
				{MENU_ITEMS.map(({ label, href, borderColor, icon }) => (
					<Link
						key={href}
						href={href}
						className="flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-2 rounded-xl border-2 py-4"
						style={{ borderColor }}
					>
						{icon}
						<span className="text-sm">{label}</span>
					</Link>
				))}
			</div>
		</div>
	);
}

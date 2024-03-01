"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const NavLink = ({ children, href }: { href: string; children: React.ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			className={clsx("text-blue-200", "hover:text-blue-400", isActive && "font-semibold")}
			href={href}
		>
			{children}
		</Link>
	);
};

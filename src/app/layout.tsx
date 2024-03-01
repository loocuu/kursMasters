import type { Metadata } from "next";
import Link from "next/link";
import { Roboto, Poppins, Inter, Syne } from "next/font/google";
import "./globals.css";
import { NavLink } from "@/ui/atoms/NavLink";

const inter = Syne({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" className="h-full">
			<body className={inter.className + " flex h-full w-full flex-col"}>
				<nav>
					<ul className="flex w-full justify-center gap-3 p-2">
						<li>
							<NavLink href="/">Home</NavLink>
						</li>
						<li>
							<NavLink href="/products">Products</NavLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto flex flex-1 p-12">{children}</section>
				<footer>
					<p className="text-center text-sm text-gray-400">
						<Link href="regulamin">Regulamin</Link> &copy; 2024
					</p>
				</footer>
			</body>
		</html>
	);
}

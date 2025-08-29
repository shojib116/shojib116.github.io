import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/lib/contexts/theme-context";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Md. Nazmul Hasan Shajib - Fullstack Developer",
	description:
		"Servant of ALLAH with a vision for making an impact. Fullstack Developer specializing in Go, Node.js, React, and Next.js.",
	keywords: [
		"fullstack developer",
		"Go",
		"Node.js",
		"React",
		"Next.js",
		"competitive programming",
	],
	authors: [{ name: "Md. Nazmul Hasan Shajib" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} antialiased bg-background`}>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}

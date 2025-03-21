import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tools Hub",
    description: "Personal tools collection",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script
                    async
                    strategy="afterInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6790184075172298"
                    crossorigin="anonymous"
                />
            </head>

            <body
                className={`${inter.className} antialiased min-h-screen flex flex-col`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}

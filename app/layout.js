import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tools Hub",
    description: "Personal tools collection",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6790184075172298"
                    crossOrigin="anonymous"
                ></script>
            </head>

            <body
                className={`${inter.className} antialiased h-screen flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar className="h-16 fixed inset-x-0 top-0 z-50" />
                    <div className="flex-1 pt-16 w-full max-w-screen-xl mx-auto overflow-hidden">
                        {children}
                    </div>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar";

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
                    crossorigin="anonymous"
                ></script>
            </head>

            <body
                className={`${inter.className} antialiased min-h-screen flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="h-14">
                        <Navbar />
                    </div>

                    <div className="flex-1">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}

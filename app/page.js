import Image from "next/image";
import Link from "next/link";

// Define tools with their details
const TOOLS = [
    {
        name: "计算器",
        description: "简单实用的计算工具",
        icon: "/window.svg",
        href: "/calculator",
        previewUrl: "/calculator",
    },
    {
        name: "天气查询",
        description: "实时天气信息",
        icon: "/globe.svg",
        href: "/weather",
        previewUrl: "/weather",
    },
    {
        name: "记事本",
        description: "快速记录灵感",
        icon: "/next.svg",
        href: "/notebook",
        previewUrl: "/notebook",
    },
    {
        name: "image converter",
        description: "image converter",
        icon: "/next.svg",
        href: "/image-converter",
        previewUrl: "/image-converter",
    },
];

export default function Home() {
    return (
        <div className="flex-1 bg-background p-8 sm:p-20 flex flex-col items-center justify-center">
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {TOOLS.map((tool) => (
                    <div key={tool.name} className="">
                        <Link href={tool.href} className="block relative">
                            <div className="bg-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center transform hover:-translate-y-2">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {tool.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {tool.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </main>
        </div>
    );
}

import NavCard from "./components/NavCard";
// Define tools with their details
const TOOLS = [
    {
        title: "计算器",
        description: "简单实用的计算工具",
        url: "/calculator",
    },
    {
        title: "天气查询",
        description: "实时天气信息",
        url: "/weather",
    },
    {
        title: "记事本",
        description: "快速记录灵感",
        url: "/notebook",
    },
    {
        title: "图片转换",
        description:
            "图片转换，就是图片转换，可以转换图片daljdlf   觉得萨里看见啊多少分呢格秒",
        url: "/image-converter",
    },
    {
        title: "图片裁切",
        description: "图片裁切",
        url: "/image-cropperssjksdajlfaj",
    },
    {
        title: "汇率转换",
        description: "汇率转换",
        url: "/currency-converter",
    },
    {
        title: "英制转换",
        description: "英制转换",
        url: "/unit-converter",
    },
];

export default function Home() {
    return (
        <main className="flex-center px-6 py-12">
            <div className="w-full max-w-screen-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {TOOLS.map((tool) => (
                    <NavCard
                        key={tool.title}
                        {...tool}
                        className="hover:scale-105 transition-all duration-300"
                    />
                ))}
            </div>
        </main>
    );
}

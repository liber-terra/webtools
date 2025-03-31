import NavCard from "./components/NavCard";
import { TOOLS } from "./data/Tools";

export default function Home() {
    return (
        <main className="flex-center px-6 py-12">
            <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                {TOOLS.map((tool) => (
                    <NavCard
                        key={tool.title}
                        {...tool}
                        className="hover:scale-105 transition-all duration-300"
                        aria-label={`Go to ${tool.title}`}
                        aria-describedby={`description-${tool.title}`}
                    />
                ))}
            </div>
        </main>
    );
}

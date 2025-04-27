import { redirect } from "next/navigation";
// import PageWrapper from "./components/page-wrapper";
// import NavCard from "./components/nav-card";
// import { TOOLS } from "./data/TOOLS";

export default function Home() {
    return (
        // <PageWrapper title="Welcome to My Tools Hub">
        //     <main className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        //         {TOOLS.map((tool) => (
        //             <NavCard
        //                     key={tool.title}
        //                     {...tool}
        //                     className="hover:scale-105 transition-all duration-300"
        //                     aria-label={`Go to ${tool.title}`}
        //                     aria-describedby={`description-${tool.title}`}
        //                 />
        //         ))}
        //     </main>
        // </PageWrapper>
        redirect("/file-sharing")
    );
}

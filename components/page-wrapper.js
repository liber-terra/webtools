import QA from "@/components/ui/qa";
import Stats from "@/components/ui/stats";

export default function PageWrapper({ title, description, getStats, children, qa }) {
    return (
        <div className="container mx-auto px-4 py-16 flex items-center flex-col gap-16">
            <header className="flex flex-col items-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-chart-1 to-chart-4 bg-clip-text text-transparent animate-gradient">
                    {title}
                </h1>
                {/* {description && (
                    <p className="max-w-xl text-sm leading-relaxed ">
                        {description}
                    </p>
                )} */}
            </header>

            {children}

            {/* QA */}
            {qa && <QA qa={qa} />}

            {/* Stats */}
            {getStats && <Stats getStats={getStats} />}
        </div>
    );
}

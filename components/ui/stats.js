import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function StatsData({ getStats }) {
    const stats = await getStats();
    return (
        <ul className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
                <li key={idx} className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                </li>
            ))}
        </ul>
    );
}

function StatsSkeleton() {
    return (
        <ul className="grid grid-cols-2 gap-4">
            <li className="flex flex-col items-center gap-1">
                <Skeleton className="w-1/2 h-6" />
                <Skeleton className="w-full h-6" />
            </li>
            <li className="flex flex-col items-center gap-1">
                <Skeleton className="w-1/2 h-6" />
                <Skeleton className="w-full h-6" />
            </li>
        </ul>
    );
}

export default async function Stats({ getStats }) {
    return (
        <section className="w-full max-w-2xl border border-border rounded-lg shadow-sm px-6 py-4">
            <h2 className="text-lg font-semibold mb-4">Stats</h2>
            <Suspense fallback={<StatsSkeleton />}>
                <StatsData getStats={getStats} />
            </Suspense>
        </section>
    );
}

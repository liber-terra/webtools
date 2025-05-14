import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PageWrapper({ title, description, stats, children, qa }) {
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

            {/* QA 模块卡片化 + 阴影，读起来自带分隔感 */}
            {qa && (
                <section className="w-full max-w-2xl border border-border rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible>
                        {qa.map((q, idx) => (
                            <AccordionItem key={idx} value={q.question}>
                                <AccordionTrigger>{q.question}</AccordionTrigger>
                                <AccordionContent>{q.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            )}

            {/* Stats 改为网格 + 卡片，让数字更突出 */}
            {stats?.length ? (
                <section className="w-full max-w-2xl border border-border rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Stats</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <li key={idx} className="w-64 h-24 px-4 py-3 flex flex-col items-center gap-1">
                                <span className="text-xl md:text-xl font-semibold">{stat.value}</span>
                                <span className="text-sm md:text-base font-medium text-muted-foreground">
                                    {stat.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            ) : null}
        </div>
    );
}

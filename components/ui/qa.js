import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function QA({ qa }) {
    return (
        <section className="w-full max-w-2xl border border-border rounded-lg shadow-sm px-6 py-4">
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
    );
}

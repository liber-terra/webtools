import PageWrapper from "@/components/page-wrapper";
import Main from "./main";
import { getStats } from "@/app/file-sharing/lib";

export const metadata = {
    title: "Upload and Share Your Files Across Devices for Free",
    description: "Upload and share your files across devices for free.",
};

export default async function Page() {
    const title = metadata.title;
    const description = metadata.description;
    const qa = [
        {
            question: "What is the maximum file size for files?",
            answer: "The maximum file size for files is currently 4MB.",
        },
        {
            question: "How long will my files be stored?",
            answer: "Your files will be stored indefinitely. However, please note that we reserve the right to remove any files that violate our terms of service.",
        },
        {
            question: "How can I delete my files?",
            answer: "We currently do not support deleting files. However, you can contact us to delete your files.",
        },
    ];

    return (
        <PageWrapper title={title} description={description} getStats={getStats} qa={qa}>
            <Main />
        </PageWrapper>
    );
}

import PageWrapper from "@/components/page-wrapper";
import { getStats } from "@/app/image/host/lib";
import Main from "./main";

export const metadata = {
    title: "Upload and Host Your Images for Free",
    description: "Upload and host your images for free. No registration required.",
};

export default async function Page() {
    const title = metadata.title;
    const description = metadata.description;
    const qa = [
        {
            question: "What is the maximum file size for images?",
            answer: "The maximum file size for images is currently 4MB.",
        },
        {
            question: "How long will my images be stored?",
            answer: "Your images will be stored indefinitely. However, please note that we reserve the right to remove any images that violate our terms of service.",
        },
        {
            question: "How can I delete my images?",
            answer: "We currently do not support deleting images. However, you can contact us to delete your images.",
        },
    ];

    return (
        <PageWrapper title={title} description={description} getStats={getStats} qa={qa}>
            <Main />
        </PageWrapper>
    );
}

import PageWrapper from "@/app/components/page-wrapper";
import Main from "./main";
import { getStats } from "@/app/lib/image/host";
import { formatFileSize } from "@/app/lib/utils";

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

    const _stats = await getStats();
    const stats = [
        {
            label: "images hosted online",
            value: _stats.hosted_count,
        },
        {
            label: "image size hosted",
            value: formatFileSize(_stats.hosted_size_bytes),
        },
    ];
    return (
        <PageWrapper title={title} description={description} stats={stats} qa={qa}>
            <Main />
        </PageWrapper>
    );
}

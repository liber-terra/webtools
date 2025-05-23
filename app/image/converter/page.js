import PageWrapper from "@/components/page-wrapper";
import Main from "./main";
import { getStats } from "@/app/image/converter/lib";

export const metadata = {
    title: "Image Format Converter",
    description: "Quickly convert images to PNG, JPEG, WEBP and more.",
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
            question: "What is image quality?",
            answer: "Image quality is the level of detail in an image. The higher the quality, the more detail in the image.",
        },
        {
            question: "What is png?",
            answer: "PNG is a lossless image format that is popular for its high quality and small size.",
        },
        {
            question: "What is jpeg?",
            answer: "JPEG is a lossy image format that is popular for its high quality and small size.",
        },
        {
            question: "What is webp?",
            answer: "WebP is a modern image format that is popular for its high quality and small size. Often used for websites and social media.",
        },
    ];

    return (
        <PageWrapper title={title} description={description} qa={qa} getStats={getStats}>
            <Main />
        </PageWrapper>
    );
}

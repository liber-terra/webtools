import PageWrapper from "@/app/components/page-wrapper";
import Main from "./main";

const title = "Image Format Converter";
const description = "Quickly convert images to PNG, JPEG, WEBP and more.";
const stats = [
    {
        label: "images converted online",
        value: 0,
    },
    {
        label: "images converted online",
        value: "0 MB",
    },
];
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

export default function Page() {
    return (
        <PageWrapper
            title={title}
            description={description}
            stats={stats}
            qa={qa}
        >
            <Main />
        </PageWrapper>
    );
}

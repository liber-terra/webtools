import PageWrapper from "@/app/components/page-wrapper";
import Main from "./main";

const title = "Upload and Host Your Images for Free";
const description =
    "Upload and host your images for free. No registration required.";
const stats = [
    {
        label: "images hosted online",
        value: 0,
    },
    {
        label: "images hosted online",
        value: "0 MB",
    },
];
const qa = [
    {
        question: "What is the maximum file size for images?",
        answer: "The maximum file size for images is currently 4MB.",
    },
    {
        question: "How long will my images be stored?",
        answer: "Your images will be stored indefinitely. However, please note that we reserve the right to remove any images that violate our terms of service.",
    },
];
export const metadata = {
    title: title,
    description: description,
};

export default async function Page() {
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

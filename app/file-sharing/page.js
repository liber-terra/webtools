import PageWrapper from "@/app/components/page-wrapper";
import Main from "./main";

export const metadata = {
    title: "Upload and Share Your Files Across Devices for Free",
    description: "Upload and share your files across devices for free.",
};

export default async function Page() {
    return (
        <PageWrapper title="Upload and Share Your Files Across Devices">
            <Main />
        </PageWrapper>
    );
}

import PageWrapper from "../components/page-wrapper";
import Main from "./main";

export const metadata = {
    title: "Upload and Share Your Images for Free",
    description: "Upload and share your images for free.",
};

export default async function Page() {
    return (
        <PageWrapper title="Upload and Share Your Images for Free">
            <Main />
        </PageWrapper>
    );
}

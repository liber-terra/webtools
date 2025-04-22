import PageWrapper from "../components/page-wrapper";
import Main from "./main";

export const metadata = {
    title: "Image Format Converter - Free Online Tool",
    description: "Quickly convert images to PNG, JPEG, WEBP and more.",
};

export default function Page() {
    return (
        <PageWrapper title="Image Format Converter">
            <Main />
        </PageWrapper>
    );
}

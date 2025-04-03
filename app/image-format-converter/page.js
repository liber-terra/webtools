import PageWrapper from "../components/PageWrapper";
import ImageConverterMain from "./ImageConverterMain";

export const metadata = {
    title: "Image Format Converter - Free Online Tool",
    description: "Quickly convert images to PNG, JPEG, WEBP and more.",
};

export default function ImageConverterPage() {
    return (
        <PageWrapper title="Image Format Converter">
            <ImageConverterMain />
        </PageWrapper>
    );
}

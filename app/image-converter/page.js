import ImageConverterMain from "./ImageConverterMain";

export const metadata = {
    title: "Image Converter - Free Online Tool",
    description: "Quickly convert images to PNG, JPEG, WEBP and more.",
};

export default function ImageConverterPage() {
    return (
        <div className="grid grid-rows-[auto_auto_1fr] justify-items-center pt-10 md:pt-40 gap-20">
            <h1 className="text-4xl font-bold">Image Converter</h1>
            <ImageConverterMain className="" />
            <div />
        </div>
    );
}

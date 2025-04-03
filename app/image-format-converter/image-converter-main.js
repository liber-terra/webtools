"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ImgUploader from "@/app/components/img-uploader";
import ImgDownloader from "@/app/components/img-downloader";
import { cn } from "@/lib/utils";

export default function ImageConverterMain({ className }) {
    const [originalImage, setOriginalImage] = useState(null);
    const [convertedImage, setConvertedImage] = useState(null);
    const [format, setFormat] = useState("png");
    const [quality, setQuality] = useState(1);
    const [originalSize, setOriginalSize] = useState({
        width: 1024,
        height: 1024,
    });
    const [targetScale, setTargetScale] = useState(1);
    const [targetSize, setTargetSize] = useState({
        width: 1024,
        height: 1024,
    });
    const [originalFileSize, setOriginalFileSize] = useState(0);
    const [convertedFileSize, setConvertedFileSize] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleConvert = () => {
        if (!originalImage) {
            console.warn("no image uploaded");
            return;
        }
        setLoading(true);
        setConvertedImage(null);

        // create a temporary image object to load the original image
        const imgElement = new Image();
        const targetWidth = parseInt(originalSize.width * targetScale);
        const targetHeight = parseInt(originalSize.height * targetScale);
        // onload event
        imgElement.onload = () => {
            const canvas = document.createElement("canvas");
            // set canvas size to the target size
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            const ctx = canvas.getContext("2d");
            // resize the image to the target size and draw it on the canvas
            ctx.drawImage(imgElement, 0, 0, targetWidth, targetHeight);

            let mimeType = `image/${format}`;
            const convertedImageUrl = canvas.toDataURL(mimeType, quality);
            const convertedFileSize =
                (convertedImageUrl.split(",")[1].length * 3) / 4;

            setConvertedImage(convertedImageUrl);
            setTargetSize({
                width: targetWidth,
                height: targetHeight,
            });
            setConvertedFileSize(convertedFileSize);
            setLoading(false);
        };
        imgElement.onerror = () => {
            setLoading(false);
            console.error("Image loading failed");
        };
        imgElement.src = originalImage; // onload event will be triggered after the image is loaded
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setOriginalImage(imageUrl);
            setConvertedImage(null);
            setOriginalFileSize(file.size);

            // get original image size
            const imgElement = new Image();
            imgElement.onload = () => {
                setOriginalSize({
                    width: imgElement.naturalWidth,
                    height: imgElement.naturalHeight,
                });
                setTargetScale(1);
            };
            imgElement.src = imageUrl;
        }
    };

    return (
        <main
            className={cn(
                "w-full max-w-screen-lg flex-around flex-col md:flex-row gap-10",
                className
            )}
        >
            {/* upload & preview */}
            <ImgUploader
                imgURL={originalImage}
                onImgUpload={handleImageUpload}
                imgSize={originalSize}
                imgFileSize={originalFileSize}
            />
            {/* selections & convert */}
            <div className="flex-center flex-col gap-4">
                <Select
                    defaultValue={format}
                    onValueChange={(value) => setFormat(value)}
                >
                    <SelectTrigger className="w-38">
                        <SelectValue placeholder="Select a format" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpeg">JPEG</SelectItem>
                        <SelectItem value="webp">WEBP</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    defaultValue={targetScale}
                    onValueChange={(value) => setTargetScale(value)}
                >
                    <SelectTrigger className="w-38">
                        <SelectValue placeholder="Select a scale" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={1}>
                            {parseInt(originalSize.width)}x
                            {parseInt(originalSize.height)}
                        </SelectItem>
                        <SelectItem value={0.5}>
                            {parseInt(originalSize.width * 0.5)}x
                            {parseInt(originalSize.height * 0.5)}
                        </SelectItem>
                        <SelectItem value={0.3}>
                            {parseInt(originalSize.width * 0.3)}x
                            {parseInt(originalSize.height * 0.3)}
                        </SelectItem>
                        <SelectItem value={0.2}>
                            {parseInt(originalSize.width * 0.2)}x
                            {parseInt(originalSize.height * 0.2)}
                        </SelectItem>
                        <SelectItem value={0.1}>
                            {parseInt(originalSize.width * 0.1)}x
                            {parseInt(originalSize.height * 0.1)}
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setQuality(value)}>
                    <SelectTrigger className="w-38">
                        <SelectValue placeholder="Change Quality" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={1}>1</SelectItem>
                        <SelectItem value={0.9}>0.9</SelectItem>
                        <SelectItem value={0.8}>0.8</SelectItem>
                        <SelectItem value={0.7}>0.7</SelectItem>
                        <SelectItem value={0.6}>0.6</SelectItem>
                        <SelectItem value={0.5}>0.5</SelectItem>
                        <SelectItem value={0.4}>0.4</SelectItem>
                        <SelectItem value={0.3}>0.3</SelectItem>
                        <SelectItem value={0.2}>0.2</SelectItem>
                        <SelectItem value={0.1}>0.1</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    onClick={handleConvert}
                    disabled={loading}
                    className="w-38"
                >
                    {loading ? (
                        <div className="flex-center gap-1">
                            <LoaderCircle className="animate-spin" />
                            Converting...
                        </div>
                    ) : (
                        "Convert"
                    )}
                </Button>
            </div>

            {/* download & preview */}
            <ImgDownloader
                imgURL={convertedImage}
                imgSize={targetSize}
                imgFileSize={convertedFileSize}
            />
        </main>
    );
}

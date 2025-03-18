"use client";
import { useState } from "react";
import Img from "next/image";

// img converter page
export default function ImageConverter() {
    const [originalImage, setOriginalImage] = useState(null);
    const [convertedImage, setConvertedImage] = useState(null);
    const [format, setFormat] = useState("png");
    const [quality, setQuality] = useState(1);
    const [originalSize, setOriginalSize] = useState({
        width: 1024,
        height: 1024,
    });
    const [targetScale, setTargetScale] = useState(1);
    const targetSize = {
        width: parseInt(originalSize.width * targetScale),
        height: parseInt(originalSize.height * targetScale),
    };
    const [originalFileSize, setOriginalFileSize] = useState(0);
    const [convertedFileSize, setConvertedFileSize] = useState(0);

    const handleConvert = () => {
        setConvertedImage(null);
        if (!originalImage) {
            console.warn("no image uploaded");
            return;
        }

        // create a temporary image object to load the original image
        const imgElement = new Image();
        // onload event
        imgElement.onload = () => {
            const canvas = document.createElement("canvas");
            // set canvas size to the target size
            canvas.width = targetSize.width;
            canvas.height = targetSize.height;
            const ctx = canvas.getContext("2d");
            // resize the image to the target size and draw it on the canvas
            ctx.drawImage(
                imgElement,
                0,
                0,
                targetSize.width,
                targetSize.height
            );

            let mimeType = `image/${format}`;
            const convertedImageUrl = canvas.toDataURL(mimeType, quality);
            const convertedFileSize =
                (convertedImageUrl.split(",")[1].length * 3) / 4;

            setConvertedImage(convertedImageUrl);
            setConvertedFileSize(convertedFileSize);
        };
        imgElement.src = originalImage; // onload event will be triggered after the image is loaded
    };

    const handleImageChange = (event) => {
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

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center py-10 md:py-40 gap-20">
            <h1 className="row-start-1 text-4xl font-bold">Image Converter</h1>
            <main className="row-start-2 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-10">
                {/* upload & preview */}
                <label className="relative group w-64 h-64 flex items-center justify-center cursor-pointer border-3 hover-border border-dashed rounded-lg ">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                    {originalImage ? (
                        <>
                            <Img
                                src={originalImage}
                                alt="uploaded image preview"
                                fill
                                className="object-contain hover-dim"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover-bright">
                                <p className="text-gray-600 text-2xl">
                                    Click to Upload
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-1">
                                Original: {originalSize.width}x
                                {originalSize.height} |{" "}
                                {formatFileSize(originalFileSize)}
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-600 text-2xl">
                            Click to Upload
                        </p>
                    )}
                </label>

                {/* selections & convert */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="w-32 p-2 bg-background border hover-border rounded-md"
                    >
                        <option value="png">PNG</option>
                        <option value="jpeg">JPEG</option>
                        <option value="webp">WEBP</option>
                    </select>
                    <div className="w-32 pl-2 flex items-center justify-between">
                        <span>Quality</span>
                        <select
                            value={quality}
                            onChange={(e) => {
                                setQuality(parseFloat(e.target.value));
                            }}
                            className="p-2 bg-background border hover-border rounded-md"
                        >
                            <option value={1}>1</option>
                            <option value={0.9}>0.9</option>
                            <option value={0.8}>0.8</option>
                            <option value={0.7}>0.7</option>
                            <option value={0.6}>0.6</option>
                            <option value={0.5}>0.5</option>
                            <option value={0.4}>0.4</option>
                            <option value={0.3}>0.3</option>
                            <option value={0.2}>0.2</option>
                            <option value={0.1}>0.1</option>
                        </select>
                    </div>
                    <select
                        value={targetScale}
                        onChange={(e) => {
                            setTargetScale(e.target.value);
                        }}
                        className="p-2 w-32 bg-background border hover-border rounded-md"
                    >
                        <option value={1}>
                            {parseInt(originalSize.width)}x
                            {parseInt(originalSize.height)}
                        </option>
                        <option value={0.5}>
                            {parseInt(originalSize.width * 0.5)}x
                            {parseInt(originalSize.height * 0.5)}
                        </option>
                        <option value={0.3}>
                            {parseInt(originalSize.width * 0.3)}x
                            {parseInt(originalSize.height * 0.3)}
                        </option>
                        <option value={0.2}>
                            {parseInt(originalSize.width * 0.2)}x
                            {parseInt(originalSize.height * 0.2)}
                        </option>
                        <option value={0.1}>
                            {parseInt(originalSize.width * 0.1)}x
                            {parseInt(originalSize.height * 0.1)}
                        </option>
                    </select>
                    <button
                        onClick={handleConvert}
                        className="p-2 w-32 hover-button shadow-md rounded-md text-white font-bold"
                    >
                        Convert
                    </button>
                </div>

                {/* download & preview */}
                <div className="relative group w-64 h-64 flex items-center justify-center cursor-pointer border-3 hover-border border-dashed rounded-lg ">
                    {convertedImage ? (
                        <>
                            <Img
                                src={convertedImage}
                                alt="converted image preview"
                                fill
                                className="object-contain hover-dim"
                            />
                            <a
                                href={convertedImage}
                                download
                                className="absolute inset-0 flex items-center justify-center opacity-0 hover-bright"
                            >
                                <p className="text-gray-600 text-2xl">
                                    Click to Download
                                </p>
                            </a>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-1">
                                Converted: {targetSize.width}x
                                {targetSize.height} |{" "}
                                {formatFileSize(convertedFileSize)}
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-600 text-2xl">
                            Click to Download
                        </p>
                    )}
                </div>
            </main>
            {/* <div className="row-start-3"></div> */}
        </div>
    );
}

"use client";
import { useState } from "react";
import Img from "next/image";

// img converter page
export default function ImageConverter() {
    const [image, setImage] = useState(null);
    const [format, setFormat] = useState("png");
    const [quality, setQuality] = useState(1); // png 无需质量设置；jpg/webp 取 0~1

    const handleConvert = () => {
        if (!image) {
            console.warn("no image uploaded");
            return;
        }

        // 创建一个临时 Image 对象加载原始图像
        const imgEl = new Image();
        imgEl.src = image;
        imgEl.onload = () => {
            // 创建 canvas 并设置尺寸为图像的自然尺寸
            const canvas = document.createElement("canvas");
            canvas.width = imgEl.naturalWidth;
            canvas.height = imgEl.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(imgEl, 0, 0);

            // 根据选择的格式，设置 MIME 类型（quality 仅对 jpg 和 webp 有效）
            let mimeType = `image/${format}`;
            // 对于 png 格式，质量参数会被忽略
            const newImageUrl = canvas.toDataURL(mimeType, quality);
            // 更新图像状态，或者将转换后的图像存储为一个单独的状态
            setImage(newImageUrl);
            console.log("转换后的图像 URL:", newImageUrl);
        };
    };

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            console.log(imageUrl);
        }
    };

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center py-10 md:py-40 gap-20">
            <h1 className="row-start-1 text-4xl font-bold">Image Converter</h1>
            <main className="row-start-2 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-10">
                {/* upload & preview */}
                <label className="relative group w-64 h-64 flex items-center justify-center cursor-pointer border-3 h-border border-dashed rounded-lg ">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                    {image ? (
                        <>
                            <Img
                                src={image}
                                alt="uploaded image preview"
                                fill
                                className="object-contain h-dim"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 h-bright">
                                <p className="text-gray-600 text-2xl">Click to Upload</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-600 text-2xl">Click to Upload</p>
                    )}
                </label>
                {/* selections & convert */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <select className="p-2 w-32 bg-background border h-border rounded-md">
                        <option value="png">PNG</option>
                        <option value="jpg">JPG</option>
                        <option value="webp">WEBP</option>
                    </select>
                    <select className="p-2 w-32 bg-background border h-border rounded-md">
                        <option value="high">High Quality</option>
                        <option value="medium">Medium Quality</option>
                        <option value="low">Low Quality</option>
                    </select>
                    <select className="p-2 w-32 bg-background border h-border rounded-md">
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                        <option value="4096">4096</option>
                    </select>
                    <button
                        onClick={handleConvert}
                        className="p-2 w-32 h-button shadow-md rounded-md text-white font-bold">
                        Convert
                    </button>
                </div>
                {/* download & preview */}
                <div className="relative group w-64 h-64 flex items-center justify-center cursor-pointer border-3 h-border border-dashed rounded-lg ">
                    {image ? (
                        <>
                            <Img
                                src={image}
                                alt="converted image preview"
                                fill
                                className="object-contain h-dim"
                            />
                            <a
                                href={image}
                                download
                                className="absolute inset-0 flex items-center justify-center opacity-0 h-bright"
                            >
                                <p className="text-gray-600 text-2xl">Click to Download</p>
                            </a>
                        </>
                    ) : (
                        <p className="text-gray-600 text-2xl">Click to Download</p>
                    )}
                </div>
            </main>
            {/* <div className="row-start-3"></div> */}
        </div >
    );
}

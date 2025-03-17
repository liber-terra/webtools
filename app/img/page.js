"use client";
import { useState } from "react";

// img converter page
export default function Img() {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            console.log(imageUrl);
        }
    };

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center py-10 md:py-30 gap-20">
            <h1 className="row-start-1 text-4xl font-bold">Image Converter</h1>
            <main className="row-start-2 w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-10">
                {/* upload & preview */}
                <label className="w-64 h-64  flex items-center justify-center cursor-pointer border-2 border-color-with-hover border-dashed rounded-lg">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                    {image ? (
                        <img
                            src={image}
                            alt="uploaded image preview"
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <p className="text-gray-500">Click to Upload</p>
                    )}
                </label>
                {/* selections & convert */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <select className="p-2 w-32 bg-background border border-color-with-hover rounded-md">
                        <option value="png">PNG</option>
                        <option value="jpg">JPG</option>
                        <option value="webp">WEBP</option>
                    </select>
                    <select className="p-2 w-32 bg-background border border-color-with-hover rounded-md">
                        <option value="high">High Quality</option>
                        <option value="medium">Medium Quality</option>
                        <option value="low">Low Quality</option>
                    </select>
                    <select className="p-2 w-32 bg-background border border-color-with-hover rounded-md">
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                        <option value="4096">4096</option>
                    </select>
                    <button className="p-2 w-32 button-color-with-hover shadow-md rounded-md ">
                        Convert
                    </button>
                </div>
                {/* download & preview */}
                <label className="w-64 h-64  flex items-center justify-center cursor-pointer border-2 border-color-with-hover border-dashed rounded-lg">
                    <a href="#download" download>
                        <p className="text-gray-500">Click to Download</p>
                    </a>
                </label>
            </main>
            {/* <div className="row-start-3"></div> */}
        </div>
    );
}

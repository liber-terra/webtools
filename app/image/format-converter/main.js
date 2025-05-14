"use client";

import { useState } from "react";
import Form from "./form";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

export default function Main() {
    const [imgURL, setImgURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [downloadName, setDownloadName] = useState(null);

    const handleSubmit = async (e) => {
        setLoading(true);
        setImgURL(null);
        e.preventDefault();

        const formData = new FormData(e.target);
        const image = formData.get("image");
        if (!(image instanceof File) || !image.name || image.size === 0) {
            toast.error("Please upload an image");
            setLoading(false);
            return;
        }

        const format = formData.get("format");
        const quality = formData.get("quality");
        const scale = formData.get("scale");

        // get download name
        const uploadFileName = image.name;
        const downloadFileName = `${uploadFileName.split(".")[0]}.${format}`;
        setDownloadName(downloadFileName);

        const response = await fetch("/api/image/convert", {
            method: "POST",
            headers: {
                format: format,
                quality: quality,
                scale: scale,
                file_name: uploadFileName,
            },
            body: image,
        });

        if (!response.ok) {
            toast.error("Failed to convert image");
            setLoading(false);
            return;
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImgURL(url);
        setLoading(false);
    };

    return (
        <main className="container max-w-2xl mx-auto py-12 px-4 flex flex-col gap-12">
            <Form handleSubmit={handleSubmit} loading={loading} />

            {/* show image url and download button */}
            <div className="flex flex-col gap-1">
                <p className="text-left">Conversion Results:</p>
                <div className="h-px bg-muted" />
                {imgURL && (
                    <div className="flex-between gap-4 mt-2">
                        <Button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = imgURL;
                                link.target = "_blank";
                                link.rel = "noopener noreferrer";
                                link.click();
                            }}
                            className="w-32"
                            variant="link"
                        >
                            👉 Preview
                        </Button>

                        <Button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = imgURL;
                                link.download = downloadName;
                                link.click();
                            }}
                            className="w-32"
                            variant="link"
                        >
                            ⬇️ Download
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}

"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import UploadButton from "@/components/ui/upload-button";
import { UploadCloud, LoaderCircle } from "lucide-react";
import EmbedCode from "@/components/ui/embed-code";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Main() {
    const PLACEHOLDER = "https://example.com/example.jpg";
    const MAX_SIZE = 4.5 * 1024 * 1024; // 4.5 MB

    const [uploading, setUploading] = useState(false);
    const [imgUrl, setImgUrl] = useState(PLACEHOLDER);

    const handleUpload = async (e) => {
        setUploading(true);
        const file = e.target.files[0];
        if (!file) {
            toast.error("No file selected");
            setUploading(false);
            return;
        }

        if (!file.type.startsWith("image/")) {
            toast.error("Only image files are allowed");
            setUploading(false);
            return;
        }

        if (file.size > MAX_SIZE) {
            toast.error("Image size must be less than 4.5 MB");
            setUploading(false);
            return;
        }

        const res = await fetch(`/api/image/host?filename=${file.name}`, {
            method: "POST",
            body: file,
        });

        if (!res.ok) {
            toast.error("Server error");
            setUploading(false);
            return;
        }

        const data = await res.json();
        setImgUrl(data.url);
        setUploading(false);
    };

    return (
        <main className="container max-w-2xl mx-auto py-12 px-4">
            <div className="flex flex-col gap-12">
                <Card className="p-4 bg-transparent border-none shadow-none">
                    <CardHeader className="mb-4 p-0">
                        <h2 className="text-lg font-semibold">Upload an Image</h2>
                        <p className="text-sm text-muted-foreground">Choose a file or drag it onto the button below</p>
                    </CardHeader>

                    <CardContent>
                        <UploadButton
                            className="w-full h-24 gap-4"
                            variant="outline"
                            accept="image/*"
                            onChange={handleUpload}
                        >
                            {uploading ? (
                                <>
                                    <LoaderCircle className="h-5 w-5 animate-spin" />
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <UploadCloud className="h-5 w-5" />
                                    Upload
                                </>
                            )}
                        </UploadButton>
                    </CardContent>
                </Card>

                <div className="h-px bg-muted" />

                <Card className="p-4 bg-transparent border-none shadow-none">
                    <CardHeader className="mb-4 p-0">
                        <h2 className="text-lg font-semibold">Embed Code</h2>
                        <p className="text-sm text-muted-foreground">
                            Copy and paste the following code into your website or blog post
                        </p>
                    </CardHeader>
                    <CardContent>
                        <EmbedCode imgUrl={imgUrl} />
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

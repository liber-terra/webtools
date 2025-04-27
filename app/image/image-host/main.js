"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import UploadButton from "@/app/components/ui/upload-button";
import { UploadCloud } from "lucide-react";
import EmbedCode from "@/app/components/ui/embed-code";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Main() {
    const PLACEHOLDER = "https://example.com/example.jpg";
    const MAX_SIZE = 4.5 * 1024 * 1024; // 4.5 MB

    const [imgUrl, setImgUrl] = useState(PLACEHOLDER);

    const handleSubmit = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            toast.error("No file selected");
            return;
        }

        console.log("==========", file.type);
        if (!file.type.startsWith("image/")) {
            toast.error("Only image files are allowed");
            return;
        }

        if (file.size > MAX_SIZE) {
            toast.error("Image size must be less than 4.5 MB");
            return;
        }

        const res = await fetch(`/api/blob?filename=${file.name}`, {
            method: "POST",
            body: file,
        });

        if (!res.ok) {
            toast.error("Server error");
            return;
        }

        const data = await res.json();
        setImgUrl(data.url);
    };

    return (
        <main className="container mx-auto max-w-2xl py-12 px-4">
            <div className="flex flex-col gap-12">
                <Card className="p-4 bg-transparent border-none shadow-none">
                    <CardHeader className="mb-4 p-0">
                        <h2 className="text-lg sm:text-xl font-semibold">
                            Upload an Image
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Choose a file or drag it onto the button below
                        </p>
                    </CardHeader>

                    <CardContent>
                        <UploadButton
                            className="w-full gap-4"
                            accept="image/*"
                            size="lg"
                            onChange={handleSubmit}
                        >
                            <UploadCloud className="h-5 w-5" />
                            Upload
                        </UploadButton>
                    </CardContent>
                </Card>

                <div className="h-px bg-muted" />

                <Card className="p-4 bg-transparent border-none shadow-none">
                    <CardHeader className="mb-4 p-0">
                        <h2 className="text-lg sm:text-xl font-semibold">
                            Embed Code
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Copy and paste the following code into your website
                            or blog post
                        </p>
                    </CardHeader>
                    <CardContent>
                        <EmbedCode imgUrl={imgUrl} />
                    </CardContent>
                </Card>

                <Card className="p-4 bg-transparent border-none shadow-none">
                    <CardHeader className="mb-4 p-0">
                        <h2 className="text-lg sm:text-xl font-semibold">
                            Embed Code
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Copy and paste the following code into your website
                            or blog post
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

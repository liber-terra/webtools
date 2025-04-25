"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import UploadButton from "@/app/components/ui/upload-button";
import { UploadCloud } from "lucide-react";
import EmbedCode from "@/app/components/ui/embed-code";
import { useState } from "react";

export default function Main() {
    const PLACEHOLDER = "https://example.com/example.jpg";
    const [imgUrl, setImgUrl] = useState(PLACEHOLDER);

    const handleSubmit = (file) => {
        console.log(file.target.files[0]);
        console.log(file.target.files[0].name);
        setImgUrl("https://example.com/xxxx.jpg");
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
            </div>
        </main>
    );
}

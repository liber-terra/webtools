"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import UploadButton from "@/app/components/ui/upload-button";
import { UploadCloud } from "lucide-react";
export default function Main() {
    const handleSubmit = (file) => {
        console.log(file.target.files[0]);
        console.log(file.target.files[0].name);
    };

    return (
        <main className="container mx-auto max-w-2xl py-12 px-4">
            {/* ① shadow card */}
            <Card className="p-6 shadow-sm">
                <CardHeader className="mb-4 p-0">
                    <h2 className="text-xl font-semibold">Upload an Image</h2>
                    <p className="text-sm text-muted-foreground">
                        Choose a file or drag it onto the button below
                    </p>
                </CardHeader>

                {/* ② vertical spacing */}
                <CardContent className="space-y-4">
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
        </main>
    );
}

"use client";
import UploadButton from "@/components/ui/upload-button";
import { UploadCloud, LoaderCircle, Delete, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { formatFileSize } from "@/lib/utils";
import axios from "axios";

export default function Main() {
    const MAX_SIZE = 4.5 * 1024 * 1024; // 4.5 MB
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [url, setUrl] = useState("https://example.com/file/123/example.com/file/123/example.com/file/123");

    const handleFileUpload = (e) => {
        const newFiles = e.target.files;
        if (newFiles) {
            for (const file of newFiles) {
                console.log(file.name);
                if (file.size > MAX_SIZE) {
                    toast.error("文件大小超过4.5MB");
                    return;
                }
            }
            setSelectedFiles([
                ...selectedFiles,
                ...Array.from(newFiles).map((file) => ({
                    id: crypto.randomUUID(),
                    file: file,
                    name: file.name,
                    size: formatFileSize(file.size),
                    progress: 100,
                })),
            ]);
        }
        e.target.value = null;
    };

    const handleFileDelete = (id) => {
        console.log("delete", id);
        setSelectedFiles(selectedFiles.filter((file) => file.id !== id));
    };

    const handleFileSubmit = async (file) => {
        console.log("uploading ", file.name);
        const formData = new FormData();
        formData.append("file", file.file);
        formData.append("name", file.name);
        formData.append("size", file.size);
        const response = await axios.post("/api/file-sharing", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                file.progress = progress;
                console.log(`${file.name} 上传进度: ${progress}%`);
            },
        });
        return response.data;
    };

    const handleSubmit = async () => {
        const promises = selectedFiles.map((file) => handleFileSubmit(file));
        const urls = await Promise.all(promises);

        console.log("所有文件已上传，URL 列表：", urls);
        // write urls to db
    };

    const copy = async () => {
        await navigator.clipboard.writeText(url);
        toast.success("Share link copied!");
    };
    return (
        <main className="container max-w-2xl mx-auto py-12 px-4">
            <div className="flex flex-col gap-12">
                {/* upload section */}
                <UploadButton
                    variant="outline"
                    className="w-full h-24 gap-4"
                    multiple={true}
                    onChange={handleFileUpload}
                >
                    <UploadCloud className="w-5 h-5" />
                    Choose a file or drag it here
                </UploadButton>

                {/* file list section */}
                <section className="flex flex-col gap-6">
                    <p className="text-sm">Selected Files:</p>
                    {selectedFiles.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {selectedFiles.map((file) => (
                                <div key={file.id}>
                                    <div className="px-4 grid grid-cols-[6fr_1fr_1fr] gap-8 items-center">
                                        <div className="relative w-full truncate">
                                            <div
                                                className="absolute inset-y-0 left-0 -z-10 bg-chart-2 opacity-50"
                                                style={{ width: `${file.progress}%` }}
                                            />
                                            <p className="text-sm">{file.name}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{file.size}</p>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="size-8"
                                            onClick={() => handleFileDelete(file.id)}
                                        >
                                            <Delete className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                {/* upload button and share link section */}
                <div className="h-px bg-muted" />
                <div className="flex items-center justify-between gap-4">
                    <Button variant="outline" className="w-24 active:scale-95" onClick={handleSubmit}>
                        Upload
                    </Button>
                    <pre className="rounded-lg border px-4 py-2 truncate">
                        <code className="block text-sm font-mono leading-relaxed">{url}</code>
                    </pre>
                    <Button size="icon" variant="ghost" onClick={copy} className="active:scale-95" title="Copy code">
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </main>
    );
}

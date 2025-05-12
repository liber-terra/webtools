"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

const templates = {
    markdown: (url) => `![image](${url})`,
    markdownLink: (url) => `[![image](${url})](${url})`,
    html: (url) => `<img src="${url}" alt="image" />`,
    bbcode: (url) => `[img]${url}[/img]`,
    url: (url) => url,
};

export default function EmbedCode({ imgUrl, className }) {
    /* ① Tab 状态 */
    const [fmt, setFmt] = useState("url");

    /* ② 生成代码；依赖变才重算 */
    const code = templates[fmt](imgUrl);

    /* ③ Copy 按钮逻辑 */
    const copy = async () => {
        await navigator.clipboard.writeText(code);
        toast.success("Copied!");
    };

    return (
        <div className={cn("rounded-lg border", className)}>
            {/* ── 顶部横栏 ─────────────────────────────── */}
            <div className="flex-between border-b px-4 gap-2">
                {/* TabsList = 左侧格式选择 */}
                <Tabs
                    value={fmt}
                    onValueChange={setFmt}
                    className="overflow-x-auto"
                >
                    <TabsList className="bg-transparent">
                        <TabsTrigger
                            value="url"
                            className={
                                "border-none text-xs text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            }
                        >
                            URL
                        </TabsTrigger>
                        <TabsTrigger
                            value="markdown"
                            className={
                                "border-none text-xs text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            }
                        >
                            Markdown
                        </TabsTrigger>
                        <TabsTrigger
                            value="markdownLink"
                            className={
                                "border-none text-xs text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            }
                        >
                            MD+Link
                        </TabsTrigger>
                        <TabsTrigger
                            value="html"
                            className={
                                "border-none text-xs text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            }
                        >
                            HTML
                        </TabsTrigger>
                        <TabsTrigger
                            value="bbcode"
                            className={
                                "border-none text-xs text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
                            }
                        >
                            BBCode
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* 右侧 Copy */}
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={copy}
                    className="active:scale-95"
                    title="Copy code"
                >
                    <Copy className="h-4 w-4" />
                </Button>
            </div>

            {/* ── 代码框 ───────────────────────────────── */}
            <pre className="overflow-x-auto px-6 py-4">
                <code className="block font-mono text-sm leading-relaxed">
                    {code}
                </code>
            </pre>
        </div>
    );
}

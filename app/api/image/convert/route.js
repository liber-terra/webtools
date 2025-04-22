import { convertImg } from "@/app/lib/image-converter";
import { NextResponse } from "next/server";

export async function POST(request) {
    const imageArray = await request.arrayBuffer();
    const format = request.headers.get("format");
    const quality = parseFloat(request.headers.get("quality")) * 100;
    const scale = parseFloat(request.headers.get("scale"));

    const imageBuffer = await convertImg(imageArray, format, quality, scale);
    return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
            "Content-Type": `image/${format}`,
            "Content-Length": imageBuffer.length.toString(),
        },
    });
}

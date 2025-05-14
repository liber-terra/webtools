import { convertImg, insertTable } from "@/app/lib/image-converter";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const imageArray = await request.arrayBuffer();
        if (!imageArray || imageArray.byteLength === 0) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const format = request.headers.get("format");
        const qualityRaw = request.headers.get("quality");
        const scaleRaw = request.headers.get("scale");
        const quality = parseFloat(qualityRaw) * 100;
        const scale = parseFloat(scaleRaw);

        const imageBuffer = await convertImg(imageArray, format, quality, scale);

        const data = {
            file_name: request.headers.get("file_name"),
            target_format: format,
            original_size_bytes: imageArray.byteLength,
            converted_size_bytes: imageBuffer.length,
        };
        await insertTable(data);

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                "Content-Type": `image/${format}`,
                "Content-Length": imageBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error("Error converting image:", error);
        return new NextResponse("Error converting image", {
            status: 500,
        });
    }
}

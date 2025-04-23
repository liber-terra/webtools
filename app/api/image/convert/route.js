import { convertImg } from "@/app/lib/image-converter";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const imageArray = await request.arrayBuffer();
        if (!imageArray || imageArray.byteLength === 0) {
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 }
            );
        }

        const format = request.headers.get("format");
        const qualityRaw = request.headers.get("quality");
        const scaleRaw = request.headers.get("scale");

        const quality = parseFloat(qualityRaw) * 100;
        const scale = parseFloat(scaleRaw);

        const imageBuffer = await convertImg(
            imageArray,
            format,
            quality,
            scale
        );

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

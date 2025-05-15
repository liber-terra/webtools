import { put, del, head, list } from "@vercel/blob";
import { NextResponse } from "next/server";
import { insertTable } from "@/app/lib/image/host";

// https://vercel.com/docs/vercel-blob/using-blob-sdk#put
export async function POST(request) {
    try {
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get("filename") || "_";
        const arrayBuffer = await request.arrayBuffer();

        const blob = await put(filename, arrayBuffer, {
            access: "public",
            addRandomSuffix: true,
        });

        const data = {
            file_name: filename,
            file_url: blob.url,
            file_size_bytes: arrayBuffer.byteLength,
        };
        await insertTable(data);
        return NextResponse.json(blob);
    } catch (error) {
        console.error("Error hosting image:", error);
        return new NextResponse("Error hosting image", {
            status: 500,
        });
    }
}

// export async function DELETE(request) {
//     const { searchParams } = new URL(request.url);
//     const urlToDelete = searchParams.get("url");
//     await del(urlToDelete);

//     return new Response();
// }

// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const blobUrl = searchParams.get("url");

//     if (blobUrl) {
//         const blobDetails = await head(blobUrl);
//         return Response.json(blobDetails);
//     } else {
//         const { blobs } = await list();
//         return Response.json(blobs);
//     }
// }

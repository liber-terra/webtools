import { put, del, head, list } from "@vercel/blob";
import { NextResponse } from "next/server";

// https://vercel.com/docs/vercel-blob/using-blob-sdk#put
export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename") || "_";

    const blob = await put(filename, request.body, {
        access: "public",
        addRandomSuffix: true,
    });
    return NextResponse.json(blob);
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

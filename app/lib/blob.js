import { put, del, head, list } from "@vercel/blob";
import { NextResponse } from "next/server";

// https://vercel.com/docs/vercel-blob/using-blob-sdk#put
export async function uploadBlob(filename, body) {
    const blob = await put(filename, body, {
        access: "public",
        addRandomSuffix: true,
    });
    return blob;
}

export async function deleteBlob(url) {
    await del(url);
}

export async function getBlob(url) {
    const blobDetails = await head(url);
    return blobDetails;
}

export async function listBlobs() {
    const { blobs } = await list();
    return blobs;
}

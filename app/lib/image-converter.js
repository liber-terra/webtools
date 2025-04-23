"use server";

import sharp from "sharp";

export async function convertImg(imageArray, format, quality, scale) {
    const metadata = await sharp(imageArray).metadata();
    const width = Math.round(metadata.width * scale);

    const imageBuffer = await sharp(imageArray)
        .toFormat(format, { quality: quality })
        .resize({ width: width })
        .toBuffer();

    return imageBuffer;
}

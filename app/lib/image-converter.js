"use server";

import sharp from "sharp";

export async function convertImg(imageArray, format, quality, scale) {
    console.log("format: ", format);
    console.log("quality: ", quality);
    console.log("scale: ", scale);

    const metadata = await sharp(imageArray).metadata();
    console.log("metadata: ", metadata);

    const image = sharp(imageArray).toFormat(format);
    const imageBuffer = await image.toBuffer();

    return imageBuffer;
}

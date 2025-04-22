"use server";

import sharp from "sharp";

export async function convertImg(imageArray, format, quality, scale) {
    console.log("format: ", format, typeof format);
    console.log("quality: ", quality, typeof quality);
    console.log("scale: ", scale, typeof scale);

    const metadata = await sharp(imageArray).metadata();
    const width = Math.round(metadata.width * scale);

    const imageBuffer = await sharp(imageArray)
        .toFormat(format, { quality: quality })
        .resize({ width: width })
        .toBuffer();

    // console.log("before meta: ", metadata);
    // console.log("after meta:", await sharp(imageBuffer).metadata());
    return imageBuffer;
}

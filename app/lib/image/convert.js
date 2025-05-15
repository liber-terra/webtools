"use server";

import sharp from "sharp";
import postgres from "postgres";

export async function convertImg(imageArray, format, quality, scale) {
    const metadata = await sharp(imageArray).metadata();
    const width = Math.round(metadata.width * scale);

    const imageBuffer = await sharp(imageArray)
        .toFormat(format, { quality: quality })
        .resize({ width: width })
        .toBuffer();

    return imageBuffer;
}

const sql = postgres(process.env.POSTGRES_URL);
/*
CREATE TABLE image_converter (
    id SERIAL PRIMARY KEY,                 -- 自增唯一ID
    file_name TEXT NOT NULL,               -- 文件名（上传的原始文件名）
    original_format VARCHAR(50),           -- 原始文件格式（如 jpg、png）
    target_format VARCHAR(50),             -- 转换后的目标格式（如 png、webp）
    original_size_bytes INTEGER,           -- 原文件大小（字节）
    converted_size_bytes INTEGER,          -- 转换后的文件大小（字节，可选）
    conversion_time TIMESTAMP DEFAULT NOW(),-- 转换发生的时间戳
    user_ip VARCHAR(50),                   -- 用户IP地址（可选）
    user_device VARCHAR(200),              -- 用户设备信息（如User-Agent字符串，可选）
    processing_duration_ms INTEGER         -- 转换处理耗时（毫秒，可选）
);
*/
export async function insertTable(data) {
    const result = await sql`
    INSERT INTO 
    image_converter 
        (file_name, target_format, original_size_bytes, converted_size_bytes)
    VALUES 
        (${data.file_name}, ${data.target_format}, ${data.original_size_bytes}, ${data.converted_size_bytes})
    `;
    return result;
}

export async function getStats() {
    const converted_count = await sql`SELECT COUNT(*) FROM image_converter`;
    const converted_size_bytes = await sql`SELECT SUM(converted_size_bytes) FROM image_converter`;
    return {
        converted_count: converted_count[0].count,
        converted_size_bytes: converted_size_bytes[0].sum,
    };
}

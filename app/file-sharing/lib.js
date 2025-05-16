import postgres from "postgres";
import { formatFileSize } from "@/lib/utils";

const sql = postgres(process.env.POSTGRES_URL);
/*
CREATE TABLE image_host (
    id SERIAL PRIMARY KEY,                  -- 自增唯一ID
    file_name TEXT NOT NULL,        -- 原始文件名
    file_url TEXT NOT NULL UNIQUE,           -- 文件 URL（唯一）
    file_size_bytes INTEGER,                  -- 文件大小（字节），使用 INTEGER 以支持大文件
    created_at TIMESTAMP DEFAULT NOW(),     -- 文件上传或转换的时间戳
    user_ip VARCHAR(50),             -- 用户 IP 地址（可选）
    user_device VARCHAR(200),           -- 用户设备信息（可选）
    status VARCHAR(20) DEFAULT 'pending'     -- 文件转换状态（可选，默认 'pending'）
);
*/
export async function insertTable(data) {
    console.log(data);
    const result = await sql`
    INSERT INTO 
    image_host 
        (file_name, file_url, file_size_bytes)
    VALUES 
        (${data.file_name}, ${data.file_url}, ${data.file_size_bytes})
    `;
    return result;
}

export async function getStats() {
    const hosted_count = await sql`SELECT COUNT(*) FROM image_host`;
    const hosted_size_bytes = await sql`SELECT SUM(file_size_bytes) FROM image_host`;
    return [
        {
            label: "files shared online",
            value: hosted_count[0].count,
        },
        {
            label: "file size shared",
            value: formatFileSize(hosted_size_bytes[0].sum),
        },
    ];
}

import { formatFileSize } from "@/app/lib/utils";
import Img from "next/image";

export default function ImageUploader({
    originalImage,
    handleImageUpload,
    originalSize,
    originalFileSize,
}) {
    return (
        <label className="relative size-64 flex-center cursor-pointer border-3 border-muted hover:border-muted-foreground transition border-dashed rounded-lg">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
            />
            <p className="text-muted-foreground text-2xl">Click to Upload</p>
            {originalImage && (
                <>
                    <Img
                        src={originalImage}
                        alt="uploaded image preview"
                        fill
                        className="object-contain hover:opacity-20 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 py-1 bg-muted/80 text-muted-foreground flex-around">
                        <p>
                            {originalSize.width}x{originalSize.height} px
                        </p>
                        <p>{formatFileSize(originalFileSize)}</p>
                    </div>
                </>
            )}
        </label>
    );
}

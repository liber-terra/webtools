import { cn } from "@/lib/utils";
import ImgPreview from "./ui/ImgPreview";

export default function ImgUploader({
    imgURL,
    onImgUpload,
    imgSize = null,
    imgFileSize = null,
    className = "",
}) {
    return (
        <label
            className={cn(
                "relative size-64 flex-center cursor-pointer border-3 border-muted hover:border-muted-foreground transition border-dashed rounded-lg",
                className
            )}
        >
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onImgUpload}
            />

            <p className="text-muted-foreground text-2xl">Click to Upload</p>

            {imgURL && (
                <ImgPreview
                    imgURL={imgURL}
                    imgSize={imgSize}
                    imgFileSize={imgFileSize}
                    className="hover:opacity-20 transition"
                />
            )}
        </label>
    );
}

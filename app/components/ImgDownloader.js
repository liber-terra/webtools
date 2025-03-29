import { cn } from "@/lib/utils";
import ImgPreview from "./ui/ImgPreview";

export default function ImgDownloader({
    imgURL,
    imgSize = null,
    imgFileSize = null,
    className = "",
}) {
    return (
        <div
            className={cn(
                "relative size-64 flex-center cursor-pointer border-3 border-muted hover:border-muted-foreground transition border-dashed rounded-lg",
                className
            )}
        >
            <p className="text-muted-foreground text-2xl">Click to Download</p>
            {imgURL && (
                <>
                    <a href={imgURL} download className="absolute inset-0">
                        <ImgPreview
                            imgURL={imgURL}
                            imgSize={imgSize}
                            imgFileSize={imgFileSize}
                            className="hover:opacity-20 transition"
                        />
                    </a>
                </>
            )}
        </div>
    );
}

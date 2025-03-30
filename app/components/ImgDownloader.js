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
                "relative group size-64 flex-center cursor-pointer border-3 border-muted hover:border-muted-foreground transition border-dashed rounded-lg",
                className
            )}
        >
            {imgURL ? (
                <>
                    <a href={imgURL} download className="absolute inset-0">
                        <ImgPreview
                            imgURL={imgURL}
                            imgSize={imgSize}
                            imgFileSize={imgFileSize}
                            className="group-hover:opacity-20 transition"
                        />
                    </a>
                    <p className="text-muted-foreground text-2xl hidden group-hover:block">
                        Click to Download
                    </p>
                </>
            ) : (
                <p className="text-muted-foreground text-2xl">
                    Click to Download
                </p>
            )}
        </div>
    );
}

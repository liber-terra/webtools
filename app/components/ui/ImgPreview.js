import Img from "next/image";
import { formatFileSize } from "@/app/lib/utils";
import { cn } from "@/lib/utils";

export default function ImgPreview({
    imgURL,
    imgSize = null,
    imgFileSize = null,
    className = "",
}) {
    return (
        <>
            <Img
                src={imgURL}
                alt="uploaded image preview"
                fill
                className={cn("object-contain", className)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-muted/80 text-muted-foreground py-1 flex-around">
                {imgSize && (
                    <p>
                        {imgSize.width}x{imgSize.height} px
                    </p>
                )}
                {imgFileSize && <p>{formatFileSize(imgFileSize)}</p>}
            </div>
        </>
    );
}

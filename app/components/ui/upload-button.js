"use client";
import { Button } from "@/components/ui/button";

export default function UploadButton({
    children,
    className = "",
    name = "",
    accept = "",
    onChange = () => {},
    ...props
}) {
    return (
        <Button asChild className={className} {...props}>
            <label htmlFor="file">
                {children}
                <input
                    id="file"
                    name={name}
                    type="file"
                    accept={accept}
                    className="sr-only"
                    onChange={onChange}
                />
            </label>
        </Button>
    );
}

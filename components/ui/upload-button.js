import { Button } from "@/components/ui/button";

export default function UploadButton({
    children,
    className = "",
    name = "",
    accept = "",
    multiple = false,
    onChange = () => {},
    ...props
}) {
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);
        onChange(files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <Button asChild className={className} {...props}>
            <label htmlFor="file" onDrop={handleDrop} onDragOver={handleDragOver}>
                {children}
                <input
                    id="file"
                    name={name}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    className="sr-only"
                    onChange={onChange}
                />
            </label>
        </Button>
    );
}

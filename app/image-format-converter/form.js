import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormItem = ({ label, children }) => (
    <div className="w-full flex gap-4">
        <span className="w-1/3 min-w-[100px]">{label}</span>
        <div className="w-2/3">{children}</div>
    </div>
);

export default function Form({ handleSubmit, loading }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-end gap-8">
            <FormItem label="Upload image:">
                <Input
                    name="image"
                    type="file"
                    accept="image/*"
                    className="w-full"
                    aria-label="upload image"
                />
            </FormItem>

            <FormItem label="Target format:">
                <Select name="format" defaultValue="jpeg">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a format" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="jpeg">JPEG</SelectItem>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="webp">WEBP</SelectItem>
                        <SelectItem value="gif">GIF</SelectItem>
                        {/* <SelectItem value="jp2">JP2</SelectItem> */}
                        <SelectItem value="tiff">TIFF</SelectItem>
                        <SelectItem value="avif">AVIF</SelectItem>
                        {/* <SelectItem value="heif">HEIF</SelectItem> */}
                        {/* <SelectItem value="jxl">JXL</SelectItem> */}
                        <SelectItem value="raw">RAW</SelectItem>
                        {/* <SelectItem value="tile">TILE</SelectItem> */}
                    </SelectContent>
                </Select>
            </FormItem>

            <FormItem label="Image quality:">
                <Select name="quality" defaultValue="0.8">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Change Quality" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="0.9">0.9</SelectItem>
                        <SelectItem value="0.8">0.8</SelectItem>
                        <SelectItem value="0.7">0.7</SelectItem>
                        <SelectItem value="0.6">0.6</SelectItem>
                        <SelectItem value="0.5">0.5</SelectItem>
                        <SelectItem value="0.4">0.4</SelectItem>
                        <SelectItem value="0.3">0.3</SelectItem>
                        <SelectItem value="0.2">0.2</SelectItem>
                        <SelectItem value="0.1">0.1</SelectItem>
                    </SelectContent>
                </Select>
            </FormItem>

            <FormItem label="Resize image:">
                <Select name="scale" defaultValue="1">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a scale" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1x</SelectItem>
                        <SelectItem value="0.5">0.5x</SelectItem>
                        <SelectItem value="0.3">0.3x</SelectItem>
                        <SelectItem value="0.2">0.2x</SelectItem>
                        <SelectItem value="0.1">0.1x</SelectItem>
                    </SelectContent>
                </Select>
            </FormItem>

            <Button type="submit" className="w-32" variant="outline">
                {loading ? (
                    <div className="flex items-center gap-2">
                        <LoaderCircle className="w-4 h-4 animate-spin" />
                        Converting...
                    </div>
                ) : (
                    "Convert"
                )}
            </Button>
        </form>
    );
}

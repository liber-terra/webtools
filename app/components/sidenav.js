"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { href: "/image/format-converter", label: "Format Converter" },
    { href: "/image/image-host", label: "Image Hosting" },
];

export default function SideNav() {
    const pathname = usePathname();
    return (
        <nav className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        pathname.startsWith(href)
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-muted"
                    )}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}

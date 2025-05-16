"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ImageIcon, RefreshCcwIcon } from "lucide-react";

const SIDE_NAV_LINKS = [
    {
        href: "/image/convert",
        label: "Format Converter",
        icon: RefreshCcwIcon,
    },
    { href: "/image/host", label: "Image Host", icon: ImageIcon },
];

function SideNavLink({ href, label, icon: Icon }) {
    const pathname = usePathname();
    const active = pathname.startsWith(href);
    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 text-sm font-medium flex items-center gap-2",
                active ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
            )}
        >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{label}</span>
        </Link>
    );
}

export default function SideNav() {
    return (
        <nav className="flex flex-col gap-2 mt-8">
            {SIDE_NAV_LINKS.map((props) => (
                <SideNavLink key={props.href} {...props} />
            ))}
        </nav>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ui/theme-toggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/image", label: "Image" },
    { href: "/file-sharing", label: "File Sharing" },
];

function NavLink({ href, label }) {
    const pathname = usePathname();
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 text-sm font-medium",
                active
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
            )}
        >
            {label}
        </Link>
    );
}

export default function Navbar({ className }) {
    return (
        <nav className={cn("border-border border-b bg-background", className)}>
            <div className="h-full w-full container mx-auto px-4 sm:px-8 lg:px-12 flex items-center">
                {/* left side */}
                <div>
                    <Link
                        href="/"
                        className="flex-center gap-2 text-xl font-bold text-muted-foreground hover:brightness-125 transition-all"
                        aria-label="Go to the homepage"
                    >
                        <Image
                            src="/favicon.ico"
                            alt="logo"
                            width={32}
                            height={32}
                            className="rounded-lg"
                        />
                        <span className="hidden sm:inline">Tools Hub</span>
                    </Link>
                </div>

                {/* menu */}
                <div className="flex-1 px-4 sm:px-8 lg:px-12">
                    <div className="flex gap-4">
                        {NAV_LINKS.map((props) => (
                            <NavLink key={props.href} {...props} />
                        ))}{" "}
                    </div>
                </div>

                {/* Right side */}
                <div>
                    {/* TODO: Language Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

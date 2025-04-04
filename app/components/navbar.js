import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ui/theme-toggle";

export default function Navbar() {
    return (
        // wrapper
        <nav className="h-full sticky top-0 z-50 border-border border-b bg-background">
            <div className="h-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 flex-between">
                {/* left side */}
                <div>
                    <Link
                        href="/"
                        className="flex-center gap-2 text-2xl font-bold text-muted-foreground hover:brightness-125 transition-all"
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
                {/* TODO: Menu */}
                {/* Right side */}
                <div className="flex gap-2">
                    {/* TODO: Language Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

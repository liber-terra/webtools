import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
    return (
        // wrapper
        <nav className="sticky top-0 z-50 border-border border-b bg-background">
            <div className="max-w-screen-2xl mx-auto h-14 px-4 sm:px-8 lg:px-12 flex-between">
                {/* left side */}
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-muted-foreground hover:brightness-125"
                        aria-label="Go to the homepage"
                    >
                        Tools Hub
                    </Link>
                </div>
                {/* Right side */}
                <div className="flex gap-2">
                    {/* TODO: Language Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

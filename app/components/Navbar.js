"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    // Effect to sync theme with system preference and persist
    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");
        setTheme(savedTheme);
        updateTheme(savedTheme);
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        updateTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Update theme in document
    const updateTheme = (selectedTheme) => {
        if (selectedTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.style.colorScheme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
        }
    };

    // Toggle language
    const toggleLanguage = () => {
        const newLanguage = language === "zh" ? "en" : "zh";
        setLanguage(newLanguage);
        // You might want to implement actual translation logic here
    };

    return (
        // wrapper
        <nav className="sticky top-0 z-50 border-b border-border border-opacity-50">
            {/* layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* flex */}
                <div className="flex justify-between h-14">
                    {/* left side */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-muted-foreground hover:brightness-125"
                        >
                            Tools Hub
                        </Link>
                    </div>
                    {/* Right side - Theme and Language Toggles */}
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center justify-center w-9 h-9 rounded-md"
                            aria-label="Toggle Language"
                        >
                            <span className="text-xs font-medium text-muted-foreground hover:brightness-125">
                                {language === "zh" ? "EN" : "中"}
                            </span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-9 h-9 rounded-md"
                            aria-label="Toggle Theme"
                        >
                            <span className="text-base hover:scale-110 transition-transform">
                                {theme === "light" ? "🌙" : "☀️"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

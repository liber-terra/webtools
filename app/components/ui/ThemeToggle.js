"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light");
        console.log("ThemeToggle useEffect", savedTheme);
        setTheme(savedTheme);
        updateTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        updateTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const updateTheme = (selectedTheme) => {
        if (selectedTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.style.colorScheme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Sun /> : <MoonStar />}
        </Button>
    );
}

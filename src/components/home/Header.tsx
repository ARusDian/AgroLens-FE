// components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // trigger once on mount

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-[#FDFBF5]/80 shadow-md" : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    className={`text-2xl font-bold flex items-center gap-2 ${scrolled ? "text-green-600" : "text-white"
                        }`}
                >
                    <Image
                        src="/Icon.png"
                        alt="Logo AgroLens"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span>AgroLens</span>
                </div>

                <div className="hidden md:flex space-x-8">
                    {["problem", "solution", "details", "timeline", "future"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`transition-colors font-medium ${scrolled ? "text-[#333D44]" : "text-white"
                                } hover:text-green-500`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

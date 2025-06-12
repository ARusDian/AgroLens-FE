"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false); // untuk hindari mismatch

    useEffect(() => {
        setMounted(true); // tandai bahwa komponen sudah di-mount client-side

        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        handleScroll(); // jalankan sekali saat mount
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null; // hindari rendering server-side awal

    return (
        <header
            id="header"
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FDFBF5]/80 shadow-md" : "bg-transparent"
                } backdrop-blur-md`}
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
                    <span className="tracking-tight">AgroLens</span>
                </div>

                <div className="hidden md:flex space-x-8">
                    {["problem", "solution", "details", "timeline", "future"].map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`nav-link hover:text-green-500 transition-colors ${scrolled ? "text-[#333D44]" : "text-white"
                                }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

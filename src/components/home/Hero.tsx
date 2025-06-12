// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div id="hero" className="relative -mt-[88px] w-screen min-h-screen flex items-center">
            <div className="absolute inset-0">
                <Image
                    src="/bg_padi.jpg"
                    alt="Latar Belakang Sawah"
                    fill
                    className="w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-60" />
            </div>

            <div className="relative z-10 w-full">
                <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">Selamat Datang di AgroLens</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Solusi cerdas untuk mendeteksi penyakit tanaman padi dengan teknologi AI. Dapatkan diagnosis cepat dan akurat untuk menjaga kesehatan tanaman Anda dan meningkatkan hasil panen.
                        </p>
                        <Link href="/diagnosa" className="inline-block">
                            <span className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 cursor-pointer">
                                Diagnosa Sekarang
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div />
                        <Image
                            src="/example_1.jpg"
                            alt="Penyakit Daun 1"
                            width={300}
                            height={200}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <div className="-translate-y-1/2">
                            <Image
                                src="/example_2.jpg"
                                alt="Penyakit Daun 2"
                                width={300}
                                height={200}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <Image
                            src="/example_3.jpg"
                            alt="Penyakit Daun 3"
                            width={300}
                            height={200}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

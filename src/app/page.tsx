"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/bg_padi.jpg" 
          alt="Latar Belakang Sawah" 
          fill
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-8 md:px-20 lg:px-32 py-10">
        <header>
          <h1 className="text-3xl font-bold text-green-400">AgroLens</h1>
        </header>

        <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Selamat Datang di AgroLens</h2>
            <p className="text-gray-300 leading-relaxed">
              Solusi cerdas untuk mendeteksi penyakit tanaman padi dengan teknologi AI. Dapatkan diagnosis cepat dan akurat untuk menjaga kesehatan tanaman Anda dan meningkatkan hasil panen.
            </p>
            <Link href="/diagnosa">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Diagnosa Sekarang
              </button>
            </Link>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
            <div className="col-span-1 row-span-1"></div>
            
            <div className="col-span-1 row-span-1">
              <Image 
                src="/example_1.jpg"
                alt="Penyakit Daun 1"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-1 row-span-1 -translate-y-1/2">
              <Image
                src="/example_2.jpg"
                alt="Penyakit Daun 2"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="col-span-1 row-span-1">
              <Image
                src="/example_3.jpg"
                alt="Penyakit Daun 3"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

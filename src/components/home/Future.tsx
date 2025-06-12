// components/Future.tsx
export default function Future() {
    const items = [
        {
            phase: "Fase 1 (Bulan 1-2)",
            desc: "Riset pengguna mendalam dan perancangan ulang antarmuka dengan fokus pada aksesibilitas untuk petani.",
        },
        {
            phase: "Fase 2 (Bulan 3-4)",
            desc: "Implementasi desain baru dan peningkatan akurasi model AI dengan pelatihan di infrastruktur cloud.",
        },
        {
            phase: "Fase 3 (Bulan 5-6)",
            desc: "Uji coba beta tertutup langsung dengan petani di lapangan, iterasi akhir, dan persiapan peluncuran awal.",
        },
    ];

    return (
        <section id="future" className="py-20 bg-green-50 -mx-6 px-6 rounded-2xl">
            <h2 className="text-4xl font-bold text-center mb-12">Rencana Pengembangan ke Depan</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {items.map(({ phase, desc }, idx) => (
                    <div key={idx}>
                        <h3 className="font-bold text-2xl text-green-700 mb-2">{phase}</h3>
                        <p className="text-gray-600">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
  
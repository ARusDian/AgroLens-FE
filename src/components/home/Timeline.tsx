// components/Timeline.tsx
export default function Timeline() {
    const data = [
        {
            week: "Minggu 1",
            title: "Studi & Persiapan Data",
            desc: "Studi literatur dan pengumpulan dataset gejala serta label penyakit padi.",
        },
        {
            week: "Minggu 2",
            title: "Pengembangan Model AI",
            desc: "Pemilihan, pelatihan, evaluasi, dan perbaikan model klasifikasi gambar dan NLP.",
        },
        {
            week: "Minggu 3",
            title: "Prototipe & Integrasi",
            desc: "Desain prototipe antarmuka, integrasi model, dan uji coba sistem menyeluruh.",
        },
        {
            week: "Minggu 4",
            title: "Finalisasi & Laporan",
            desc: "Deployment sistem dan penyusunan dokumentasi serta laporan akhir proyek.",
        },
    ];

    return (
        <section id="timeline" className="py-20 px-6 container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Jadwal Pelaksanaan Proyek</h2>
            <div className="relative">
                <div className="border-l-4 border-green-300 absolute h-full top-0 left-1/2 -ml-0.5" />
                <div className="space-y-12">
                    {data.map((item, i) => (
                        <div key={i} className="flex items-center w-full">
                            {i % 2 === 0 ? (
                                <>
                                    <div className="w-1/2 flex justify-end">
                                        <div className="bg-green-600 text-white font-bold p-4 rounded-full w-24 h-24 flex items-center justify-center text-center">
                                            {item.week}
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <div className="bg-white p-6 rounded-xl shadow-lg">
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-1/2 pr-8 text-right">
                                        <div className="bg-white p-6 rounded-xl shadow-lg">
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 flex justify-start">
                                        <div className="bg-green-600 text-white font-bold p-4 rounded-full w-24 h-24 flex items-center justify-center text-center">
                                            {item.week}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
  
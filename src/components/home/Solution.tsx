// components/Solution.tsx
export default function Solution() {
    return (
        <section id="solution" className="py-20 px-6 container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Memperkenalkan Solusi AgroLens</h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
                AgroLens hadir sebagai sistem diagnosis otomatis yang mengintegrasikan Computer Vision dan NLP untuk memberikan solusi yang cepat, akurat, dan mudah diakses.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((step) => {
                    const titles = ["Unggah Foto", "Diagnosis AI", "Interaksi & Solusi"];
                    const desc = [
                        "Pengguna cukup mengambil foto daun padi yang terindikasi penyakit dan mengunggahnya ke dalam sistem.",
                        "Model Computer Vision kami menganalisis gambar dan mengidentifikasi jenis penyakit secara otomatis dalam hitungan detik.",
                        "Dapatkan deskripsi detail dan ajukan pertanyaan lebih lanjut melalui chatbot NLP untuk memahami penyebab dan penanganannya.",
                    ];
                    return (
                        <div
                            key={step}
                            className="step-card bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="step-icon w-20 h-20 mx-auto mb-6 rounded-full bg-green-600 flex items-center justify-center transition-all duration-300 text-white text-4xl">
                                {step}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{titles[step - 1]}</h3>
                            <p className="text-gray-600">{desc[step - 1]}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

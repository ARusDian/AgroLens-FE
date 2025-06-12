// components/Details.tsx
export default function Details() {
    const items = [
        {
            title: "Strengths (Kekuatan)",
            color: "green",
            points: [
                "Solusi terintegrasi (CV + NLP).",
                "Praktis dan relevan dengan kebutuhan petani.",
                "Perencanaan teknologi dan manajemen yang jelas.",
            ],
        },
        {
            title: "Weaknesses (Kelemahan)",
            color: "amber",
            points: [
                "Keterbatasan komputasi pada prototipe awal.",
                "Ketergantungan pada dukungan eksternal (cloud).",
                "Antarmuka awal masih sederhana.",
            ],
        },
        {
            title: "Opportunities (Peluang)",
            color: "sky",
            points: [
                "Tingginya kebutuhan pasar akan solusi efektif.",
                "Kemajuan pesat teknologi AI.",
                "Potensi kolaborasi dengan institusi pertanian.",
            ],
        },
        {
            title: "Threats (Ancaman)",
            color: "red",
            points: [
                "Keterbatasan variasi dataset berkualitas.",
                "Potensi tantangan integrasi teknis.",
                "Risiko relevansi semantik pada output NLP.",
            ],
        },
    ];

    return (
        <section id="details" className="py-20 px-6 container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Inti Proyek AgroLens</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-3xl font-bold text-center mb-8">Analisis SWOT</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {items.map(({ title, color, points }) => (
                        <div
                            key={title}
                            className={`swot-card bg-${color}-50 p-6 rounded-xl border border-${color}-200`}
                        >
                            <h4 className={`font-bold text-xl mb-2 text-${color}-800`}>{title}</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {points.map((pt, idx) => (
                                    <li key={idx}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

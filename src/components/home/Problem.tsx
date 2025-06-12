// components/Problem.tsx
"use client";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Potensi Kehilangan Hasil", "Hasil Panen Aman"],
    datasets: [
        {
            data: [37, 63],
            backgroundColor: ["#ef4444", "#22c55e"],
            borderColor: "#FDFBF5",
            borderWidth: 4,
        },
    ],
};

const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 20,
                font: {
                    size: 14,
                    family: "Inter",
                },
            },
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    const label = tooltipItem.label || "";
                    const raw = typeof tooltipItem.raw === "number" ? tooltipItem.raw : Number(tooltipItem.raw);
                    return `${label}: ${raw}%`;
                },
            },
        },
    },
};

export default function Problem() {
    return (
        <section id="problem" className="py-20 px-6 container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
                Tantangan Besar Pertanian Padi di Indonesia
            </h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Produksi padi nasional menghadapi ancaman serius dari penyakit tanaman
                yang menyebabkan kerugian signifikan setiap tahunnya.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Dampak Ekonomi yang Mengkhawatirkan</h3>
                    <p className="text-gray-700 mb-4">
                        Berdasarkan data, petani padi di Indonesia dapat mengalami kegagalan panen
                        hingga <span className="text-red-600 font-bold text-3xl">37%</span> setiap tahunnya akibat serangan penyakit. Proses identifikasi manual yang lambat dan seringkali tidak akurat memperburuk keadaan.
                    </p>
                    <p className="text-gray-700">
                        Hal ini tidak hanya merugikan petani secara finansial, tetapi juga mengancam
                        stabilitas ketahanan pangan nasional.
                    </p>
                </div>
                <div className="w-full md:w-1/3 h-[300px] max-w-xs mx-auto">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </section>
    );
}

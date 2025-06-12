// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-20">
            <div className="container mx-auto px-6 py-8 text-center">
                <h3 className="text-2xl font-bold mb-2">AgroLens</h3>
                <p className="mb-4">Sebuah Proyek Capstone Grup Laskar AI (LA125-SM005)</p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://github.com/ARusDian/AgroLens-LaskarAI"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        Repositori GitHub
                    </a>
                </div>
                <p className="text-sm text-gray-500 mt-8">&copy; 2025 Laskar AI. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
}

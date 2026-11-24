import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar/Navbar";

function MainLayout({ children }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8faf8]">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-[70vh]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
                🌱
              </div>

              <h2 className="text-xl font-bold text-green-800">
                Agri-Sahayak
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-600">
              {t("footer.description")}
            </p>

            {/* Social Buttons */}
            <div className="mt-5 flex gap-3">

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-700 transition hover:bg-green-100"
              >
                f
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-xs font-bold text-green-700 transition hover:bg-green-100"
              >
                IG
              </button>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-700 transition hover:bg-green-100"
              >
                in
              </button>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {t("footer.quickLinks")}
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="/"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.home")}
              </a>

              <a
                href="/about"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.about")}
              </a>

              <a
                href="/crop-marketplace"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.marketplace")}
              </a>

              <a
                href="/products-marketplace"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.products")}
              </a>

              <a
                href="/government-schemes"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.schemes")}
              </a>

            </div>
          </div>

          {/* Services */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {t("footer.services")}
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="/disease-detection"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.disease")}
              </a>

              <a
                href="/weather"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.weather")}
              </a>

              <a
                href="/cold-storage"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.coldStorage")}
              </a>

              <a
                href="/voice-assistant"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.voiceAssistant")}
              </a>

              <a
                href="/equipment-rental"
                className="text-gray-600 transition hover:text-green-700"
              >
                {t("footer.equipment")}
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {t("footer.contact")}
            </h3>

            <div className="space-y-4 text-sm text-gray-600">

              <div>
                <p className="font-medium text-gray-800">
                  Email
                </p>

                <p>
                  support@agri-sahayak.com
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Location
                </p>

                <p>
                  Uttar Pradesh, India
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Support
                </p>

                <p>
                  Smart Farming Assistance
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-100">

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

            <p>
              © 2026 Agri-Sahayak. All rights reserved.
            </p>

            <p>
              Built for smarter and sustainable farming.
            </p>

          </div>

        </div>

      </footer>
    </div>
  );
}

export default MainLayout;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiUpload,
  FiX,
  FiCheckCircle,
  FiAlertTriangle,
  FiShield,
} from "react-icons/fi";

function DiseaseDetection() {
  const { t } = useTranslation();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");
    setResult(null);
  };

  const analyzeImage = () => {
    if (!image) return;

    setAnalyzing(true);
    setResult(null);

    // Demo AI analysis
    setTimeout(() => {
      setResult({
        disease: "Leaf Blight",
        confidence: "94%",
        severity: "Moderate",
        precaution:
          "Remove infected leaves and avoid excess moisture around the crop.",
        treatment:
          "Use a suitable fungicide recommended for the crop and maintain proper field ventilation.",
        prevention:
          "Use healthy seeds, maintain proper plant spacing and avoid unnecessary overhead irrigation.",
      });

      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-100 font-semibold mb-3">
            {t("disease.badge")}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {t("disease.title")}
          </h1>

          <p className="max-w-2xl mx-auto text-green-50 text-lg">
            {t("disease.description")}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {t("disease.uploadTitle")}
            </h2>

            <p className="text-gray-500 mb-6">
              {t("disease.uploadDescription")}
            </p>

            {!preview ? (
              <label className="border-2 border-dashed border-green-300 rounded-2xl h-80 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition">
                <FiUpload className="text-5xl text-green-600 mb-4" />

                <p className="font-semibold text-gray-700">
                  {t("disease.uploadButton")}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  JPG, PNG or JPEG
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div>
                <div className="relative">
                  <img
                    src={preview}
                    alt="Crop preview"
                    className="w-full h-80 object-cover rounded-2xl"
                  />

                  <button
                    onClick={removeImage}
                    className="absolute top-3 right-3 bg-white text-red-600 p-2 rounded-full shadow hover:bg-red-50"
                  >
                    <FiX />
                  </button>
                </div>

                <button
                  onClick={analyzeImage}
                  disabled={analyzing}
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 rounded-xl transition"
                >
                  {analyzing
                    ? t("disease.analyzing")
                    : t("disease.analyzeButton")}
                </button>
              </div>
            )}
          </div>

          {/* Result */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {t("disease.resultTitle")}
            </h2>

            <p className="text-gray-500 mb-6">
              {t("disease.resultDescription")}
            </p>

            {!result && !analyzing && (
              <div className="h-80 flex flex-col items-center justify-center text-center border border-gray-100 rounded-2xl">
                <FiShield className="text-5xl text-green-500 mb-4" />

                <p className="text-gray-600 font-medium">
                  {t("disease.noResult")}
                </p>
              </div>
            )}

            {analyzing && (
              <div className="h-80 flex flex-col items-center justify-center">
                <div className="w-14 h-14 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-5"></div>

                <p className="font-semibold text-gray-700">
                  {t("disease.analyzing")}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  AI is analyzing the crop image...
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <FiAlertTriangle className="text-red-600 text-xl" />

                    <span className="text-sm text-red-600 font-semibold">
                      Disease Detected
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    {result.disease}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Confidence:{" "}
                    <span className="font-semibold text-green-600">
                      {result.confidence}
                    </span>
                  </p>

                  <p className="text-gray-600">
                    Severity:{" "}
                    <span className="font-semibold">{result.severity}</span>
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FiCheckCircle className="text-green-600" />

                    <h4 className="font-bold text-gray-800">
                      Precaution
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {result.precaution}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Recommended Treatment
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {result.treatment}
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Prevention
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {result.prevention}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-5">
          <div className="flex gap-3">
            <FiShield className="text-green-600 text-xl mt-1" />

            <div>
              <h3 className="font-bold text-gray-800">
                AI Farming Assistance
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                This feature provides AI-assisted crop disease analysis and
                recommended precautions to help farmers make faster decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DiseaseDetection;
import { useState } from "react";
import {
  FiSearch,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiDroplet,
  FiTrendingUp,
} from "react-icons/fi";

function GovernmentSchemes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const schemes = [
    {
      id: 1,
      name: "PM-KISAN",
      fullName: "Pradhan Mantri Kisan Samman Nidhi",
      category: "Financial Support",
      icon: <FiCheckCircle />,
      description:
        "Income support scheme for eligible landholding farmer families.",
      benefit:
        "₹6,000 per year in three equal instalments.",
      eligibility:
        "Eligible landholding farmer families identified according to scheme guidelines.",
      action: "Check PM-KISAN Status",
      color: "green",
    },
    {
      id: 2,
      name: "PMFBY",
      fullName: "Pradhan Mantri Fasal Bima Yojana",
      category: "Crop Insurance",
      icon: <FiShield />,
      description:
        "Crop insurance scheme providing protection against notified crop losses.",
      benefit:
        "Crop insurance coverage and digital services for enrollment, policy status and loss reporting.",
      eligibility:
        "Eligibility depends on notified crops, areas, seasons and applicable scheme rules.",
      action: "Explore Crop Insurance",
      color: "blue",
    },
    {
      id: 3,
      name: "PMKSY",
      fullName: "Pradhan Mantri Krishi Sinchayee Yojana",
      category: "Irrigation",
      icon: <FiDroplet />,
      description:
        "Supports irrigation access and more efficient use of water in agriculture.",
      benefit:
        "Focus on improving irrigation access and water-use efficiency.",
      eligibility:
        "Availability and eligibility depend on the applicable PMKSY component and state implementation.",
      action: "Learn About Irrigation",
      color: "cyan",
    },
    {
      id: 4,
      name: "e-NAM",
      fullName: "National Agriculture Market",
      category: "Agriculture Market",
      icon: <FiTrendingUp />,
      description:
        "Pan-India electronic trading platform connecting participating agricultural markets.",
      benefit:
        "Supports transparent price discovery and online agricultural commodity trading.",
      eligibility:
        "Participation depends on the applicable market, commodity and registration requirements.",
      action: "Explore e-NAM",
      color: "orange",
    },
  ];

  const categories = [
    "All",
    "Financial Support",
    "Crop Insurance",
    "Irrigation",
    "Agriculture Market",
  ];

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesCategory =
      category === "All" || scheme.category === category;

    const searchText = search.toLowerCase();

    const matchesSearch =
      scheme.name.toLowerCase().includes(searchText) ||
      scheme.fullName.toLowerCase().includes(searchText) ||
      scheme.description.toLowerCase().includes(searchText) ||
      scheme.category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      cyan: "bg-cyan-100 text-cyan-600",
      orange: "bg-orange-100 text-orange-600",
    };

    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-100 font-semibold mb-3">
            GOVERNMENT SUPPORT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Government Schemes for Farmers
          </h1>

          <p className="max-w-2xl mx-auto text-green-50 text-lg">
            Discover agricultural schemes, financial support, crop insurance,
            irrigation initiatives and digital market services.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search schemes..."
              className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                category === item
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-green-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Available Schemes
          </h2>

          <p className="text-gray-500 mt-1">
            {filteredSchemes.length} scheme
            {filteredSchemes.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {filteredSchemes.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <FiSearch className="text-4xl text-gray-300 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-gray-700">
              No schemes found
            </h3>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${getColorClasses(
                      scheme.color
                    )}`}
                  >
                    {scheme.icon}
                  </div>

                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {scheme.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-5">
                  {scheme.name}
                </h3>

                <p className="text-sm font-medium text-green-700 mt-1">
                  {scheme.fullName}
                </p>

                <p className="text-gray-500 mt-4 leading-6">
                  {scheme.description}
                </p>

                <div className="bg-green-50 rounded-xl p-4 mt-5">
                  <p className="text-sm font-semibold text-green-700 mb-1">
                    Key benefit
                  </p>

                  <p className="text-sm text-gray-700">
                    {scheme.benefit}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Eligibility
                  </p>

                  <p className="text-sm text-gray-600">
                    {scheme.eligibility}
                  </p>
                </div>

                <button
                  onClick={() =>
                    alert(
                      `${scheme.name}\n\n${scheme.fullName}\n\nPlease verify current eligibility and application requirements on the official government portal before applying.`
                    )
                  }
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  {scheme.action}
                  <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <FiCheckCircle className="text-3xl text-green-600 mb-4" />

            <h3 className="font-bold text-gray-800">
              Verified Information
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Scheme information is based on official government sources.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <FiShield className="text-3xl text-blue-600 mb-4" />

            <h3 className="font-bold text-gray-800">
              Farmer Protection
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Find support related to income, insurance and agricultural
              infrastructure.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <FiTrendingUp className="text-3xl text-orange-500 mb-4" />

            <h3 className="font-bold text-gray-800">
              Better Opportunities
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Connect farmers with financial, irrigation and market-related
              government initiatives.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h3 className="font-bold text-yellow-900">
            Important
          </h3>

          <p className="text-sm text-yellow-800 mt-2 leading-6">
            Eligibility, application windows, notified crops, state
            implementation and other requirements can vary. Farmers should
            verify the latest details on the relevant official government
            portal before applying.
          </p>
        </div>
      </section>
    </div>
  );
}

export default GovernmentSchemes;
import { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiPackage,
  FiArrowRight,
  FiPlusCircle,
  FiX,
  FiCheckCircle,
  FiUpload,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

function CropMarketplace() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showSellModal, setShowSellModal] = useState(false);

  const [formData, setFormData] = useState({
    crop: "",
    variety: "",
    quantity: "",
    price: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const crops = [
    {
      id: 1,
      crop: t("cropMarketplace.crops.wheat"),
      variety: t("cropMarketplace.varieties.sharbati"),
      category: "Grains",
      quantity: "500 kg",
      price: "₹28/kg",
      location: "Lucknow, Uttar Pradesh",
    },
    {
      id: 2,
      crop: t("cropMarketplace.crops.rice"),
      variety: t("cropMarketplace.varieties.basmati"),
      category: "Grains",
      quantity: "800 kg",
      price: "₹52/kg",
      location: "Barabanki, Uttar Pradesh",
    },
    {
      id: 3,
      crop: t("cropMarketplace.crops.potato"),
      variety: t("cropMarketplace.varieties.local"),
      category: "Vegetables",
      quantity: "1200 kg",
      price: "₹20/kg",
      location: "Agra, Uttar Pradesh",
    },
    {
      id: 4,
      crop: t("cropMarketplace.crops.tomato"),
      variety: t("cropMarketplace.varieties.hybrid"),
      category: "Vegetables",
      quantity: "600 kg",
      price: "₹30/kg",
      location: "Kanpur, Uttar Pradesh",
    },
    {
      id: 5,
      crop: t("cropMarketplace.crops.mustard"),
      variety: t("cropMarketplace.varieties.pusa"),
      category: "Oilseeds",
      quantity: "400 kg",
      price: "₹58/kg",
      location: "Sitapur, Uttar Pradesh",
    },
    {
      id: 6,
      crop: t("cropMarketplace.crops.maize"),
      variety: t("cropMarketplace.varieties.hybrid"),
      category: "Grains",
      quantity: "700 kg",
      price: "₹24/kg",
      location: "Unnao, Uttar Pradesh",
    },
  ];

  const categories = [
    {
      value: "All",
      label: t("cropMarketplace.allCategories"),
    },
    {
      value: "Grains",
      label: t("cropMarketplace.categories.grains"),
    },
    {
      value: "Vegetables",
      label: t("cropMarketplace.categories.vegetables"),
    },
    {
      value: "Oilseeds",
      label: "Oilseeds",
    },
  ];

  const filteredCrops = crops.filter((crop) => {
    const matchesCategory =
      category === "All" || crop.category === category;

    const searchText = search.toLowerCase();

    const matchesSearch =
      crop.crop.toLowerCase().includes(searchText) ||
      crop.variety.toLowerCase().includes(searchText) ||
      crop.location.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeSellModal = () => {
    setShowSellModal(false);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        crop: "",
        variety: "",
        quantity: "",
        price: "",
        location: "",
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              {t("cropMarketplace.badge")}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("cropMarketplace.title")}
            </h1>

            <p className="mt-5 text-green-50 text-lg leading-8">
              {t("cropMarketplace.description")}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => setShowSellModal(true)}
                className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition"
              >
                <FiPlusCircle />
                {t("cropMarketplace.sellCrop")}
              </button>

              <a
                href="#crop-listings"
                className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
              >
                {t("cropMarketplace.listingsTitle")}
                <FiArrowRight />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="grid md:grid-cols-3 gap-4">

            {/* SEARCH */}
            <div className="md:col-span-2 relative">

              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t(
                  "cropMarketplace.searchPlaceholder"
                )}
                className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              {categories.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

          </div>

        </div>

      </section>

      {/* LISTINGS */}
      <section
        id="crop-listings"
        className="max-w-7xl mx-auto px-6 pb-12"
      >

        <div className="mb-6">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {t("cropMarketplace.listingsTitle")}
          </h2>

          <p className="text-gray-500 mt-2">
            {t("cropMarketplace.listingsDescription")}
          </p>

          <p className="text-sm text-green-600 font-semibold mt-2">
            {filteredCrops.length}{" "}
            {t("cropMarketplace.listingsCount")}
          </p>

        </div>

        {filteredCrops.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">

            <FiSearch className="text-5xl text-gray-300 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-gray-700">
              {t("cropMarketplace.noCrops")}
            </h3>

            <p className="text-gray-500 mt-2">
              {t("cropMarketplace.changeFilter")}
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredCrops.map((crop) => (

              <div
                key={crop.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >

                {/* CARD TOP */}
                <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center">

                  <FiPackage className="text-6xl text-green-600" />

                </div>

                <div className="p-6">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {crop.crop}
                      </h3>

                      <p className="text-sm text-green-600 font-medium mt-1">
                        {crop.variety}
                      </p>
                    </div>

                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      {crop.category}
                    </span>

                  </div>

                  {/* DETAILS */}
                  <div className="mt-5 space-y-3">

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-gray-500">
                        {t("cropMarketplace.quantity")}
                      </span>

                      <span className="font-semibold text-gray-800">
                        {crop.quantity}
                      </span>

                    </div>

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-gray-500">
                        {t("cropMarketplace.price")}
                      </span>

                      <span className="font-bold text-green-600">
                        {crop.price}
                      </span>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <FiMapPin />

                      <span>{crop.location}</span>

                    </div>

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      alert(
                        `Crop Listing\n\n${crop.crop}\n${crop.variety}\n${crop.quantity}\n${crop.price}\n${crop.location}`
                      )
                    }
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    {t("cropMarketplace.viewListing")}
                    <FiArrowRight />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* BUY / SELL SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 gap-6">

          {/* BUY */}
          <div className="bg-white rounded-2xl shadow-sm p-7 border border-gray-100">

            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              <FiPackage />
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              {t("cropMarketplace.lookingToBuy")}
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              {t("cropMarketplace.buyDescription")}
            </p>

            <a
              href="#crop-listings"
              className="inline-flex items-center gap-2 mt-5 text-green-600 font-semibold hover:text-green-700"
            >
              {t("cropMarketplace.viewListing")}
              <FiArrowRight />
            </a>

          </div>

          {/* SELL */}
          <div className="bg-green-700 rounded-2xl shadow-sm p-7 text-white">

            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-5">
              <FiPlusCircle />
            </div>

            <h3 className="text-2xl font-bold">
              {t("cropMarketplace.wantToSell")}
            </h3>

            <p className="text-green-50 mt-3 leading-7">
              {t("cropMarketplace.sellDescription")}
            </p>

            <button
              onClick={() => setShowSellModal(true)}
              className="mt-5 bg-white text-green-700 hover:bg-green-50 px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition"
            >
              {t("cropMarketplace.sellCrop")}
              <FiArrowRight />
            </button>

          </div>

        </div>

      </section>

      {/* SELL CROP MODAL */}
      {showSellModal && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Sell Your Crop
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Create a listing for buyers
                </p>
              </div>

              <button
                onClick={closeSellModal}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
              >
                <FiX />
              </button>

            </div>

            {submitted ? (

              /* SUCCESS */
              <div className="p-10 text-center">

                <FiCheckCircle className="text-6xl text-green-600 mx-auto mb-5" />

                <h3 className="text-2xl font-bold text-gray-800">
                  Listing Created!
                </h3>

                <p className="text-gray-500 mt-3">
                  Your crop listing has been created successfully.
                </p>

                <div className="bg-green-50 rounded-xl p-4 mt-6 text-left">

                  <p className="text-sm text-gray-500">
                    Crop
                  </p>

                  <p className="font-bold text-gray-800">
                    {formData.crop}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Quantity
                  </p>

                  <p className="font-bold text-gray-800">
                    {formData.quantity} kg
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Price
                  </p>

                  <p className="font-bold text-green-600">
                    ₹{formData.price}/kg
                  </p>

                </div>

                <button
                  onClick={closeSellModal}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold"
                >
                  Done
                </button>

              </div>

            ) : (

              /* FORM */
              <form
                onSubmit={handleSellSubmit}
                className="p-6 space-y-5"
              >

                {/* CROP */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Crop
                  </label>

                  <select
                    name="crop"
                    value={formData.crop}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">
                      Select crop
                    </option>

                    <option value="Wheat">
                      Wheat
                    </option>

                    <option value="Rice">
                      Rice
                    </option>

                    <option value="Potato">
                      Potato
                    </option>

                    <option value="Tomato">
                      Tomato
                    </option>

                    <option value="Mustard">
                      Mustard
                    </option>

                    <option value="Maize">
                      Maize
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

                {/* VARIETY */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Variety
                  </label>

                  <input
                    type="text"
                    name="variety"
                    value={formData.variety}
                    onChange={handleInputChange}
                    placeholder="Enter crop variety"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* QUANTITY + PRICE */}
                <div className="grid grid-cols-2 gap-4">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity (kg)
                    </label>

                    <input
                      type="number"
                      min="1"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="500"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price / kg
                    </label>

                    <input
                      type="number"
                      min="1"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="28"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>

                </div>

                {/* LOCATION */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Lucknow, Uttar Pradesh"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* IMAGE */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Crop Image
                  </label>

                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center">

                    <FiUpload className="text-3xl text-gray-400 mx-auto mb-2" />

                    <p className="text-sm font-medium text-gray-600">
                      Upload crop image
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      Optional for demo
                    </p>

                    <input
                      type="file"
                      accept="image/*"
                      className="mt-4 w-full text-sm"
                    />

                  </div>

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold transition"
                >
                  Create Crop Listing
                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default CropMarketplace;
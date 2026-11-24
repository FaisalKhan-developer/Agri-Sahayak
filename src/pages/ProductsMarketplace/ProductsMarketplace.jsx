import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaShoppingCart,
  FaSeedling,
  FaFlask,
  FaLeaf,
  FaFilter,
  FaStar,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Wheat Seeds",
    category: "Seeds",
    price: 850,
    unit: "10 kg",
    rating: 4.8,
    icon: <FaSeedling />,
    description:
      "High-quality wheat seeds suitable for reliable crop production.",
  },
  {
    id: 2,
    name: "Hybrid Rice Seeds",
    category: "Seeds",
    price: 1200,
    unit: "10 kg",
    rating: 4.7,
    icon: <FaSeedling />,
    description:
      "Hybrid rice seeds designed for healthy crop growth.",
  },
  {
    id: 3,
    name: "Organic Compost",
    category: "Fertilizers",
    price: 550,
    unit: "25 kg",
    rating: 4.6,
    icon: <FaLeaf />,
    description:
      "Organic compost for improving soil health and fertility.",
  },
  {
    id: 4,
    name: "NPK Fertilizer",
    category: "Fertilizers",
    price: 950,
    unit: "25 kg",
    rating: 4.8,
    icon: <FaFlask />,
    description:
      "Balanced fertilizer containing essential nutrients for crops.",
  },
  {
    id: 5,
    name: "Urea Fertilizer",
    category: "Fertilizers",
    price: 650,
    unit: "45 kg",
    rating: 4.5,
    icon: <FaFlask />,
    description:
      "Nitrogen-rich fertilizer commonly used for crop nutrition.",
  },
  {
    id: 6,
    name: "Vegetable Seed Pack",
    category: "Seeds",
    price: 350,
    unit: "1 pack",
    rating: 4.6,
    icon: <FaSeedling />,
    description:
      "A selection of quality vegetable seeds for farming.",
  },
  {
    id: 7,
    name: "Bio Fertilizer",
    category: "Agricultural Products",
    price: 720,
    unit: "10 kg",
    rating: 4.4,
    icon: <FaLeaf />,
    description:
      "Bio-based agricultural product designed to support soil health.",
  },
  {
    id: 8,
    name: "Crop Growth Booster",
    category: "Agricultural Products",
    price: 480,
    unit: "1 litre",
    rating: 4.5,
    icon: <FaLeaf />,
    description:
      "Agricultural growth-support product for crop management.",
  },
];

function ProductsMarketplace() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const addToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="min-h-screen bg-[#f7faf7]">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-100">
              {t("productsMarketplace.badge")}
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {t("productsMarketplace.title")}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-green-50 md:text-lg">
              {t("productsMarketplace.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                {t("productsMarketplace.qualityProducts")}
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                {t("productsMarketplace.easySearch")}
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                {t("productsMarketplace.farmerFriendly")}
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}
              <div className="relative w-full lg:max-w-xl">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t(
                    "productsMarketplace.searchPlaceholder"
                  )}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

              </div>

              {/* Category */}
              <div className="flex items-center gap-3">

                <FaFilter className="text-green-700" />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
                >
                  <option value="All">
                    {t("productsMarketplace.allProducts")}
                  </option>

                  <option value="Seeds">
                    {t("productsMarketplace.seeds")}
                  </option>

                  <option value="Fertilizers">
                    {t("productsMarketplace.fertilizers")}
                  </option>

                  <option value="Agricultural Products">
                    {t("productsMarketplace.agriculturalProducts")}
                  </option>
                </select>

                <div className="relative rounded-xl bg-green-50 p-3 text-green-700">

                  <FaShoppingCart />

                  {cartCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                      {cartCount}
                    </span>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                {t("productsMarketplace.availableProducts")}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {t("productsMarketplace.showing")}{" "}
                {filteredProducts.length}{" "}
                {filteredProducts.length !== 1
                  ? t("productsMarketplace.products")
                  : t("productsMarketplace.product")}
              </p>

            </div>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Product Image Placeholder */}
                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-green-600 shadow-sm">
                      {product.icon}
                    </div>

                  </div>

                  {/* Product Details */}
                  <div className="p-5">

                    <div className="mb-3 flex items-center justify-between gap-2">

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        {t(
                          `productsMarketplace.categories.${product.category}`,
                          product.category
                        )}
                      </span>

                      <div className="flex items-center gap-1 text-xs font-medium text-gray-600">

                        <FaStar className="text-yellow-400" />

                        {product.rating}

                      </div>

                    </div>

                    <h3 className="text-lg font-bold text-gray-900">
                      {t(
                        `productsMarketplace.items.${product.name}`,
                        product.name
                      )}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                      {t(
                        `productsMarketplace.descriptions.${product.name}`,
                        product.description
                      )}
                    </p>

                    <div className="mt-5 flex items-end justify-between">

                      <div>

                        <p className="text-xs text-gray-500">
                          {t("productsMarketplace.price")}
                        </p>

                        <p className="text-xl font-bold text-green-700">
                          ₹{product.price}
                        </p>

                        <p className="text-xs text-gray-400">
                          {t("productsMarketplace.per")}{" "}
                          {product.unit}
                        </p>

                      </div>

                      <button
                        onClick={addToCart}
                        className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                      >
                        <FaShoppingCart />
                        {t("productsMarketplace.add")}
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">

              <FaSearch className="mx-auto text-3xl text-gray-300" />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {t("productsMarketplace.noProducts")}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {t("productsMarketplace.tryDifferent")}
              </p>

            </div>
          )}

        </div>
      </section>

      {/* Information Section */}
      <section className="border-t border-gray-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-green-50 p-6">

              <FaSeedling className="text-2xl text-green-600" />

              <h3 className="mt-4 font-bold text-gray-900">
                {t("productsMarketplace.qualitySeeds")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {t("productsMarketplace.qualitySeedsDescription")}
              </p>

            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">

              <FaFlask className="text-2xl text-green-600" />

              <h3 className="mt-4 font-bold text-gray-900">
                {t("productsMarketplace.fertilizersTitle")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {t(
                  "productsMarketplace.fertilizersDescription"
                )}
              </p>

            </div>

            <div className="rounded-2xl bg-lime-50 p-6">

              <FaShoppingCart className="text-2xl text-green-600" />

              <h3 className="mt-4 font-bold text-gray-900">
                {t("productsMarketplace.easyShopping")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {t(
                  "productsMarketplace.easyShoppingDescription"
                )}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Demo Notice */}
      <div className="bg-yellow-50 px-6 py-4 text-center text-sm text-yellow-800">

        <strong>
          {t("productsMarketplace.demoNoticeTitle")}
        </strong>{" "}

        {t("productsMarketplace.demoNoticeDescription")}

      </div>

    </div>
  );
}

export default ProductsMarketplace;
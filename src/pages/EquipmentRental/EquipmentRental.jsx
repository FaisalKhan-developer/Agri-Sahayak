import { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiTool,
  FiArrowRight,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

function EquipmentRental() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Equipment");
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    duration: "1",
    location: "",
  });

  const equipment = [
    {
      id: 1,
      name: t("equipmentRental.items.tractor"),
      type: t("equipmentRental.types.tractor"),
      category: "Tractor",
      price: "₹1,200/day",
      location: "Lucknow, Uttar Pradesh",
      description: t("equipmentRental.descriptions.tractor"),
    },
    {
      id: 2,
      name: t("equipmentRental.items.rotavator"),
      type: t("equipmentRental.types.tillage"),
      category: "Tillage",
      price: "₹900/day",
      location: "Barabanki, Uttar Pradesh",
      description: t("equipmentRental.descriptions.rotavator"),
    },
    {
      id: 3,
      name: t("equipmentRental.items.seedDrill"),
      type: t("equipmentRental.types.seeding"),
      category: "Seeding",
      price: "₹800/day",
      location: "Kanpur, Uttar Pradesh",
      description: t("equipmentRental.descriptions.seedDrill"),
    },
    {
      id: 4,
      name: t("equipmentRental.items.harvester"),
      type: t("equipmentRental.types.harvesting"),
      category: "Harvesting",
      price: "₹2,500/day",
      location: "Sitapur, Uttar Pradesh",
      description: t("equipmentRental.descriptions.harvester"),
    },
    {
      id: 5,
      name: t("equipmentRental.items.cultivator"),
      type: t("equipmentRental.types.tillage"),
      category: "Tillage",
      price: "₹700/day",
      location: "Unnao, Uttar Pradesh",
      description: t("equipmentRental.descriptions.cultivator"),
    },
    {
      id: 6,
      name: t("equipmentRental.items.pump"),
      type: t("equipmentRental.types.irrigation"),
      category: "Irrigation",
      price: "₹500/day",
      location: "Lucknow, Uttar Pradesh",
      description: t("equipmentRental.descriptions.pump"),
    },
  ];

  const categories = [
    "All Equipment",
    "Tractor",
    "Tillage",
    "Seeding",
    "Harvesting",
    "Irrigation",
  ];

  const filteredEquipment = equipment.filter((item) => {
    const matchesCategory =
      category === "All Equipment" || item.category === category;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.type.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const openBooking = (item) => {
    setSelectedEquipment(item);
    setBookingDone(false);
  };

  const closeBooking = () => {
    setSelectedEquipment(null);
    setBookingDone(false);

    setBookingData({
      name: "",
      phone: "",
      date: "",
      duration: "1",
      location: "",
    });
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingDone(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-3xl">

            <span className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              {t("equipmentRental.badge")}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("equipmentRental.title")}
            </h1>

            <p className="mt-5 text-green-50 text-lg leading-8">
              {t("equipmentRental.description")}
            </p>

          </div>

        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="grid md:grid-cols-3 gap-4">

            <div className="md:col-span-2 relative">

              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t(
                  "equipmentRental.searchPlaceholder"
                )}
                className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All Equipment"
                    ? t("equipmentRental.allEquipment")
                    : item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </section>

      {/* EQUIPMENT */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="mb-6">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {t("equipmentRental.availableTitle")}
          </h2>

          <p className="text-gray-500 mt-2">
            {t("equipmentRental.availableDescription")}
          </p>

        </div>

        {filteredEquipment.length === 0 ? (

          <div className="bg-white rounded-2xl p-12 text-center">

            <FiSearch className="text-5xl text-gray-300 mx-auto mb-4" />

            <h3 className="text-xl font-bold text-gray-700">
              {t("equipmentRental.noEquipment")}
            </h3>

            <p className="text-gray-500 mt-2">
              {t("equipmentRental.changeFilter")}
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredEquipment.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >

                {/* IMAGE AREA */}
                <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center">

                  <FiTool className="text-6xl text-green-600" />

                </div>

                <div className="p-6">

                  <div className="flex justify-between items-start gap-3">

                    <div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="text-sm text-green-600 font-medium mt-1">
                        {item.type}
                      </p>

                    </div>

                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      Available
                    </span>

                  </div>

                  <p className="text-gray-500 text-sm mt-4 leading-6">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-3">

                    <div className="flex justify-between text-sm">

                      <span className="text-gray-500">
                        {t("equipmentRental.rentalPrice")}
                      </span>

                      <span className="font-bold text-green-600">
                        {item.price}
                      </span>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <FiMapPin />

                      <span>{item.location}</span>

                    </div>

                  </div>

                  <button
                    onClick={() => openBooking(item)}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    {t("equipmentRental.rentNow")}
                    <FiArrowRight />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-gray-800">
            {t("equipmentRental.howTitle")}
          </h2>

          <p className="text-gray-500 mt-2">
            {t("equipmentRental.howDescription")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-green-50 rounded-xl p-6">

              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>

              <h3 className="font-bold text-gray-800 mt-4">
                {t("equipmentRental.stepOneTitle")}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {t("equipmentRental.stepOneDescription")}
              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-6">

              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>

              <h3 className="font-bold text-gray-800 mt-4">
                {t("equipmentRental.stepTwoTitle")}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {t("equipmentRental.stepTwoDescription")}
              </p>

            </div>

            <div className="bg-orange-50 rounded-xl p-6">

              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>

              <h3 className="font-bold text-gray-800 mt-4">
                {t("equipmentRental.stepThreeTitle")}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {t("equipmentRental.stepThreeDescription")}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NOTICE */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">

          <h3 className="font-bold text-yellow-900">
            {t("equipmentRental.noticeTitle")}
          </h3>

          <p className="text-sm text-yellow-800 mt-2 leading-6">
            {t("equipmentRental.noticeDescription")}
          </p>

        </div>

      </section>

      {/* BOOKING MODAL */}
      {selectedEquipment && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div>

                <h2 className="text-xl font-bold text-gray-800">
                  Rent Equipment
                </h2>

                <p className="text-sm text-green-600 font-medium mt-1">
                  {selectedEquipment.name}
                </p>

              </div>

              <button
                onClick={closeBooking}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
              >
                <FiX />
              </button>

            </div>

            {bookingDone ? (

              /* SUCCESS */
              <div className="p-10 text-center">

                <FiCheckCircle className="text-6xl text-green-600 mx-auto mb-5" />

                <h3 className="text-2xl font-bold text-gray-800">
                  Rental Request Submitted!
                </h3>

                <p className="text-gray-500 mt-3">
                  Your equipment rental request has been recorded.
                </p>

                <div className="bg-green-50 rounded-xl p-5 mt-6 text-left">

                  <p className="text-sm text-gray-500">
                    Equipment
                  </p>

                  <p className="font-bold text-gray-800">
                    {selectedEquipment.name}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Rental duration
                  </p>

                  <p className="font-bold text-gray-800">
                    {bookingData.duration} day
                    {bookingData.duration !== "1" ? "s" : ""}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Date
                  </p>

                  <p className="font-bold text-gray-800">
                    {bookingData.date}
                  </p>

                </div>

                <button
                  onClick={closeBooking}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold"
                >
                  Done
                </button>

              </div>

            ) : (

              /* FORM */
              <form
                onSubmit={handleBooking}
                className="p-6 space-y-5"
              >

                {/* NAME */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* DATE */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rental Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* DURATION */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rental Duration
                  </label>

                  <select
                    name="duration"
                    value={bookingData.duration}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                  </select>

                </div>

                {/* LOCATION */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery / Farm Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={bookingData.location}
                    onChange={handleChange}
                    placeholder="Enter your farm location"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* SUMMARY */}
                <div className="bg-gray-50 rounded-xl p-4">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Equipment
                    </span>

                    <span className="font-semibold text-gray-800">
                      {selectedEquipment.name}
                    </span>

                  </div>

                  <div className="flex justify-between text-sm mt-2">

                    <span className="text-gray-500">
                      Daily rate
                    </span>

                    <span className="font-bold text-green-600">
                      {selectedEquipment.price}
                    </span>

                  </div>

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold transition"
                >
                  Submit Rental Request
                </button>

              </form>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default EquipmentRental;
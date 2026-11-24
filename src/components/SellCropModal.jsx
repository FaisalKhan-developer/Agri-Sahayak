import { useState } from "react";
import { FiX, FiUpload, FiCheckCircle } from "react-icons/fi";

function SellCropModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    crop: "",
    variety: "",
    quantity: "",
    price: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Sell Your Crop
            </h2>
            <p className="text-sm text-gray-500">
              Create a crop listing for buyers
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            <FiX />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">

            <FiCheckCircle className="text-green-600 text-6xl mx-auto mb-5" />

            <h3 className="text-2xl font-bold text-gray-800">
              Listing Created!
            </h3>

            <p className="text-gray-500 mt-3">
              Your crop listing has been created successfully.
            </p>

            <button
              onClick={onClose}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">

            {/* Crop */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Crop
              </label>

              <select
                name="crop"
                value={formData.crop}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select crop</option>
                <option value="Wheat">Wheat</option>
                <option value="Rice">Rice</option>
                <option value="Potato">Potato</option>
                <option value="Tomato">Tomato</option>
                <option value="Mustard">Mustard</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Variety */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Variety
              </label>

              <input
                type="text"
                name="variety"
                value={formData.variety}
                onChange={handleChange}
                placeholder="Enter crop variety"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Quantity + Price */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Quantity
                </label>

                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="100"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Price / kg
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="25"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Upload */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center">
              <FiUpload className="text-2xl text-gray-400 mx-auto mb-2" />

              <p className="text-sm font-medium text-gray-600">
                Upload crop image
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Optional for demo
              </p>

              <input
                type="file"
                accept="image/*"
                className="mt-3 text-sm w-full"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Create Crop Listing
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

export default SellCropModal;
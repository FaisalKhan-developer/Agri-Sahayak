import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiCloud,
  FiDroplet,
  FiWind,
  FiSun,
  FiCloudRain,
  FiAlertTriangle,
  FiCheckCircle,
} from "react-icons/fi";

function Weather() {
  const { t } = useTranslation();
  const [city, setCity] = useState("Lucknow");
const [weatherChecked, setWeatherChecked] = useState(false);

  const weather = {
    temperature: 28,
    humidity: 68,
    wind: 12,
    rain: 20,
    condition: "Partly Cloudy",
  };

  const alerts = [
    {
      type: "warning",
      title: "Irrigation Alert",
      text: "Moderate humidity and low rainfall are expected. Check soil moisture before irrigation.",
    },
    {
      type: "success",
      title: "Farming Condition",
      text: "Current conditions are suitable for routine field activities and crop monitoring.",
    },
    {
      type: "info",
      title: "Crop Protection",
      text: "Monitor crops for fungal infections if humidity remains high.",
    },
  ];

  const forecast = [
    { day: "Today", temp: 28, rain: 20, icon: <FiCloud /> },
    { day: "Tomorrow", temp: 30, rain: 15, icon: <FiSun /> },
    { day: "Day 3", temp: 27, rain: 45, icon: <FiCloudRain /> },
    { day: "Day 4", temp: 29, rain: 30, icon: <FiCloud /> },
  ];

const handleSearch = (e) => {
  e.preventDefault();

  if (!city.trim()) {
    setCity("Lucknow");
  }

  setWeatherChecked(true);
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-100 font-semibold mb-3">
            {t("weather.badge")}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("weather.title")}
          </h1>

          <p className="max-w-2xl mx-auto text-green-50 text-lg">
            {t("weather.description")}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city or village"
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-xl"
          >
            Check Weather
          </button>
        </form>

        {/* Current Weather */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="text-gray-500 mb-2">Current Weather</p>

              <h2 className="text-3xl font-bold text-gray-800">
                {city}
              </h2>

              <div className="flex items-center gap-4 mt-5">
                <FiCloud className="text-6xl text-green-600" />

                <div>
                  <div className="text-5xl font-bold text-gray-800">
                    {weather.temperature}°C
                  </div>

                  <p className="text-gray-500">
                    {weather.condition}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-5 min-w-[140px]">
                <FiDroplet className="text-2xl text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-2xl font-bold text-gray-800">
                  {weather.humidity}%
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 min-w-[140px]">
                <FiWind className="text-2xl text-green-600 mb-2" />
                <p className="text-sm text-gray-500">Wind</p>
                <p className="text-2xl font-bold text-gray-800">
                  {weather.wind} km/h
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-5 min-w-[140px]">
                <FiCloudRain className="text-2xl text-cyan-600 mb-2" />
                <p className="text-sm text-gray-500">Rain Chance</p>
                <p className="text-2xl font-bold text-gray-800">
                  {weather.rain}%
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-5 min-w-[140px]">
                <FiSun className="text-2xl text-yellow-600 mb-2" />
                <p className="text-sm text-gray-500">Farm Condition</p>
                <p className="text-lg font-bold text-gray-800">
                  Suitable
                </p>
              </div>
            </div>
          </div>
        </div>

{weatherChecked && (
  <>
    {/* Farming Alerts */}
    <div className="mb-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Farming Alerts
            </h2>

            <p className="text-gray-500 mt-1">
              Weather-based recommendations for farmers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  {alert.type === "warning" ? (
                    <FiAlertTriangle className="text-yellow-500 text-2xl shrink-0" />
                  ) : alert.type === "success" ? (
                    <FiCheckCircle className="text-green-600 text-2xl shrink-0" />
                  ) : (
                    <FiCloud className="text-blue-600 text-2xl shrink-0" />
                  )}

                  <div>
                    <h3 className="font-bold text-gray-800">
                      {alert.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-6">
                      {alert.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          </>
)}

        {/* Forecast */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            4-Day Forecast
          </h2>

          <p className="text-gray-500 mb-6">
            Plan your farming activities according to expected conditions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forecast.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl p-5 text-center"
              >
                <p className="font-semibold text-gray-700">
                  {item.day}
                </p>

                <div className="text-3xl text-green-600 flex justify-center my-4">
                  {item.icon}
                </div>

                <p className="text-2xl font-bold text-gray-800">
                  {item.temp}°C
                </p>

                <p className="text-sm text-blue-600 mt-2">
                  Rain: {item.rain}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-yellow-800">
            <strong>Hackathon Demo:</strong> Weather values shown here are
            demonstration data. A live weather API can be connected during
            production integration.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Weather;
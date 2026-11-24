import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaCloudSun,
  FaMicroscope,
  FaMicrophone,
  FaSnowflake,
  FaShoppingBasket,
  FaTractor,
  FaSeedling,
  FaLandmark,
  FaArrowRight,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("agriSahayakUser");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Invalid user data");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("agriSahayakUser");
    setUser(null);
    navigate("/login");
  };

  const tools = [
    {
      title: "Disease Detection",
      description: "Detect crop diseases and get precaution suggestions.",
      icon: <FaMicroscope />,
      link: "/disease-detection",
    },
    {
      title: "Weather Alerts",
      description: "Check weather conditions and farming alerts.",
      icon: <FaCloudSun />,
      link: "/weather",
    },
    {
      title: "Voice Assistant",
      description: "Ask farming questions in Hindi or English.",
      icon: <FaMicrophone />,
      link: "/voice-assistant",
    },
    {
      title: "Cold Storage",
      description: "Find nearby cold storage facilities.",
      icon: <FaSnowflake />,
      link: "/cold-storage",
    },
  ];

  const services = [
    {
      title: "Crop Marketplace",
      description: "Buy and sell crops directly.",
      icon: <FaLeaf />,
      link: "/crop-marketplace",
    },
    {
      title: "Seeds & Fertilizers",
      description: "Explore agricultural products.",
      icon: <FaShoppingBasket />,
      link: "/products-marketplace",
    },
    {
      title: "Equipment Rental",
      description: "Find and rent farming equipment.",
      icon: <FaTractor />,
      link: "/equipment-rental",
    },
    {
      title: "Government Schemes",
      description: "Explore farmer welfare schemes.",
      icon: <FaLandmark />,
      link: "/government-schemes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-green-100">
                Farmer Dashboard
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Welcome
                {user?.name ? `, ${user.name}` : " to Agri-Sahayak"} 👋
              </h1>

              <p className="mt-3 max-w-2xl text-green-50">
                Manage your farming activities, explore smart tools, and access
                agricultural services from one place.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <FaUserCircle className="text-3xl" />

                <div>
                  <p className="text-sm font-semibold">
                    {user?.name || "Farmer"}
                  </p>

                  <p className="text-xs text-green-100">
                    {user?.email || "Demo Account"}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Status */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <FaCloudSun className="mb-4 text-3xl text-green-600" />
            <p className="text-sm text-gray-500">Weather</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">28°C</h3>
            <p className="mt-1 text-sm text-gray-500">Partly Cloudy</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <FaLeaf className="mb-4 text-3xl text-green-600" />
            <p className="text-sm text-gray-500">Crop Market</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">Active</h3>
            <p className="mt-1 text-sm text-gray-500">
              Buy & Sell Crops
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <FaMicrophone className="mb-4 text-3xl text-green-600" />
            <p className="text-sm text-gray-500">Farmer Support</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">24/7</h3>
            <p className="mt-1 text-sm text-gray-500">
              Voice Assistant
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <FaSeedling className="mb-4 text-3xl text-green-600" />
            <p className="text-sm text-gray-500">Smart Tools</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">8+</h3>
            <p className="mt-1 text-sm text-gray-500">
              Farming Services
            </p>
          </div>
        </div>
      </section>

      {/* Smart Farming Tools */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Smart Farming Tools
          </h2>

          <p className="mt-2 text-gray-600">
            Use AI-powered tools to make better farming decisions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              to={tool.link}
              className="group rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-600">
                {tool.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {tool.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600">
                Explore
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Marketplace & Services */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Marketplace & Services
          </h2>

          <p className="mt-2 text-gray-600">
            Access essential agricultural marketplaces and services.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-600">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600">
                Open Service
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Demo Notice */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl text-white">
              <FaLeaf />
            </div>

            <div>
              <h3 className="font-bold text-green-800">
                Agri-Sahayak Hackathon Demo
              </h3>

              <p className="mt-1 text-sm leading-6 text-green-700">
                This dashboard currently uses demo data for selected services.
                The interface is designed to demonstrate the complete farmer
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
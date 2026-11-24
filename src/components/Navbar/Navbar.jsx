import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLeaf, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const handleLogout = () => {
  localStorage.removeItem("agriSahayakUser");
  setUser(null);
};
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLanguage = i18n.language === "hi" ? "hi" : "en";

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsMenuOpen(false);
  };

  const [user, setUser] = useState(null);

useEffect(() => {
  const savedUser = localStorage.getItem("agriSahayakUser");

  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);

  const navLinks = [
    {
      name: t("navbar.home"),
      path: "/",
    },
    {
      name: t("navbar.marketplace"),
      path: "/crop-marketplace",
    },
    {
      name: t("navbar.products"),
      path: "/products-marketplace",
    },
    {
      name: t("navbar.schemes"),
      path: "/government-schemes",
    },
    {
      name: t("navbar.dashboard"),
      path: "/dashboard",
    },
    {
      name: t("navbar.about"),
      path: "/about",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl text-white shadow-sm">
            <FaLeaf />
          </div>

          <div>
            <h1 className="text-lg font-extrabold leading-tight text-green-700">
              Agri-Sahayak
            </h1>

            <p className="hidden text-[11px] leading-tight text-gray-500 sm:block">
              {t("navbar.tagline")}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={changeLanguage}
            className="flex items-center gap-1 rounded-lg border border-green-600 px-3 py-1.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            <FaGlobe />

            {currentLanguage === "en" ? "हिंदी" : "English"}
          </button>

{user ? (
  <div className="flex items-center gap-3">
    <span className="text-sm font-semibold text-gray-700">
      👋 {user.name || "Farmer"}
    </span>

    <Link
      to="/dashboard"
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
    >
      {t("navbar.dashboard")}
    </Link>

    <button
      type="button"
      onClick={handleLogout}
      className="border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-semibold"
    >
      {i18n.language === "hi" ? "लॉगआउट" : "Logout"}
    </button>
  </div>
) : (
  <>
    <Link
      to="/login"
      className="text-green-700 font-semibold hover:text-green-800"
    >
      {t("navbar.login")}
    </Link>

    <Link
      to="/register"
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
    >
      {t("navbar.register")}
    </Link>
  </>
)}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4">
            <button
              onClick={changeLanguage}
              className="flex items-center justify-center gap-1 rounded-lg border border-green-600 px-2 py-2.5 text-sm font-semibold text-green-700"
            >
              <FaGlobe />

              {currentLanguage === "en" ? "हिंदी" : "English"}
            </button>

            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-lg border border-green-600 px-2 py-2.5 text-sm font-semibold text-green-600"
            >
              {t("navbar.login")}
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-lg bg-green-600 px-2 py-2.5 text-sm font-semibold text-white"
            >
              {t("navbar.register")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
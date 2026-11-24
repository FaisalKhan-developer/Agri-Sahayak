import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiArrowRight,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiLock,
  FiPhone,
  FiUser,
} from "react-icons/fi";

function Auth() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const initialMode =
    location.pathname === "/register" ? "register" : "login";

  const [mode, setMode] = useState(initialMode);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isLogin = mode === "login";

  const changeMode = (newMode) => {
    setMode(newMode);
    setSubmitted(false);
    setError("");

    navigate(newMode === "login" ? "/login" : "/register");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.mobile || formData.mobile.length !== 10) {
      setError(
        i18n.language === "hi"
          ? "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।"
          : "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    if (!formData.password) {
      setError(
        i18n.language === "hi"
          ? "कृपया पासवर्ड दर्ज करें।"
          : "Please enter your password."
      );
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError(
        i18n.language === "hi"
          ? "पासवर्ड मेल नहीं खाते।"
          : "Passwords do not match."
      );
      return;
    }

    localStorage.setItem(
      "agriSahayakUser",
      JSON.stringify({
        name: isLogin ? "Farmer" : formData.name,
        mobile: formData.mobile,
      })
    );

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex bg-gradient-to-br from-green-700 to-emerald-600 text-white p-10 flex-col justify-center">
          <div className="mb-8">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
              <FiUser className="text-3xl" />
            </div>

            <h1 className="text-4xl font-bold leading-tight">
              {t("auth.brandTitle")}
            </h1>

            <p className="mt-4 text-green-50 leading-7">
              {t("auth.brandDescription")}
            </p>
          </div>

          <div className="space-y-4">
            {[
              t("auth.benefit1"),
              t("auth.benefit2"),
              t("auth.benefit3"),
              t("auth.benefit4"),
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <FiCheckCircle className="text-green-200 shrink-0" />
                <span className="text-green-50">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="p-7 sm:p-10">
          {/* Language Switch */}
          <div className="flex justify-end mb-5">
            <button
              type="button"
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
              }
              className="border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
            >
              {i18n.language === "en" ? "हिंदी" : "English"}
            </button>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <p className="text-green-600 font-semibold text-sm mb-2">
              {t("auth.welcome")}
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? t("auth.loginTitle") : t("auth.registerTitle")}
            </h2>

            <p className="text-gray-500 mt-2">
              {isLogin
                ? t("auth.loginDescription")
                : t("auth.registerDescription")}
            </p>
          </div>

          {/* Login / Register Tabs */}
          <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1 mb-7">
            <button
              type="button"
              onClick={() => changeMode("login")}
              className={`py-3 rounded-lg font-semibold transition ${
                isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              {t("auth.login")}
            </button>

            <button
              type="button"
              onClick={() => changeMode("register")}
              className={`py-3 rounded-lg font-semibold transition ${
                !isLogin
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              {t("auth.register")}
            </button>
          </div>

          {/* Success */}
          {submitted ? (
            <div className="text-center py-10">
              <FiCheckCircle className="text-green-600 text-6xl mx-auto mb-5" />

              <h3 className="text-2xl font-bold text-gray-800">
                {isLogin
                  ? t("auth.loginSuccess")
                  : t("auth.registerSuccess")}
              </h3>

              <p className="text-gray-500 mt-2 mb-7">
                {t("auth.successDescription")}
              </p>

              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
              >
                {t("auth.goDashboard")}
                <FiArrowRight />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name - Register Only */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("auth.fullName")}
                  </label>

                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("auth.namePlaceholder")}
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              )}

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("auth.mobile")}
                </label>

                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                      }))
                    }
                    placeholder={t("auth.mobilePlaceholder")}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("auth.password")}
                </label>

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={t("auth.passwordPlaceholder")}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("auth.confirmPassword")}
                  </label>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder={t("auth.confirmPasswordPlaceholder")}
                      className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                {isLogin ? t("auth.loginButton") : t("auth.registerButton")}
                <FiArrowRight />
              </button>
            </form>
          )}

          {/* Bottom Link */}
          {!submitted && (
            <p className="text-center text-sm text-gray-500 mt-7">
              {isLogin
                ? t("auth.noAccount")
                : t("auth.haveAccount")}{" "}
              <button
                type="button"
                onClick={() => changeMode(isLogin ? "register" : "login")}
                className="text-green-600 font-semibold hover:text-green-700"
              >
                {isLogin ? t("auth.register") : t("auth.login")}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
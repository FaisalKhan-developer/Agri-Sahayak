import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCloudSun,
  FaLeaf,
  FaMicroscope,
  FaMicrophone,
  FaSeedling,
  FaShoppingCart,
  FaSnowflake,
  FaTractor,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home.services.disease.title"),
      description: t("home.services.disease.description"),
      icon: <FaMicroscope />,
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
      link: "/disease-detection",
    },
    {
      title: t("home.services.weather.title"),
      description: t("home.services.weather.description"),
      icon: <FaCloudSun />,
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      link: "/weather",
    },
    {
      title: t("home.services.market.title"),
      description: t("home.services.market.description"),
      icon: <FaShoppingCart />,
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
      link: "/crop-marketplace",
    },
    {
      title: t("home.services.storage.title"),
      description: t("home.services.storage.description"),
      icon: <FaSnowflake />,
      image:
        "https://images.unsplash.com/photo-1586528116493-da8b6c7c0e4b?auto=format&fit=crop&w=800&q=80",
      link: "/cold-storage",
    },
    {
      title: t("home.services.voice.title"),
      description: t("home.services.voice.description"),
      icon: <FaMicrophone />,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      link: "/voice-assistant",
    },
    {
      title: t("home.services.equipment.title"),
      description: t("home.services.equipment.description"),
      icon: <FaTractor />,
      image:
        "https://images.unsplash.com/photo-1592982537447-6f1a5f7f4c6e?auto=format&fit=crop&w=800&q=80",
      link: "/equipment-rental",
    },
  ];

  const steps = [
    {
      number: "01",
      title: t("home.steps.identify.title"),
      description: t("home.steps.identify.description"),
    },
    {
      number: "02",
      title: t("home.steps.decide.title"),
      description: t("home.steps.decide.description"),
    },
    {
      number: "03",
      title: t("home.steps.manage.title"),
      description: t("home.steps.manage.description"),
    },
    {
      number: "04",
      title: t("home.steps.sell.title"),
      description: t("home.steps.sell.description"),
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85"
            alt={t("home.hero.imageAlt")}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-green-950/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <FaLeaf className="text-green-300" />
              {t("home.hero.badge")}
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("home.hero.title")}
              <span className="block text-green-300">
                {t("home.hero.highlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
              {t("home.hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white transition hover:bg-green-400"
              >
                {t("home.hero.primaryButton")}
                <FaArrowRight />
              </Link>

              <Link
                to="/disease-detection"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {t("home.hero.secondaryButton")}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-300" />
                {t("home.hero.feature1")}
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-300" />
                {t("home.hero.feature2")}
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-300" />
                {t("home.hero.feature3")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
  id="features"
  className="scroll-mt-20 mx-auto max-w-7xl px-6 py-16 md:py-20"
>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-600">
              {t("home.intro.badge")}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {t("home.intro.title")}
              <span className="text-green-600">
                {" "}
                {t("home.intro.highlight")}
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              {t("home.intro.description")}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-4">
                <FaLeaf className="text-2xl text-green-600" />

                <h3 className="mt-3 font-bold text-gray-800">
                  {t("home.intro.farmerFirst.title")}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {t("home.intro.farmerFirst.description")}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <FaSeedling className="text-2xl text-green-600" />

                <h3 className="mt-3 font-bold text-gray-800">
                  {t("home.intro.smart.title")}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {t("home.intro.smart.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=80"
              alt={t("home.intro.imageAlt")}
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FaLeaf />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {t("home.intro.cardTitle")}
                  </p>

                  <p className="text-xs text-gray-500">
                    {t("home.intro.cardSubtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="scroll-mt-20 bg-gray-50 px-6 py-16 md:py-20"
>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-green-600">
              {t("home.servicesSection.badge")}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              {t("home.servicesSection.title")}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {t("home.servicesSection.description")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-green-600 shadow-md">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-green-600">
                    {t("home.servicesSection.explore")}
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-600">
              {t("home.howItWorks.badge")}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {t("home.howItWorks.title")}
              <span className="block text-green-600">
                {t("home.howItWorks.highlight")}
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              {t("home.howItWorks.description")}
            </p>

            <Link
              to="/dashboard"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              {t("home.howItWorks.button")}
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-extrabold text-green-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-900">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80"
            alt={t("home.marketplace.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="relative px-6 py-14 md:px-12 md:py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                {t("home.marketplace.badge")}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                {t("home.marketplace.title")}
              </h2>

              <p className="mt-4 leading-7 text-green-50">
                {t("home.marketplace.description")}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/crop-marketplace"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-700 transition hover:bg-green-50"
                >
                  {t("home.marketplace.primaryButton")}
                  <FaArrowRight />
                </Link>

                <Link
                  to="/government-schemes"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {t("home.marketplace.secondaryButton")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-green-50 px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white">
            <FaLeaf />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {t("home.cta.title")}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {t("home.cta.description")}
          </p>

          <Link
            to="/dashboard"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white transition hover:bg-green-700"
          >
            {t("home.cta.button")}
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
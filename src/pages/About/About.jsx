import {
  Leaf,
  Brain,
  CloudSun,
  Warehouse,
  Mic,
  ShoppingCart,
  Tractor,
  ShieldCheck,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t("about.featureDiseaseTitle"),
      description: t("about.featureDiseaseDescription"),
    },
    {
      icon: CloudSun,
      title: t("about.featureWeatherTitle"),
      description: t("about.featureWeatherDescription"),
    },
    {
      icon: Warehouse,
      title: t("about.featureColdStorageTitle"),
      description: t("about.featureColdStorageDescription"),
    },
    {
      icon: Mic,
      title: t("about.featureVoiceTitle"),
      description: t("about.featureVoiceDescription"),
    },
    {
      icon: ShoppingCart,
      title: t("about.featureMarketplaceTitle"),
      description: t("about.featureMarketplaceDescription"),
    },
    {
      icon: Tractor,
      title: t("about.featureEquipmentTitle"),
      description: t("about.featureEquipmentDescription"),
    },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.goalTitle"),
      description: t("about.goalDescription"),
    },
    {
      icon: Lightbulb,
      title: t("about.approachTitle"),
      description: t("about.approachDescription"),
    },
    {
      icon: Users,
      title: t("about.farmerFirstTitle"),
      description: t("about.farmerFirstDescription"),
    },
  ];

  const highlights = [
    t("about.highlightAI"),
    t("about.highlightLanguage"),
    t("about.highlightBuyingSelling"),
    t("about.highlightMarketplace"),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg">
              <Leaf size={34} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
              {t("about.badge")}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t("about.heroTitle1")}{" "}
              <span className="text-green-700">
                {t("about.heroTitle2")}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {t("about.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
              {t("about.whatIsTitle")}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("about.platformTitle")}
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              {t("about.platformDescription1")}
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              {t("about.platformDescription2")}
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="shrink-0 text-green-600"
                  />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-green-700 p-8 text-white shadow-xl sm:p-10">
            <Leaf size={42} />

            <h3 className="mt-6 text-2xl font-bold">
              {t("about.accessibleTitle")}
            </h3>

            <p className="mt-5 leading-7 text-green-50">
              {t("about.accessibleDescription")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <Brain size={26} />
                <p className="mt-3 font-semibold">
                  {t("about.aiAssisted")}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <Mic size={26} />
                <p className="mt-3 font-semibold">
                  {t("about.voiceEnabled")}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <ShoppingCart size={26} />
                <p className="mt-3 font-semibold">
                  {t("about.marketplace")}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <ShieldCheck size={26} />
                <p className="mt-3 font-semibold">
                  {t("about.farmerFocused")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              {t("about.offerBadge")}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("about.offerTitle")}
            </h2>

            <p className="mt-4 text-gray-600">
              {t("about.offerDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              {t("about.missionBadge")}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("about.missionTitle")}
            </h2>

            <p className="mt-4 text-gray-600">
              {t("about.missionDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-green-100 bg-green-50/50 p-7 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-6 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Leaf className="mx-auto text-white" size={38} />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            {t("about.finalTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50">
            {t("about.finalDescription")}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
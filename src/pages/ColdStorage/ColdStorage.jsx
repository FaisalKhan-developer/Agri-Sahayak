import { useState } from "react";
import {
  Snowflake,
  Search,
  MapPin,
  Navigation,
  Phone,
  Warehouse,
  Clock,
  ShieldCheck,
  LocateFixed,
} from "lucide-react";

import { useTranslation } from "react-i18next";

function ColdStorage() {
  const { t } = useTranslation();

  const [location, setLocation] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    // Real location/cold-storage API will be connected later.
    console.log("Searching cold storage near:", location);
  };

  const handleCurrentLocation = () => {
    // Geolocation API will be connected in a later integration step.
    alert(t("coldStorage.locationIntegration"));
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Snowflake size={29} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              {t("coldStorage.badge")}
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t("coldStorage.title")}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {t("coldStorage.description")}
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          SEARCH SECTION
      ====================================================== */}
      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">

            <div className="mb-6">

              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                {t("coldStorage.searchLocation")}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                {t("coldStorage.findStorage")}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {t("coldStorage.searchDescription")}
              </p>

            </div>


            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-3 lg:flex-row"
            >

              {/* Search Input */}
              <div className="relative flex-1">

                <MapPin
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder={t("coldStorage.locationPlaceholder")}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                />

              </div>


              {/* Search Button */}
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-green-800"
              >
                <Search size={18} />
                {t("coldStorage.search")}
              </button>


              {/* Current Location */}
              <button
                type="button"
                onClick={handleCurrentLocation}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-green-500 hover:text-green-700"
              >
                <LocateFixed size={18} />
                {t("coldStorage.useLocation")}
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESULTS + MAP
      ====================================================== */}
      <section className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-5">

            {/* =================================================
                STORAGE RESULTS
            ================================================== */}
            <div className="lg:col-span-3">

              <div className="mb-5 flex items-end justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                    {t("coldStorage.nearbyFacilities")}
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                    {t("coldStorage.resultsTitle")}
                  </h2>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                  {t("coldStorage.liveResults")}
                </span>

              </div>


              {/* Empty State */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <Warehouse size={30} />
                </div>

                <h3 className="mt-5 text-center text-xl font-bold text-slate-900">
                  {t("coldStorage.emptyTitle")}
                </h3>

                <p className="mx-auto mt-3 max-w-md text-center text-sm leading-6 text-slate-500">
                  {t("coldStorage.emptyDescription")}
                </p>

              </div>


              {/* Example Result Structure */}
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Warehouse size={23} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {t("coldStorage.facilityName")}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {t("coldStorage.facilityInfo")}
                        </p>
                      </div>

                      <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        {t("coldStorage.nearby")}
                      </span>

                    </div>


                    <div className="mt-5 grid gap-3 sm:grid-cols-2">

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin
                          size={17}
                          className="shrink-0 text-green-600"
                        />
                        {t("coldStorage.address")}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Navigation
                          size={17}
                          className="shrink-0 text-green-600"
                        />
                        {t("coldStorage.distance")}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone
                          size={17}
                          className="shrink-0 text-green-600"
                        />
                        {t("coldStorage.contact")}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock
                          size={17}
                          className="shrink-0 text-green-600"
                        />
                        {t("coldStorage.hours")}
                      </div>

                    </div>


                    <div className="mt-5 flex flex-wrap gap-2">

                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {t("coldStorage.storageDetails")}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {t("coldStorage.capacity")}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {t("coldStorage.availability")}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                MAP AREA
            ================================================== */}
            <div className="lg:col-span-2">

              <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">

                <div className="flex items-center justify-between px-2 py-3">

                  <div>
                    <h2 className="font-bold text-slate-900">
                      {t("coldStorage.mapTitle")}
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      {t("coldStorage.mapDescription")}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <MapPin size={20} />
                  </div>

                </div>


                {/* Map Placeholder */}
                <div className="relative mt-2 flex min-h-[430px] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">

                  {/* Decorative map grid */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  </div>


                  <div className="relative z-10 max-w-xs px-6 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-700 shadow-md">
                      <MapPin size={29} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-800">
                      {t("coldStorage.interactiveMap")}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {t("coldStorage.mapPlaceholder")}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT HELPS
      ====================================================== */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              {t("coldStorage.whyUse")}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              {t("coldStorage.betterDecisions")}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {t("coldStorage.whyDescription")}
            </p>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-green-700">
                <Navigation size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {t("coldStorage.nearbyLocations")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("coldStorage.nearbyLocationsDescription")}
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                <Warehouse size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {t("coldStorage.usefulInformation")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("coldStorage.usefulInformationDescription")}
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-600">
                <ShieldCheck size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {t("coldStorage.reliableInformation")}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("coldStorage.reliableInformationDescription")}
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ColdStorage;
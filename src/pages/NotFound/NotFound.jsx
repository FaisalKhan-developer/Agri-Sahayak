import { Link } from "react-router-dom";
import { FaLeaf, FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
          <FaLeaf />
        </div>

        {/* Error */}
        <p className="mt-8 text-7xl font-extrabold text-green-600 md:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-gray-800 md:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          The page you are looking for doesn't exist or may have been moved.
          Let's get you back to Agri-Sahayak.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaHome />
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import { FaLeaf } from "react-icons/fa";

const PageLoader = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-green-600 text-3xl text-white">
          <FaLeaf />
        </div>

        <h2 className="mt-5 text-xl font-bold text-green-700">
          Agri-Sahayak
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Loading smart farming tools...
        </p>

        <div className="mx-auto mt-4 h-1.5 w-32 overflow-hidden rounded-full bg-green-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-green-600" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

import Link from "next/link";
import React from "react";
import { AlertCircle } from "lucide-react"; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        {/* Icon (Optional) */}
        <div className="flex justify-center mb-4">
          <AlertCircle size={64} className="text-red-400" />
        </div>

        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Next.js Link component */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
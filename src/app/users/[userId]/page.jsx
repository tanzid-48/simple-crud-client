import { getUserById } from "@/app/lib/data";
import React from "react";
import Link from "next/link";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);

  if (!user) {
    return <div className="text-center mt-10">User not found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header/Avatar Section */}
        <div className="bg-blue-600 h-24 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full border-4 border-white flex items-center justify-center text-2xl font-bold text-blue-600 translate-y-8 shadow-md">
            {user.name.charAt(0)}
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-12 pb-8 px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm font-medium text-blue-500 uppercase tracking-wide mb-4">
            {user.role}
          </p>

          <div className="space-y-3 text-left bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold">EMAIL</span>
              <span className="text-gray-700">{user.email}</span>
            </div>
            <div className="flex flex-col border-t border-gray-200 pt-2">
              <span className="text-xs text-gray-500 font-semibold">
                USER ID
              </span>
              <span className="text-gray-500 text-xs truncate">{user._id}</span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/users"
              className="inline-block px-6 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Back to Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;

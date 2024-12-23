"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrickWall } from "lucide-react";
import Protected from "@/components/Protected";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Protected authentication={false}>
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-6">
            <BrickWall className="w-16 h-16 mx-auto rounded-full text-[cadetblue]" />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              Welcome To ResumePro
            </h1>
            <p className="text-gray-600 mt-2">Please login to continue</p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Navigation Header */}
            <header className="bg-white">
              <nav className="flex p-1 gap-1 bg-gray-50 m-2 rounded-xl">
                <Link
                  href="/login"
                  className={`flex-1 px-6 py-3 text-center font-medium rounded-lg transition-all duration-300 ${
                    pathname === "/login"
                      ? "bg-white text-[cadetblue] shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`flex-1 px-6 py-3 text-center font-medium rounded-lg transition-all duration-300 ${
                    pathname === "/signup"
                      ? "bg-white text-[cadetblue] shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Register
                </Link>
              </nav>
            </header>

            {/* Main Content */}
            <main className="p-8">
              <div className="space-y-6">{children}</div>
            </main>
          </div>
        </div>
      </Protected>
    </div>
  );
}

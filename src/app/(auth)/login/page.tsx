"use client";
import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/store/hooks";
import { login as storeLogin } from "@/lib/store/auth/authSlice";
import authService from "@/appwrite/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin({ userData }));
        router.push("/my-resumes");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <p className="text-red-500 ">{error}</p>}
      {/* Email Input */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className={`pl-10 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email.message as any}
          </p>
        )}
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            className={` pl-10 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">
            {errors.password.message as any}
          </p>
        )}
      </div>

      {/* TODO: add feature soon  */}
      {/* Remember Me and Forgot Password */}
      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            {...register("rememberMe")}
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded
                     focus:ring-blue-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Forgot password?
        </a>
      </div> */}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        variant={"cadetblue"}
        className="bg-[#58a0a1] w-full py-6 text-lg"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>

      {/* TODO: add feature soon  */}
      {/* Social Login Options */}
      {/* <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300
                     rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-blue-500"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300
                     rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-blue-500"
          >
            GitHub
          </button>
        </div>
      </div> */}
      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <Link
          href={"/signup"}
          className="underline text-[cadetblue] font-medium hover:underline-offset-2"
        >
          Signup
        </Link>
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/features/usersSlice";
import { loginSchema, type LoginFormValues } from "@/lib/schema/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(
        setUser({
          id: "1",
          name: "Madison Greg",
          email: data.email,
          isAuthenticated: true,
        }),
      );

      document.cookie = "auth_token=true; path=/; max-age=86400";
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      {/* Background Image  */}
      <div className="fixed inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/T.dialogue.svg"
          alt="Background Decoration"
          fill
          className="object-cover opacity-50 animate-pulse duration-[10s]"
          priority
        />
      </div>

      <div className="w-full max-w-110 z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-xl shadow-blue-100/50 mb-6 p-4 border border-gray-50">
            <Image
              src="/logo.svg"
              alt="Soludesks"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
            Welcome to <span className="text-blue-600">Soludesks</span>
          </h1>
          <p className="text-gray-500 font-medium">
            Login to your account to continue your journey
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/90 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] shadow-2xl shadow-blue-900/10 border border-white/50">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="name@company.com"
                  className={`h-14 pl-12 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all ${
                    errors.email ? "border-red-300 ring-red-50" : ""
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 font-medium ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`h-14 pl-12 pr-12 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all ${
                    errors.password ? "border-red-300 ring-red-50" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 font-medium ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-base shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-sm text-gray-500">
              New to the platform?{" "}
              <button className="text-blue-600 font-bold hover:underline">
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

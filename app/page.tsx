"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <div className="relative h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden font-sans">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/T.dialogue.svg"
          alt="Background"
          fill
          className="object-cover opacity-20 animate-pulse duration-[10s]"
          priority
        />
      </div>

      {/* Top Right Logo - Absolute positioning for better form focus */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <div className="bg-white/80 backdrop-blur-md p-2 rounded-xl border border-gray-100 shadow-sm">
          <Image
            src="/logo.svg"
            alt="Soludesks"
            width={isMobile ? 80 : 120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-105 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
            Welcome to <span className="text-blue-600">Soludesks</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Login to continue your journey
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/95 backdrop-blur-2xl p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white/50">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5"
          >
            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="name@company.com"
                  className={`w-full h-12 sm:h-13 pl-11 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white transition-all ${
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
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-700"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full h-12 sm:h-13 pl-11 pr-11 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white transition-all ${
                    errors.password ? "border-red-300 ring-red-50" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 sm:h-13 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
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

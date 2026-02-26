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

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

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
    <div className="relative min-h-screen w-full flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden font-sans">
      {/* Background Image  */}
      <div className="fixed inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/T.dialogue.svg"
          alt="Background Decoration"
          fill
          className="object-cover object-center opacity-30 sm:opacity-40 md:opacity-50 animate-pulse duration-[10s]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main Container  */}
      <div className="w-full max-w-[90%] xs:max-w-[400px] sm:max-w-105 md:max-w-110 lg:max-w-120 z-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          {/* Logo - Responsive sizing */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-lg sm:shadow-xl shadow-blue-100/50 mb-4 sm:mb-6 p-3 sm:p-4 border border-gray-50">
            <Image
              src="/logo.svg"
              alt="Soludesks"
              width={isMobile ? 120 : 200}
              height={isMobile ? 48 : 80}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Title - Responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-1 sm:mb-2 px-2">
            <span className="block xs:inline">Welcome to </span>
            <span className="text-blue-600 block xs:inline">Soludesks</span>
          </h1>

          {/* Subtitle - Responsive text */}
          <p className="text-sm sm:text-base text-gray-500 font-medium px-4 sm:px-0">
            {isMobile
              ? "Login to continue your journey"
              : "Login to your account to continue your journey"}
          </p>
        </div>

        {/* Login Form Card - Responsive padding */}
        <div className="bg-white/90 backdrop-blur-xl sm:backdrop-blur-2xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl md:rounded-[32px] shadow-xl sm:shadow-2xl shadow-blue-900/10 border border-white/50">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Email Input */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder={isMobile ? "Email" : "name@company.com"}
                  className={`w-full h-12 sm:h-14 pl-10 sm:pl-12 bg-gray-50/50 border-gray-100 rounded-xl sm:rounded-2xl focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-blue-50 transition-all text-sm sm:text-base ${
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
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] sm:text-[11px] font-bold text-blue-600 hover:text-blue-700 active:text-blue-800"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={isMobile ? "Password" : "••••••••"}
                  className={`w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-10 sm:pr-12 bg-gray-50/50 border-gray-100 rounded-xl sm:rounded-2xl focus:bg-white focus:ring-2 sm:focus:ring-4 focus:ring-blue-50 transition-all text-sm sm:text-base ${
                    errors.password ? "border-red-300 ring-red-50" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 active:text-gray-700 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={isMobile ? 16 : 18} />
                  ) : (
                    <Eye size={isMobile ? 16 : 18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 font-medium ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button  */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 sm:h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg sm:shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2 sm:mt-4"
            >
              {isLoading ? (
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight
                    size={isMobile ? 16 : 18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </Button>
          </form>

          {/* Footer - Responsive spacing and text */}
          <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              <span className="hidden xs:inline">New to the platform? </span>
              <button className="text-blue-600 font-bold hover:underline active:text-blue-800 ml-1">
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

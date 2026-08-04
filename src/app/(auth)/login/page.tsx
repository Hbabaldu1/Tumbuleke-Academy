"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { loginSchema, type LoginFormValues } from "@/lib/validators";

export default function LoginPage() {
  const { login, loading, error, clearError } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema), defaultValues: { rememberMe: false } });

  const onSubmit = async (values: LoginFormValues) => {
    clearError();
    setSuccessMessage(null);
    try {
      await login(values.email, values.password, values.rememberMe);
      setSuccessMessage("Signed in successfully.");
    } catch {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--brand-background)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(7,43,120,0.12)] lg:flex-row lg:p-10">
        <div className="flex-1 rounded-[24px] bg-[linear-gradient(135deg,_#072B78_0%,_#0057FF_100%)] p-8 text-white">
          <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-semibold">Secure access</div>
          <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Welcome back to Tumbuleke Academy</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100 sm:text-base">
            Access your learning account with a modern, protected sign-in experience built for your institution.
          </p>
        </div>

        <div className="flex-1 rounded-[24px] border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">Sign in</p>
            <h2 className="text-2xl font-semibold text-slate-900">Log in to your account</h2>
            <p className="text-sm text-slate-600">Use your institutional email and password to continue.</p>
          </div>

          {error ? <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
          {successMessage ? <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{successMessage}</div> : null}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email address</label>
              <input id="email" type="email" autoComplete="email" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-[color:var(--brand-primary)]" {...register("email")} />
              {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
              <input id="password" type="password" autoComplete="current-password" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("password")} />
              {errors.password ? <p className="mt-2 text-sm text-red-600">{errors.password.message}</p> : null}
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" {...register("rememberMe")} />
                <span>Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm font-semibold text-[color:var(--brand-primary)] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button type="submit" disabled={loading || isSubmitting} className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)] disabled:cursor-not-allowed disabled:opacity-70">
              {loading || isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            New here? <Link href="/auth/register" className="font-semibold text-[color:var(--brand-primary)]">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

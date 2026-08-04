"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { registerSchema, type RegisterFormValues } from "@/lib/validators";

export default function RegisterPage() {
  const { register: signUp, loading, error, clearError } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (values: RegisterFormValues) => {
    clearError();
    setSuccessMessage(null);
    try {
      await signUp({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phone: values.phone,
        terms: values.terms,
      });
      setSuccessMessage("Account created. Please check your email to continue.");
    } catch {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--brand-background)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(7,43,120,0.12)] lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,_#072B78_0%,_#0057FF_100%)] p-8 text-white">
            <div className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-semibold">Join the academy</div>
            <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Create your learner account</h1>
            <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">
              Open a secure account for every new student and instructor in the Tumbuleke Academy ecosystem.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
            <div className="mb-6 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">Register</p>
              <h2 className="text-2xl font-semibold text-slate-900">Start your journey</h2>
              <p className="text-sm text-slate-600">Complete your details to unlock your institution account.</p>
            </div>

            {error ? <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
            {successMessage ? <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{successMessage}</div> : null}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="fullName">Full name</label>
                <input id="fullName" type="text" autoComplete="name" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("fullName")} />
                {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email address</label>
                <input id="email" type="email" autoComplete="email" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("email")} />
                {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" autoComplete="tel" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("phone")} />
                {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">Password</label>
                  <input id="password" type="password" autoComplete="new-password" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("password")} />
                  {errors.password ? <p className="mt-2 text-sm text-red-600">{errors.password.message}</p> : null}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="confirmPassword">Confirm password</label>
                  <input id="confirmPassword" type="password" autoComplete="new-password" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("confirmPassword")} />
                  {errors.confirmPassword ? <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p> : null}
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register("terms")} />
                <span>I agree to the terms and conditions and privacy policy.</span>
              </label>
              {errors.terms ? <p className="text-sm text-red-600">{errors.terms.message}</p> : null}

              <button type="submit" disabled={loading || isSubmitting} className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)] disabled:cursor-not-allowed disabled:opacity-70">
                {loading || isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account? <Link href="/auth/login" className="font-semibold text-[color:var(--brand-primary)]">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

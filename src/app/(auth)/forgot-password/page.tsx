"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "@/lib/validators";

export default function ForgotPasswordPage() {
  const { forgotPassword, loading, error, clearError } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    clearError();
    setSuccessMessage(null);
    try {
      await forgotPassword(values.email);
      setSuccessMessage("A password reset link has been sent to your inbox.");
    } catch {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--brand-background)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(7,43,120,0.12)] sm:p-10">
        <div className="rounded-[24px] bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">Recover access</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Reset your password</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">Enter the email address connected to your account and we will send recovery instructions.</p>

          {error ? <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
          {successMessage ? <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{successMessage}</div> : null}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">Email address</label>
              <input id="email" type="email" autoComplete="email" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("email")} />
              {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.message}</p> : null}
            </div>

            <button type="submit" disabled={loading || isSubmitting} className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)] disabled:cursor-not-allowed disabled:opacity-70">
              {loading || isSubmitting ? "Sending reset link..." : "Send reset link"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Remembered your password? <Link href="/auth/login" className="font-semibold text-[color:var(--brand-primary)]">Back to sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

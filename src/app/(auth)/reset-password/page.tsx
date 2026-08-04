"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/lib/validators";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPassword, loading, error, clearError } = useAuth();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [tokenAvailable, setTokenAvailable] = useState(false);

  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    setTokenAvailable(Boolean(accessToken && refreshToken));
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    clearError();
    setSuccessMessage(null);
    try {
      await resetPassword(values.password);
      setSuccessMessage("Your password has been updated. You can now sign in.");
      router.replace("/auth/login");
    } catch {
      setSuccessMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--brand-background)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(7,43,120,0.12)] sm:p-10">
        <div className="rounded-[24px] bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-primary)]">Secure update</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Choose a new password</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">Create a strong password to protect your learning account.</p>

          {!tokenAvailable ? <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">The reset link appears to be invalid or expired. Please request a new email.</div> : null}
          {error ? <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
          {successMessage ? <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{successMessage}</div> : null}

          <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">New password</label>
              <input id="password" type="password" autoComplete="new-password" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("password")} />
              {errors.password ? <p className="mt-2 text-sm text-red-600">{errors.password.message}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="confirmPassword">Confirm password</label>
              <input id="confirmPassword" type="password" autoComplete="new-password" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[color:var(--brand-primary)]" {...register("confirmPassword")} />
              {errors.confirmPassword ? <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p> : null}
            </div>

            <button type="submit" disabled={loading || isSubmitting || !tokenAvailable} className="flex w-full items-center justify-center rounded-2xl bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)] disabled:cursor-not-allowed disabled:opacity-70">
              {loading || isSubmitting ? "Updating password..." : "Update password"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            <Link href="/auth/login" className="font-semibold text-[color:var(--brand-primary)]">Return to sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

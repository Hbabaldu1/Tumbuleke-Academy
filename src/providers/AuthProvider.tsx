"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthContextValue, AuthState, Profile, RegisterInput } from "@/types/auth";
import {
  getCurrentUser,
  getProfile,
  getSession,
  resetPassword,
  signInWithEmail,
  signOut,
  signUpWithEmail,
  updatePassword,
} from "@/services/auth.service";
import { getAuthRedirectPath } from "@/lib/auth";

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    profile: null,
    loading: true,
    error: null,
  });

  const clearError = useCallback(() => setState((current) => ({ ...current, error: null })), []);

  const refreshSession = useCallback(async () => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      const [session, user] = await Promise.all([getSession(), getCurrentUser()]);
      let profile: Profile | null = null;

      if (user) {
        profile = await getProfile(user.id);
      }

      setState({ user, session, profile, loading: false, error: null });
    } catch (error) {
      setState({ user: null, session: null, profile: null, loading: false, error: error instanceof Error ? error.message : "Unable to refresh session." });
    }
  }, []);

  useEffect(() => {
    void refreshSession();
  }, [refreshSession]);

  const login = useCallback(async (email: string, password: string, rememberMe = false) => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      const data = await signInWithEmail(email, password, rememberMe);
      const profile = data.user ? await getProfile(data.user.id) : null;
      setState({ user: data.user, session: data.session, profile, loading: false, error: null });
      router.replace(getAuthRedirectPath(profile?.role));
    } catch (error) {
      setState({ user: null, session: null, profile: null, loading: false, error: error instanceof Error ? error.message : "Login failed." });
      throw error;
    }
  }, [router]);

  const register = useCallback(async (input: RegisterInput) => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      const data = await signUpWithEmail(input);
      const profile = data.user ? await getProfile(data.user.id) : null;
      setState({ user: data.user, session: data.session, profile, loading: false, error: null });
      router.replace("/auth/login");
    } catch (error) {
      setState({ user: null, session: null, profile: null, loading: false, error: error instanceof Error ? error.message : "Registration failed." });
      throw error;
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      await signOut();
      setState({ user: null, session: null, profile: null, loading: false, error: null });
      router.replace("/auth/login");
    } catch (error) {
      setState({ user: null, session: null, profile: null, loading: false, error: error instanceof Error ? error.message : "Logout failed." });
      throw error;
    }
  }, [router]);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      await resetPassword(email);
      setState((current) => ({ ...current, loading: false, error: null }));
    } catch (error) {
      setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : "Password reset request failed." }));
      throw error;
    }
  }, []);

  const resetPasswordHandler = useCallback(async (password: string) => {
    try {
      setState((current) => ({ ...current, loading: true, error: null }));
      await updatePassword(password);
      setState((current) => ({ ...current, loading: false, error: null }));
      router.replace("/auth/login");
    } catch (error) {
      setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : "Password update failed." }));
      throw error;
    }
  }, [router]);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword: resetPasswordHandler,
      refreshSession,
      clearError,
    }),
    [clearError, forgotPassword, login, logout, refreshSession, register, resetPasswordHandler, state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

import { createClient } from "@/lib/supabase/client";
import type { Profile, RegisterInput } from "@/types/auth";

const supabase = createClient();

export async function signInWithEmail(email: string, password: string, rememberMe = false) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;

  if (rememberMe) {
    await supabase.auth.setSession({
      access_token: data.session?.access_token ?? "",
      refresh_token: data.session?.refresh_token ?? "",
    });
  }

  return data;
}

export async function signUpWithEmail(input: RegisterInput) {
  const { data, error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        full_name: input.fullName,
        phone: input.phone,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/login`,
    },
  });

  if (error) throw error;

  if (data.user) {
    await ensureProfile(data.user.id, input.email, input.fullName, input.phone);
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/reset-password`,
  });

  if (error) throw error;
}

export async function updatePassword(password: string) {
  const { data, error } = await supabase.auth.updateUser({ password });
  if (error) throw error;
  return data;
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();

  if (error) throw error;
  return data;
}

export async function ensureProfile(userId: string, email: string, fullName: string, phone: string) {
  const existing = await getProfile(userId);

  if (existing) return existing;

  const { data, error } = await supabase.from("profiles").insert({
    id: userId,
    email,
    full_name: fullName,
    phone,
    role: "student",
    status: "pending",
  }).select().single();

  if (error) throw error;
  return data;
}

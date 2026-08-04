import { SupabaseProvider } from "@/providers/SupabaseProvider";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <SupabaseProvider>{children}</SupabaseProvider>;
}

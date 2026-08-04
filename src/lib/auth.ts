import type { AppRole, ProfileStatus } from "@/types/auth";

export function isStudent(role?: AppRole | null) {
  return role === "student";
}

export function isInstructor(role?: AppRole | null) {
  return role === "instructor";
}

export function isAdmin(role?: AppRole | null) {
  return role === "admin";
}

export function normalizeRole(role?: string | null): AppRole {
  switch (role) {
    case "instructor":
      return "instructor";
    case "admin":
      return "admin";
    default:
      return "student";
  }
}

export function normalizeStatus(status?: string | null): ProfileStatus {
  switch (status) {
    case "active":
    case "inactive":
    case "pending":
    case "suspended":
      return status;
    default:
      return "pending";
  }
}

export function getAuthRedirectPath(role?: AppRole | null) {
  if (isAdmin(role)) return "/admin/dashboard";
  if (isInstructor(role)) return "/instructor/dashboard";
  return "/student/dashboard";
}

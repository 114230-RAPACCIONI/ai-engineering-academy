import NextAuth from "next-auth";
import { authConfig } from "@/modules/identity/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/app/:path*", "/login", "/register"],
};

import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      access: string[];
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    access?: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    access?: string[];
  }
}
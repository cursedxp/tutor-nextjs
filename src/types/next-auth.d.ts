import "next-auth";

declare module "next-auth" {
  interface User {
    provider?: string;
    role?: string;
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      provider?: string;
    } | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    provider?: string;
  }
}

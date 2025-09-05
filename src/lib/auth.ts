import type { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

async function upsertUser(input: {
  provider: string;
  providerAccountId: string;
  email?: string | null;
  name?: string | null;
  image?: string | null;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sso-login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.API_KEY || "",
      },
      body: JSON.stringify(input),
    }
  );

  if (!res.ok) throw new Error(`SSO login failed: ${res.status}`);

  return (await res.json()) as {
    userId: string;
  };
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (!account) return false;

      try {
        const { userId } = await upsertUser({
          provider: account.provider,
          providerAccountId: account.providerAccountId!,
          name: user?.name ?? profile?.name,
          email: user?.email ?? profile?.email,
          image: user?.image ?? profile?.image,
        });

        type CanonicalUser = typeof user & { _canonicalUserId?: string };

        (user as CanonicalUser)._canonicalUserId = userId;

        return true;
      } catch {
        return false;
      }
    },
    async jwt({ token, user }) {
      type CanonicalUser = typeof user & { _canonicalUserId?: string };

      if (user && (user as CanonicalUser)._canonicalUserId) {
        token.uid = (user as CanonicalUser)._canonicalUserId as string;
      }

      if (user?.email) token.email = user.email;

      console.log(token);

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        userId: token.uid,
      };
    },
  },
};

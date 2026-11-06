import NextAuth, { type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        // narowing
        if (!user.email) {
          throw new Error("User email is missing");
        }
        if (!user.name) {
          throw new Error("User name is missing");
        }

        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({
            emailAddress: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch (error) {
        console.error("Sign-in callback failed:", error);

        return false;
      }
    },
    async session({ session }) {
      const email = session.user.email;

      if (!email) {
        throw new Error("User email is missing");
      }

      const guest = await getGuest(email);

      if (!guest) {
        throw new Error("Guest not found");
      }

      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

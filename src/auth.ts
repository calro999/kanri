import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // ログインユーザーのメールアドレスが mattan029@gmail.com の場合のみログインを許可
      if (user.email === "mattan029@gmail.com") {
        return true
      }
      return false
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET || "a-very-long-secret-key-32-characters-or-more-for-nextauth",
})

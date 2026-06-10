import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "MOCK_GOOGLE_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MOCK_GOOGLE_CLIENT_SECRET",
    }),
    Credentials({
      id: "demo-login",
      name: "Demo Login",
      credentials: {
        email: { label: "Email", type: "email" }
      },
      async authorize(credentials) {
        // 開発環境用のデモログイン。mattan029@gmail.com へのログインを許可
        if (credentials?.email === "mattan029@gmail.com") {
          return {
            id: "mattan-demo-user",
            name: "Yuto Mattan",
            email: "mattan029@gmail.com",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80"
          }
        }
        return null;
      }
    })
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

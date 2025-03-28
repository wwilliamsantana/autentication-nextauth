import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Credentials({})],
})
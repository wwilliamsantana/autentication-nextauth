import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import findUserByCrendentials from "./lib/user"


export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Credentials({
    credentials: {
      email: {},
      password: {}
    },
    authorize: async (credentials) => {

      // lógica de autenticação - Verificar email e password
      const user = await findUserByCrendentials(
        credentials.email as string,
        credentials.password as string
      )

      return user

    }
  })],
})
import { compareSync } from "bcrypt-ts"
import prisma from "./prisma"

interface User {
  email: string
  name: string
}


export default async function findUserByCrendentials(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email,
    }
  })

  if (!user) {
    return null
  }

  const comparePassword = compareSync(password, user.password)

  if (comparePassword) {
    return {
      email: user.email,
      name: user.name,
    }
  }

  return null
}
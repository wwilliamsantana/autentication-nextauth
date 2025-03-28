"use server"

import prisma from "@/lib/prisma"
import { hashSync } from "bcrypt-ts"


export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries) as {
    name: string
    email: string
    password: string
  }
  console.log(data)

  if (!data.email || !data.name || !data.password) {
    throw new Error("Informe todos os dados!")
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if (user) {
    throw new Error("Usúario já existe!")
  }

  await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password)
    }
  })

}